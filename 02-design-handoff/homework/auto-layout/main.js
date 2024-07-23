/* -------------------------------------------- */
// 웹 컴포넌트 -> create 어쩌구 extends
/* -------------------------------------------- */


class listitem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>@import url('/02-design-handoff/homework/auto-layout/main.css');</style>
    <ul class="list--item">
      <img class="list--item--img"/>
      <p class="list--item--text">테스트</p>
    </ul>
    `
  }

  connetedCallback() {
  }

  clickMe(){
  }
}

customElements.define("list-item", listitem);
