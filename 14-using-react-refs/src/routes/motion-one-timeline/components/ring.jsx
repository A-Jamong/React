import { string } from 'prop-types';
import { forwardRef } from 'react';
import S from './ring.module.css';

RingIcon.propTypes = {
  color: string,
};

function RingIcon({ color }, ref) {
  return (
    <svg
      className={S.component}
      width={210}
      height={41}
      viewBox="0 0 210 41"
      fill="none"
      ref={ref}
    >
      <circle
        className="firstCircle"
        cx="20.5"
        cy="20.5"
        r="17.5"
        stroke="#4729B4"
        strokeWidth={6}
        // 애니메이션 하려면 아래 세개 필요하다.
        strokeDashoffset={0}
        strokeDasharray={1}
        pathLength={1}
      />
      <circle
        cx="189.5"
        className="secondCircle"
        cy="20.5"
        r="17.5"
        stroke={color}
        strokeWidth={6}
        strokeDashoffset={0}
        pathLength={1}
        strokeDasharray={1}
      />
      <line
        className="line"
        x1={35}
        y1={20}
        x2={173}
        y2={20}
        stroke={color}
        strokeWidth={6}
        strokeDashoffset={0}
        pathLength={1}
        strokeDasharray={1}
      />
    </svg>
  );
}

export default forwardRef(RingIcon);
