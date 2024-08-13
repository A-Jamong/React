// --------------------------------------------------------------------------
// ✅ animate() 함수 사용법
// --------------------------------------------------------------------------
// - [ ] animate(선택자_또는_DOM_요소_집합, 속성, 옵션)
// - [ ] 롤리팝을 x축 방향으로 400px만큼 이동해보세요.
// - [ ] 롤리팝을 360도(시계 방향) 회전해 굴러가도록 설정해보세요.
// - [ ] 롤리팝 애니메이션 진행 속도를 4초로 설정해보세요.
// - [ ] 진행률이 화면에 표시되도록 애니메이션해봅니다.
// --------------------------------------------------------------------------

import { animate } from 'motion';
import S from './AnimateDemo.module.css';
import { useRef } from 'react';

function AnimateDemo() {
  const lollipopRef = useRef(null);
  const handleMoveAnimate = () => {
    const lollipopElement = lollipopRef.current;
    animate(
      lollipopElement,
      { x: 400, rotate: 360 },
      { duration: 4, opacity: { duration: 0.4 } }
    );
  };

  // 리액트의 current 값이 null 인데 이게 마운트 되고 나면 HTMLOutputElement가 들어온다.

  const progressRef = useRef(null);
  const handleProgressAnimate = () => {
    const { current: element } = progressRef;
    const progressAnimation = (progress) => {
      // 진행률 애니메이션 로직 작성
      const animationValue = Math.round(progress * 100) + '%';
      element.value = animationValue;
      console.log(animationValue);
    };
    const options = {
      duration: 3,
      easing: 'ease-out',
    };
    animate(progressAnimation, options);
  };

  return (
    <div className={S.component}>
      <button className={S.button} type="button" onClick={handleMoveAnimate}>
        무빙 애니메이션
      </button>

      <figure ref={lollipopRef} className={S.lollipop} />

      <div className={S.wrapper}>
        <button
          type="button"
          className={S.button}
          onClick={handleProgressAnimate}
        >
          진행률 애니메이션
        </button>
        <output ref={progressRef} className={S.output}>
          0%
        </output>
      </div>
    </div>
  );
}

export default AnimateDemo;
