import { useState } from 'react';
import ClockOnOff from './components/ClockOnOff';
import PrintMousePosition from './components/PrintMousePosition';
import UselessCheckbox from './components/UselessCheckbox';
import S from './style.module.css';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { Outlet } from 'react-router-dom';
import { string } from 'prop-types';
import NavLink from './components/NavLink';

function EffectSyncAndCleanup() {
  useDocumentTitle('이펙트 동기화 & 정리');
  const [isClockOn, setIsClockOn] = useState(false);

  const outletContextValue = {
    isOn: isClockOn,
    onToggle: setIsClockOn,
  };
  const [navigationList] = useState([
    {
      path: '/effect-sync-and-cleanup',
      text: '마우스 위치 추적',
    },
    {
      path: '/effect-sync-and-cleanup/ClockOnOff',
      text: '시계 ON/OFF',
    },
    {
      path: '/effect-sync-and-cleanup/UselessCheckbox',
      text: '쓸모없는 체크박스',
    },
  ]);
  return (
    <main id="page">
      <h1 className="headline">마우스 위치 (이벤트 연결 &amp; 클린업)</h1>

      <div className="description">
        <p>이펙트(Effects)는 리액트를 벗어난 시스템과 동기화에 사용됩니다.</p>
        <p>
          하지만 리액트 시스템은 리-렌더링이 될 경우 남은 이펙트가 반복될 수
          있습니다.
        </p>
        <p>그러므로 일부 이펙트는 정리(cleanup)가 필요합니다.</p>
      </div>

      <nav className={S.nav}>
        <NavLink to="">마우스 위치 추적</NavLink>
        <NavLink to="ClockOnOff">시계 ON/OFF</NavLink>
        <NavLink to="UselessCheckbox">쓸모없는 체크 박스</NavLink>
      </nav>

      <Outlet context={outletContextValue} />
      {/* {renderSubjectComponent} */}
    </main>
  );
}

export default EffectSyncAndCleanup;
