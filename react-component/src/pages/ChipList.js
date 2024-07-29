import React, { createElement as cE } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import Chips from "../components/Chips.js";

export default function ChipsList() {
  return cE(
    "div",
    null,
    cE(Chips, { chipName: "기본 선택", status: "default" }),
    cE(Chips, { chipName: "선택됨!", status: "select" }),
    cE(Chips, { chipName: "선택할 수 없음!", status: "disabled" })
  );
}
