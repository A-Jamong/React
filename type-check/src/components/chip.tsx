import React from "react";
import "@/styles/chips.css";

interface ChipProps {
  id: number; // 또는 string, 실제 사용되는 데이터에 따라 다름
  chipName: string;
  status?: "default" | "select" | "disabled";
  onClick?: (id: number) => void;
}

const Chip: React.FC<ChipProps> = ({
  id,
  chipName,
  status = "default",
  onClick,
}) => {
  const chipId = `chip-${id}`; // 올바른 템플릿 리터럴 문법 사용

  let statusMessage = "";

  switch (status) {
    default:
    case "default":
      statusMessage = `${chipName} 선택할 수 있습니다.`; // 템플릿 리터럴 사용
      break;
    case "select":
      statusMessage = `${chipName} 선택했습니다.`; // 템플릿 리터럴 사용
      break;
    case "disabled":
      statusMessage = `${chipName} 선택할 수 없습니다.`; // 템플릿 리터럴 사용
      break;
  }

  return (
    <div className="chip__container">
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
};

export default Chip;
