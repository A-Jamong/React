import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import '@/styles/globals.css';

// vite 클라이언트 환경에서 사용가능한 환경 변수
// BASE_URL : '/' 은 퍼블릭 폴더 가리킴
console.log(import.meta.env);

const domN = document.getElementById("react-app");
ReactDOM.createRoot(domN).render(
  <StrictMode>
    <App />
  </StrictMode>
);
