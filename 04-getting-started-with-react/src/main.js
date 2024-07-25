/*

import {createElement}  from "./lib/virtual/index.js";
import createRoot from './lib/virtual-dom/createRoot.js';

// 웹 api에서 요소를 생성하고 싶을 떄 -> CreateElement
// 부모(상위) 요소 생성
const figureElement = document.createElement('figure')
// 자식(하위) 요소 생성
const figcaptionElement = document.createElement('figcaption');
// 요소간 관계 형성
figureElement.append(figcaptionElement)
// console.dir(figureElement) // 여기서 출력되는 게 실제 돔 (아주아주아주 복잡함)

// 가상(추상화된, 단순화된) 요소(엘리멘트) 생성
const figureVElement = createElement('figure');
// console.log(figureVElement)

//실제 돔에 마운트(착장===렌더링)
const actualDomElement = document.getElementById('actual-dom')
// console.log(actualDomElement)

actualDomElement.append(figureElement);

const vDom = document.getElementById('virual-dom')
const vRoot = createRoot(vDom);


vRoot.render(figureVElement)*/
/*
// 실습

import { createElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";
import createElement from './lib/virtual/createElement';
// <ul class="architextures" lang="en"></ul> 가상 요소 생성하기
// api: createElement(type, props, ...children)
const list = createElement(
  "ul",
  { className: "architectures", lang: "en" },
  // ...children(child1,child2,...childN)
  createElement(
    "li",
    { className: "item" },
    createElement("img", {
      src: "/04-getting-started-with-react/public/architectures/architecture-1.jpg",
      alt: "",
    }),
    createElement("span", { className: "content" }, "Climatology"),
    createElement(
      "button",
      { type: "button", title: "아이템 이동(위/아래 화살표 키 활용" },
      createElement("img", {
        src: "/04-getting-started-with-react/public/icons/handle.svg",
        alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  )
);

console.log(list);

// 가상 돔 ( 실제 돔 흉내 : 단순화 )

const root = createRoot(document.getElementById("virtual-dom"));
root.render(list);*/

//  리액트 요소 (리액트 요소 === 가상 돔 요소 노드 )

// const children = [];

// const list = React.createElement(
//   "ul",
//   { className: "architectures", lang: "en" },
//   children
// );
// console.log(list);

// console.log(React.isValidElement(list)); //true
/* -------------------------------------------- */
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
const listData = {
  items: [
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "4", title: "Building design" },
    { id: "3", title: "Graphics" },
  ],
};

//반응성 구현 : 프록시 객체 활용

const reactivityListData = new Proxy(listData, {
  //get (원본 수정 대신, 프록시를 사용해 가로채서 읽기)
  get(target, prop) {
    //객체의 속성 반환
    return target[prop];
  },
  //set (원본 수정 대신, 프록시를 사용해 가로채서 쓰기)
  set(target, prop, newValue) {
    const oldValue = target[prop];
    target[prop] = newValue;
    console.log("[set] update", JSON.stringify(newValue));
    return true;
  },
});

const listItem = listData.items.map(({ id, title }) => {
  const itemElement = React.createElement(
    "li",
    {
      className: "item",
    },
    React.createElement("img", {
      src: `/04-getting-started-with-react/public/architectures/architecture-${id}.jpg`,
      alt: "",
    }),
    React.createElement(
      "span",
      {
        className: "content",
      },
      title
    ),
    React.createElement(
      "button",
      {
        type: "button",
        title: "아이템 이동 (위/아래 화살표 키 활용)",
      },
      React.createElement("img", {
        src: "/04-getting-started-with-react/public/icons/handle.svg",
        alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  );
  return itemElement;
});

const list = React.createElement(
  "ul",
  { className: "architectures", lang: "en" },
  ...listItem
);

const container = document.getElementById("root");
// ReactDOM Root 생성
const reactDomRoot = ReactDOM.createRoot(container);

function render() {
  reactDomRoot.render(list);
}

function unmount() {
  reactDomRoot.unmount(list);
}

setTimeout(() => {
  console.log("1초 지남");
  reactivityListData.items = [
    ...reactivityListData.items,
    {
      id: 1,
      title: "ee",
    },
  ];
}, 1000);

setTimeout(() => {
  console.log(reactivityListData.items);
}, 2000);
// setTimeout(unmount, 4000);

// 렌더, 마운트 : 화면에 표시 , 언마운트 : 화면에서 제거

// 반응성 구현 : 개발자 -> 데이터 수정 -> 반응성 (변경 감지) -> 리액트 -> 화면 업데이트 구현
