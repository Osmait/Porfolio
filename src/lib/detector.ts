// Geometry for the event display. Everything here runs at build time and
// produces plain SVG path data, so the display renders without JavaScript.

const D = Math.PI / 180;
export const f = (n: number) => +n.toFixed(2);
export const pol = (r: number, a: number): [number, number] => [r * Math.cos(a * D), r * Math.sin(a * D)];

export const R = {
  pipe: 12,
  trkOut: 250,
  layers: [36, 50, 64, 96, 128, 160, 192, 224, 246],
  sol: 258,
  calIn: 268,
  calMid: 302,
  calOut: 366,
  mu: [
    [392, 404],
    [432, 444],
    [472, 484],
  ] as [number, number][],
  phi: 496,
};

export function sector(r0: number, r1: number, a0: number, a1: number) {
  const [x0, y0] = pol(r0, a0),
    [x1, y1] = pol(r1, a0),
    [x2, y2] = pol(r1, a1),
    [x3, y3] = pol(r0, a1),
    L = a1 - a0 > 180 ? 1 : 0;
  return `M${f(x0)} ${f(y0)}L${f(x1)} ${f(y1)}A${r1} ${r1} 0 ${L} 1 ${f(x2)} ${f(y2)}L${f(x3)} ${f(y3)}A${r0} ${r0} 0 ${L} 0 ${f(x0)} ${f(y0)}Z`;
}

/** Helix in a solenoid field seen end-on: starts at the vertex, loses a little energy per step. */
export function curl(phi: number, radius: number, q: 1 | -1, rmax: number) {
  let x = 0,
    y = 0,
    h = phi * D,
    r = radius,
    turned = 0;
  const pts: [number, number][] = [[0, 0]];
  for (let i = 0; i < 4000; i++) {
    x += Math.cos(h);
    y += Math.sin(h);
    h += q / r;
    turned += 1 / r;
    r *= 0.9998;
    if (i % 3 === 0) pts.push([x, y]);
    if (Math.hypot(x, y) >= rmax || turned > Math.PI * 2.25) {
      pts.push([x, y]);
      break;
    }
  }
  return pts;
}

export const toPath = (pts: [number, number][]) => "M" + pts.map((p) => f(p[0]) + " " + f(p[1])).join("L");

/** Squares where a path crosses the tracker layers, like hits in the silicon. */
export function layerHits(pts: [number, number][]) {
  const hits: [number, number][] = [];
  for (let i = 1; i < pts.length; i++) {
    const r0 = Math.hypot(...pts[i - 1]),
      r1 = Math.hypot(...pts[i]);
    for (const L of R.layers) if ((r0 - L) * (r1 - L) < 0) hits.push(pts[i]);
  }
  return hits;
}

export function farthest(pts: [number, number][]) {
  let far = pts[0],
    fr = 0;
  for (const p of pts) {
    const r = Math.hypot(...p);
    if (r > fr) {
      fr = r;
      far = p;
    }
  }
  return { far, fr };
}

/** Curvature radius from commit count: more history, more momentum, straighter track. */
export const radiusFromCommits = (commits: number) => 70 + 18 * Math.sqrt(commits);

/** Evenly spread angles, offset so nothing starts on an axis. */
export const spread = (n: number, start: number) => Array.from({ length: n }, (_, i) => start + (i * 360) / n);
