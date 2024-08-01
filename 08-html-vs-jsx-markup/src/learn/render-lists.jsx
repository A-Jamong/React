import { array } from '../utils/prop-types';
function RenderLists({ items /* string[], Array<string> */ }) {
  // 함수 내부에 리스트 렌더링 코드를 작성해보세요.
  // react.d.ts
  // { @@typeof: 'Symbol(react.element)', ... }
  // JSDOC

  /**@type{() => React.ReactElement} */
  const renderList = ({ reverse = false } = {}) => {
    // 리스트 렌더링 결과 반환
    // - [ ] Array.prototype.forEach?
    // - [x] Array.prototype.map?

    //todo 리버스 타입이 트루면 -> 매핑을 거꾸로? (역순으로) -> 역순으로 가려면? item에 뭐 나오는지 보고싶은뎅..
    // let listItems = items;
    // if (reverse) {
    //   listItems.toReversed();
    //   console
    // }
    return items.map((listItems) /* string */ => {
      // JSX(React Element) Markup
      return <li key={listItems}>{listItems}</li>;
    });
  };

  const reversedList= renderList().toReversed();

  return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>상태 메시지(status messages) 배열을 리스트 렌더링합니다.</p>
        <ul className="renderList">{renderList()}</ul>
      </dd>
      <dd>
        <p>상태 메시지(status messages) 배열을 역순 정렬하여 렌더링합니다.</p>
        <ul className="renderList">{reversedList}</ul>
      </dd>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
          렌더링합니다.
        </p>
        <dl className="reactLibrary">
          {/* 여기서 설명 목록으로 리스트 렌더링 합니다. */}
        </dl>
      </dd>
    </>
  );
}

export default RenderLists;

RenderLists.propTypes = {
  // items: oneOf(statusMessages)
  items: array, // [권장] arrayOf(string) | arrayOf(number)
};
