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
import { useRef } from 'react';
import RingIcon from './ring';
import { timeline } from 'motion';

PracticeSVGPathAnimation.propTypes = {
  color: string,
};

function PracticeSVGPathAnimation({ color = '#4729B4' }) {
  const ringRef = useRef(null);

  const handleSvg = async () => {
    const svgElement = ringRef.current;
    // const firstCircle = svgElement.querySelector('.firstCircle');
    // const secondCircle = svgElement.querySelector('.secondCircle');
    // const line = svgElement.querySelector('.line');
    // animate(firstCircle, { x: [0, 400, 0], rotate: [0, 360, -360] });
    // console.log(element.querySelectorAll('ringIcon'));

    const [circle1, circle2] = Array.from(
      svgElement.querySelectorAll('circle')
    );
    const line = svgElement.querySelector('line');

    const animationControls = timeline(
      [
        [circle1, { strokeDashoffset: [1, 0], visibility: 'visible' }],
        [line, { strokeDashoffset: [1, 0], visibility: 'visible' }],
        [circle2, { strokeDashoffset: [1, 0], visibility: 'visible' }],
      ],
      {
        duration: 1,
        easing: 'cubic-bezier(0.79, 0.14, 0.15, 0.86)',
      }
    );
    await animationControls.finished;

    Array.from(svgElement.children).forEach((child) => {
      child.style.visibility = 'hidden';
    });
  };

  return (
    <>
      <button onClick={handleSvg}>hello</button>
      <div className={S.component}>
        {/* <ringIcon ref={ringRef} color={color} /> */}
        <RingIcon color={color} ref={ringRef} />
      </div>
    </>
  );
}

export default PracticeSVGPathAnimation;
