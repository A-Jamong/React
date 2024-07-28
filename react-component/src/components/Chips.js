import React, { createElement as cE } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

/*
<div class="chip__container">
      <label
        class="chip chip--default"
        for="check"
      >
        Single-chips
        <img
          src="/icon/check_icon.jpg"
          class="chip__img"
          alt="체크되었습니다!"
        />
        <input
          type="checkbox"
          value="chip1"
          id="check"
        >
      </label>
    </div>
*/

// img 는 선택되었을 때만 나타나게 하고 싶은데 어떻게 해야될지 고민. -> && 을 통해서 status가 select일 경우 이미지 추가하게 했다! 

export default function chips({
  chipName = "single-chip",
  status = "default",
}) {
  // aria-lable 용! chipName + status에 따라 선택할 수 있습니다/선택했습니다/선택할 수 없습니다.
  let statusMessage = "";
  // 상태에 따라서 모양새가 바뀌니까 statusCss 로 클래스명을 줘서 추가/삭제하는 식 -> 상태에 따른 css를 --default, --select로 해놔서 status값만 있으면 클래스 이름을 줄 수 있어서 해결됐다!
  // let statusCss = "";

  switch (status) {
    default:
    case "default":
      statusMessage = `${chipName} 선택할 수 있습니다.`;
      break;
    case "select":
      statusMessage = `${chipName} 선택했습니다.`;
      break;
    case "disabled":
      statusMessage = `${chipName} 선택할 수 없습니다.`;
      break;
  }
  return cE(
    "div",
    {
      className: "chip__container",
    },
    cE(
      "label",
      { className: `chip chip--${status}`, for: "checkChip" },
      status === "select" &&
        cE("img", {
          src: "/icon/check_icon.jpg",
          className: "chip__img",
          alt: "체크 이모티콘",
        }),
      chipName,
      cE("input", {
        type: "checkbox",
        value: chipName,
        id: "checkChip",
        "aria-label": statusMessage,
      })
    )
  );
}
