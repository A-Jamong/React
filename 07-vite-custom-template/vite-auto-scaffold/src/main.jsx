import React from "react";
import { createRoot } from "react-dom/client";
import AvatarListPage from "./pages/AvatarList";

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(<AvatarListPage />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
