import { randomNumber, typeOf } from '../utils';
import reactImagePath from '../assets/react.svg?url';
import viteImagePath from '../assets/vite.svg?url';
import kakaoImagePath from '../assets/kakao.svg?url';
// import nextJsImagePaht from '../assets/next-js.svg?url'
// vite를 쓰면 ?url 쓰면 개발할 때마다 바뀌는 경로 뒤의 t=? 가 생긴다.
// 개발에서 변경사항이 있음에도 불구하고 실제 브라우저에는 캐싱된 것 떄매 안 바뀌는 상황이 사라진다.

const IMAGE_TYPES = ['react', 'vite', 'kakao'];

function ConditionalRendering({ imageType }) {
  // 조건부 렌더링
  // 함수 몸체 (function body) 영역 안에서
  // 조건에 따라 렌더링 결과가 달라짐
  let imagePath = '';
  let printText = '';

  if (imageType.includes('react')) {
    imagePath = reactImagePath;
    printText = 'React';
  }

  if (imageType.includes('vite')) {
    imagePath = viteImagePath;
    printText = 'Vite';
  }
  if (imageType.includes('kakao')) {
    imagePath = kakaoImagePath;
    printText = 'Kakao';
  }
  const isShowSpinner=randomNumber(0, 1) > 0.5;
  const spinnerOrVite = isShowSpinner ? (
      <img className="spinner" src="/icons/spinner.svg" alt="로딩 중..." />
    ) : (
      <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
    );

  // if (imageType.includes('next-js')) {
  //   imagePath = viteImagePath;
  //   printText = 'Next.js';
  // }
  const spinnerMessage = isShowSpinner ? '(스피너 표시)' : null;

  return (
    <>
      <dt>조건부 렌더링(conditional rendering){spinnerMessage}</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          {/* imageType 값이 'vite'인 경우 Vite 이미지를, 'react'인 경우 React 이미지를 화면에 표시합니다. */}
          <img src={imagePath} alt="" />
          {/* imageType이 'vite'인 경우 'Vite', 'react'인 경우 'React' 텍스트를 화면에 표시합니다. */}
          <p>{printText}</p>
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className="conditionalRendering">{spinnerOrVite}</div>
      </dd>
    </>
  );
}

export default ConditionalRendering;

ConditionalRendering.propTypes = {
  imageType(props, propName, componentName) {
    const propValue = props[propName];
    const propType = typeOf(propValue);
    const allowedType = 'string';
    const types = ['react', 'vite'];
    const typeMatchString = types.reduce((result, type, index, array) => {
      const divider = index < array.length - 1 ? '|' : '';
      return result + type + divider;
    }, '');

    console.log(typeMatchString);
    const typeMatch = new RegExp('^(react|vite)$', 'i');

    // 타입 검사 - 리액트 혹은 비트로 끝나는 경우만 트루 반환
    if (propType !== allowedType || !typeMatch.test(propValue)) {
      // 타입이 다르면 오류 처리
      throw new Error(
        `${componentName} 컴포넌트 ${propName} 속성 타입은 "${allowedType}" 타입이 요구되나, 실제 전달된 타입은 "${propType}"입니다.`
      );
    }

    // 그렇지 않으면 통과
  },
};