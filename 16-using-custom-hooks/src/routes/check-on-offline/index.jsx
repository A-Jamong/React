import useOnline from '@/hooks/useOnline';
import Switcher from '../sync-web-storage/components/Switcher';
import { useEffect, useRef, useState } from 'react';

function CheckOnOffline() {
  const isOnline = useOnline();

  return (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 20 }}>
      <h1>Check On/Offline</h1>
      <Switcher value={isOnline} />

      <ChangeStateAndCallback />
    </div>
  );
}

export default CheckOnOffline;

/* -------------------------------------------------------------------------- */

function useStateWithCallback(initailState, func) {
  const [state, setState] = useState(initailState);
  useEffect(() => {
    // const nextState = state;
    func?.(state);
    // 콜백함수가 반응성 상태가 아니라는 걸 알고있다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [];
}

function ChangeStateAndCallback() {
  const [message, setMessage] = useStateWithCallback('hello', (nextMessage) => {
    pRef.current.textContent = nextMessage.toUpperCase();
  });

  // const [message, setMessage] = useState('hello');

  const handleChangeMessage = () => {
    setMessage((m) => `${m} ❤️`);
  };

  // 상태가 변경될 때마다 무언가 수행하고 싶다.
  // useStateWithCallback(value, callback?)
  //
  // message 상태가 업데이트 될 때(리-렌더링) 마다 무언가 수행하려면?
  // 예) 콘솔에 기록, 또는 명령형 프로그래밍을 수행
  useEffect(() => {
    pRef.current.textContent = message.toUpperCase();
  }, [message]);

  const pRef = useRef(null);

  return (
    <>
      <button type="button" style={buttonStyles} onClick={handleChangeMessage}>
        메시지 변경
      </button>

      <output style={outputStyles}>{message.toUpperCase()}</output>
      <p ref={pRef} style={pStyles} />
    </>
  );
}

const buttonStyles = { alignSelf: 'start' };
const outputStyles = { fontWeight: 800 };
const pStyles = {
  border: '3px solid #d9dedf',
  borderRadius: 4,
  margin: 0,
  padding: 6,
};
