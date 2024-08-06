// --------------------------------------------------------------------------
// ✅ Counter 컴포넌트
// --------------------------------------------------------------------------
// - [x] `count` 속성(prop, 기본 값: 1)을 전달받아 화면에 표시
// - [x] `step` 속성(기본 값: 1)을 전달받아 버튼 레이블에 표시
// - [x] `min` 속성(기본 값: 1) 보다 `count` 값이 크거나 같아야 함 //? 조건 어떻게 걸지 - propTypes? -> 프롭 타입 내에서는 이런 거 못 함. 따로 검증 함수.
// - [x] `max` 속성(기본 값: 1000) 보다 `count` 값이 작거나 같아야 함
// - [x] 사용자가 감소 버튼을 클릭하면 `count` 감소 (step 만큼)
// - [x] 사용자가 증가 버튼을 클릭하면 `count` 증가 (step 만큼)
// - [ ] 사용자가 감소 버튼을 클릭했을 때 `count` 값이 `min` 보다 작을 경우 감소 버튼 비활성화
// - [ ] 사용자가 증가 버튼을 클릭했을 때 `count` 값이 `max` 보다 클 경우 증가 버튼 비활성화
// --------------------------------------------------------------------------

import { useId, useState } from 'react';
import { number } from 'prop-types';

Counter.propTypes = {
  count: number,
  step: number,
  min: number,
  max: number,
};

/**@type {({ count?: number, step?: number, min?: number, max?: number }) => JSX.Element} */
function Counter({ count: initialCount = 1, step = 1, min = 1, max = 1000 }) {
  const id = useId();
  // * 여기서 달라질 부분은 count 숫자 뿐이니까~ count 만 useState
  const [count, setCount] = useState(() => {
    if (initialCount < min || initialCount > max) {
      console.warn(
        `count값이 현재 ${initialCount}입니다! ${min},${max} 값 사이의 값이어야 합니다.`
      );
    }
    return initialCount;
  });
  // 처음에 값 받을 때 조건 처리 - 이거 안 맞으면 아예 실행 안 되게 하는게 나을지도.
  // if (count < min || count > max) {
  //   console.warn(
  //     `count값이 현재 ${count}입니다! ${min},${max} 값 사이의 값이어야 합니다.`
  //   );
  // }

  // 호출된 부분에서 className 가져와서 Disabled 되게? => 불리언 변수 하나 만들어서 disabled = {} 로 넣어주면된다!
  // function checkNumber(className, count) {
  //   console.log(className, count);
  //   if (count < min) {
  //     // realDom 으로 만들어지기 전에 쿼리 접근하려고 해서 그런가 오류남
  //     console.log(document.querySel);
  //     const minBtn = document.querySelector(className);
  //     console.log(minBtn);
  //   }
  // }
  // 누르면 step 값 만큼 감소/증가 -> 다시 렌더링해달라고 요청해야됨 -> setState
  // min, max 값보다 더 작아지거나 커지면 조건처리 필요해보임. -> 버튼 비활성화할 함수가 있어야될듯. 위에 처음 값 받을 때 조건처리랑 똑같은 거 쓸 것 같은데.
  const minusCount = () => {
    let nextValue = count - step;
    // checkNumber(classN, count);
    setCount(nextValue);
  };

  const plusCount = () => {
    // console.log(classN);
    let nextValue = count + step;
    setCount(nextValue);
  };
  const isDisabledDecrease = count <= min;
  const isDisabledIncrease = count >= max;

  const handleWrite = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="Counter">
      <div>
        <label htmlFor={id}>이것은테스트</label>
        <input type="search" placeholder="e" id={id} onChange={handleWrite} />
      </div>
      <button
        className="minusBtn"
        type="button"
        onClick={minusCount}
        disabled={isDisabledDecrease}
      >
        -{step}
      </button>
      <output>{count}</output>
      <button
        className="plusBtn"
        type="button"
        disabled={isDisabledIncrease}
        onClick={plusCount}
      >
        +{step}
      </button>
    </div>
  );
}

export default Counter;
