// --------------------------------------------------------------------------
// ✅ ExpandableText 컴포넌트
// --------------------------------------------------------------------------
// - [ ] `text` 속성(prop) 길이에 따라 확장 가능한 텍스트 렌더링
// - [ ] `limit` 속성(기본 값: 255) 값보다 `text` 길이가 짧은 경우 텍스트만 표시
// - [ ] `limit` 속성 값보다 `text` 길이가 긴 경우 텍스트 말줄임(...) 표시
// - [ ] `limit` 속성 값보다 `text` 길이가 긴 경우 확장 or 축소 버튼 표시
// - [ ] 확장 or 축소 버튼을 사용자가 클릭하면 텍스트 확장 또는 축소되어 표시
// --------------------------------------------------------------------------
import { string, number } from 'prop-types';
import { useState } from 'react';
import { render } from 'react-dom';

ExpandableText.propTypes = {
  children: string.isRequired,
  limit: number,
};
function ExpandableText({ children, limit = 255 }) {
  const [isExpand, setIsExpand] = useState(false);
  // 파생된 상태 -> isExpandable
  const isExpandable = children.length > limit;
  let renderText = children;

  if (isExpandable) {
    renderText = children.slice(0, limit) + '...';
  }

  const buttonLabel = isExpand ? '축소' : '확장';

  const handleExpand = (e) => {
    e.preventDefault();
    console.log('렌더링해ㅜ정');
    const nextExpandValue = !isExpand;
    // ? 다시 펼치게 어떻게 하쥐 -> children 이 원본이고 renderText 가 수정된 거니까! 안에 코드에 삼항으로 넣어줌!
    // renderText = +'ee';
    setIsExpand(nextExpandValue);
  };

  // console.log(children, limit);
  return (
    <div className="ExpandableText">
      <p>{isExpand ? children : renderText}</p>
      {isExpandable && (
        <button type="button" onClick={handleExpand}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default ExpandableText;
