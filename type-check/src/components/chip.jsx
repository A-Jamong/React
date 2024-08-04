import React from "react";
import "@/styles/chips.css";

export default function Chip({
  id, // 추가된 id
  chipName = "single-chip",
  status = "default",
  onClick,
}) {
  const chipId = `chip-${id}`; // 고유한 ID 생성

  let statusMessage = "";

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

  return (
    <div className="chip__container" onClick={onClick}>
      <label className={`chip chip--${status}`} htmlFor={chipId}>
        {status === "select" && (
          <img
            src="/icon/check_icon.jpg"
            className="chip__img"
            alt="체크 이모티콘"
          />
        )}
        {chipName}
        <input
          type="checkbox"
          id={chipId}
          disabled={status === "disabled"}
          aria-label={statusMessage}
          checked={status === "select"}
          readOnly
        />
      </label>
    </div>
  );
}
