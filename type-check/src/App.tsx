import React, { useState } from "react";
import Chip from "@/components/chip.tsx"; // 컴포넌트 경로 확인
import { ChipData, chipData } from "@/data/chipData"; // 데이터와 타입 가져오기

const App: React.FC = () => {
  const [data, setData] = useState<ChipData[]>(chipData); // 데이터 파일에서 가져온 데이터로 초기화

  const handleChipClick = (id: number) => {
    setData((prevData) =>
      prevData.map((chip) =>
        chip.id === id
          ? { ...chip, status: chip.status === "select" ? "default" : "select" }
          : chip
      )
    );
  };

  return (
    <div>
      {data.map((chip) => (
        <Chip
          key={chip.id}
          id={chip.id}
          chipName={chip.chipName}
          status={chip.status}
          onClick={() => handleChipClick(chip.id)}
        />
      ))}
    </div>
  );
};

export default App;
