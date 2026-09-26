// Code colours drawn from the event display: cyan keywords, yellow literals,
// red for errors and deletions, steel for comments.
export default {
  name: "detector",
  type: "dark",
  colors: { "editor.background": "#0E131A", "editor.foreground": "#D5DBE3" },
  tokenColors: [
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: "#7F8A99", fontStyle: "italic" } },
    { scope: ["keyword", "storage", "storage.type", "keyword.operator.new", "keyword.other"], settings: { foreground: "#3FD3E0" } },
    { scope: ["string", "constant.numeric", "constant.language", "constant.character", "string.regexp"], settings: { foreground: "#F2D23C" } },
    { scope: ["entity.name.function", "support.function", "meta.function-call"], settings: { foreground: "#FFFFFF" } },
    { scope: ["entity.name.type", "support.type", "entity.name.class", "support.class"], settings: { foreground: "#9FB6CF" } },
    { scope: ["variable.parameter", "variable.other.property", "meta.object-literal.key"], settings: { foreground: "#C3CAD4" } },
    { scope: ["punctuation", "keyword.operator"], settings: { foreground: "#8E99A8" } },
    { scope: ["invalid", "markup.deleted"], settings: { foreground: "#E5483B" } },
    { scope: ["markup.inserted"], settings: { foreground: "#3FD3E0" } },
    { scope: ["markup.heading", "markup.bold"], settings: { foreground: "#E8ECF1", fontStyle: "bold" } },
  ],
};
