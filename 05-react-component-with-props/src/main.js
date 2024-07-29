import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// 데이터 가져오기
import listData from "./data/list.js";

// 컴포넌트 불러오기
import AvatarListPage from "./pages/AvatarListPage.js";

// 리액트 앱을 렌더링 할 DOM 요소 참조
const container = document.getElementById("react-app");

// DOM 요소가 존재한다면?
if (container) {
  // ArchitectureList 컴포넌트 -> 리액트 엘리먼트 생성
  // ArchitectureList 컴포넌트에 속성(props) 전달
  // createRoot(container).render(React.createElement(ArchitectureListPage));

  createRoot(container).render(React.createElement(AvatarListPage));
}
// 존재하지 않는다면?
else {
  // 개발자에게 경고
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}