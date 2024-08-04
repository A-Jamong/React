import React from "react";
import Chip from "@/components/chip";

const chipData = [
  { id: 1, chipName: "chip1", status: "default" },
  { id: 2, chipName: "chip2", status: "select" },
  { id: 3, chipName: "chip3", status: "disabled" },
];

function App() {
  return (
    <div>
      {chipData.map((chip) => (
        <Chip
          key={chip.id} // 고유한 id 값을 key로 사용
          id={chip.id} // 고유한 id를 Chip 컴포넌트로 전달
          chipName={chip.chipName}
          status={chip.status}
          onClick={() => console.log(`${chip.chipName} clicked`)}
        />
      ))}
    </div>
  );
}

export default App;
