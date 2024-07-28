import React, { createElement as cE } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import ChipsList from "./pages/ChipList.js";

const container = document.getElementById("root");
const reactDomRoot = createRoot(container);

if (container) {
  reactDomRoot.render(React.createElement(ChipsList));
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
