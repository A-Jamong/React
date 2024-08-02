function NavContents() {
  /* ------------------------------------------ */
  /*           이 부분은 순수 / 컴포 바디(렌더링관련)    */
  /* ------------------------------------------ */
  const handler = () => {
    /* ------------------------------------------ */
    /*      이 부분은 순수 필요 X / 컴포 바디 내부(핸들러)  */
    /* ------------------------------------------ */
    console.log('handler');
  };
  return (
    /* ------------------------------------------ */
    /*           이 부분은 순수 / JSX 내부             */
    /* ------------------------------------------ */
    <nav className="NavContents" aria-label="학습 주제 탐색">
      <a href="#jsx-markup" onClick={handler}>
        JSX 마크업
      </a>

      <a href="#responding-to-events" className="active">
        이벤트 응답
      </a>
    </nav>
  );
}

export default NavContents;
