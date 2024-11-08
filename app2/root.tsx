import "@fremtind/jokul/styles/core/core.min.css";
import "@fremtind/jokul/styles/styles.min.css";
import "@fremtind/jokul/styles/fonts/webfonts.min.css";

import { createRoot } from "react-dom/client";
import { App } from "./App";

const domNode = document.getElementById("root");

if (!domNode) throw Error("No root element");

const root = createRoot(domNode);

root.render(<App />);
