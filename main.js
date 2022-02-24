import "./style.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";
import Reveal from "reveal.js";
import Notes from "reveal.js/plugin/notes/notes.esm"
import Zoom from "reveal.js/plugin/zoom/zoom.esm"
import Highlight from "reveal.js/plugin/highlight/highlight.esm";

let deck = new Reveal(document.querySelector("#app"), {
  hash: true,
  plugins: [Highlight, Notes, Zoom]
});
deck.initialize()