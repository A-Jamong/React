import Headline from './Headline';
import JSX_Markup from './html-vs-jsx-markup/jsx-markup';
import EventHandlerProp from './responding-to-events/event-handler-prop';
import EventPropagation from './responding-to-events/event-propagation';
import EventWithSideEffects from './responding-to-events/event-with-side-effects';

// 상위 컴포넌트 (데이터 공급) -> props로 하위 컴포넌트
function RespondingToEvents() {
  let message = '김사부! 집중~';
  const printMessage = () => console.log(message);
  const updateMessage = (addMessage) => {
    message += addMessage;
    console.log(message);
  };
  return (
    <div className="ViewRespondingToEvent">
      <h1>이벤트에 응답</h1>
      <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
      <hr />
      {/* 액션이 따로 없는 상태에서 이렇게 하면 주소창에 ? 붙는다 새로고침됨 */}
      <form
        action="/?submitted"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
        }}
      >
        <input type="text" aria-label="사용자 이름" placeholder="박혁거세" />
        <button type="submit">보내기</button>
      </form>
      <EventHandlerProp onPrintMessage={updateMessage} />
      <hr />
      <EventPropagation />
      <hr />
      <EventWithSideEffects />
    </div>
  );
}

function HTMLvsJSX() {
  return (
    <div className="ViewHTMLvsJSX" hidden>
      <Headline />
      <hr />
      <JSX_Markup />
    </div>
  );
}

// --------------------------------------------------------------------------

function View() {}

View.HTMLvsJSX = HTMLvsJSX;
View.RespondingToEvents = RespondingToEvents;

export default View;
