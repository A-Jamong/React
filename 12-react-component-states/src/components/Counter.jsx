// --------------------------------------------------------------------------
// ✅ Counter 컴포넌트
// --------------------------------------------------------------------------
// - [x] `count` 속성(prop, 기본 값: 1)을 전달받아 화면에 표시
// - [x] `step` 속성(기본 값: 1)을 전달받아 버튼 레이블에 표시
// - [x] `min` 속성(기본 값: 1) 보다 `count` 값이 크거나 같아야 함 //? 조건 어떻게 걸지 - propTypes? -> 프롭 타입 내에서는 이런 거 못 함. 따로 검증 함수.
// - [x] `max` 속성(기본 값: 1000) 보다 `count` 값이 작거나 같아야 함
// - [ ] 사용자가 감소 버튼을 클릭하면 `count` 감소 (step 만큼)
// - [ ] 사용자가 증가 버튼을 클릭하면 `count` 증가 (step 만큼)
// - [ ] 사용자가 감소 버튼을 클릭했을 때 `count` 값이 `min` 보다 작을 경우 감소 버튼 비활성화
// - [ ] 사용자가 증가 버튼을 클릭했을 때 `count` 값이 `max` 보다 클 경우 증가 버튼 비활성화
// --------------------------------------------------------------------------

import { useState } from 'react';
import { number } from 'prop-types';

Counter.propTypes = {
  count: number,
  step: number,
  min: number,
  max: number,
};

/**@type {({ count?: number, step?: number, min?: number, max?: number }) => JSX.Element} */
function Counter({ count: initialCount = 1, step = 1, min = 1, max = 1000 }) {
  let [count] = useState(initialCount);

  if (count < min || count > max) {
    console.warn(`count값은 ${min},${max} 값 사이의 값이어야 합니다.`);
  }

  function minusCount() {
    count -= step;
    console.log(count);
  }
  function plusCount() {
    console.log('plus');
  }

  return (
    <div className="Counter">
      <button type="button" onClick={minusCount}>
        -{step}
      </button>
      <output>{count}</output>
      <button type="button" onClick={plusCount}>
        +{step}
      </button>
    </div>
  );
}

export default Counter;
