// --------------------------------------------------------------------------
// ✅ Figma → SVG 패스 애니메이션
// --------------------------------------------------------------------------
// - [ ] Figma를 사용해 SVG 패스 애니메이션을 적용할 아이콘 또는 다이어그램을 그립니다.
// - [ ] 드로잉 시, 고려할 점
//   - [ ] Stroke 속성으로 그립니다.
// - [ ] 애니메이션을 적용하기 위해 고려할 점
//   - [ ] strokeDasharray
//   - [ ] strokeDashoffset
//   - [ ] pathLength
// --------------------------------------------------------------------------
import S from './PracticeSVGPathAnimation.module.css';
import { string } from 'prop-types';

PracticeSVGPathAnimation.propTypes = {
  color: string,
};

function PracticeSVGPathAnimation({ color = '#4729B4' }) {
  return (
    <div className={S.component}>
      <svg width={210} height={41} viewBox="0 0 210 41" fill="none">
        <circle
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
          cy="20.5"
          r="17.5"
          stroke="#4729B4"
          strokeWidth={6}
          strokeDashoffset={0}
          pathLength={1}
          strokeDasharray={1}
        />
        <line
          x1={35}
          y1={20}
          x2={173}
          y2={20}
          stroke="#4729B4"
          strokeWidth={6}
          strokeDashoffset={0}
          pathLength={1}
          strokeDasharray={1}
        />
      </svg>
    </div>
  );
}

export default PracticeSVGPathAnimation;
