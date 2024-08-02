// --------------------------------------------------------------------------
// ✅ 이벤트 전파
// --------------------------------------------------------------------------
// - [ ] 전파 중지
// - [ ] 전파 대안으로 핸들러 전달
// - [ ] 기본 작동 방지
// --------------------------------------------------------------------------

import LayoutBox from './Layoutbox';

// e.preventDefault(); // 이벤트 기본 작동을 차단
// Event Delegation (위임)
// Event Propagation (전파)
// event.stopPropagation(); // 이벤트 전파 중지

function EventPropagation() {
  const handleLayoutBox = (color, e) => {
    console.log(color, e.target);
  };
  return (
    <details>
      <summary>
        <b>이벤트 전파 &amp; 기본 작동 방지</b>
      </summary>
      <LayoutBox
        style={styles.cyan}
        onClick={(e) => {
          console.log('cyan', e.target);
        }}
      >
        <LayoutBox
          style={styles.magenta}
          onClick={(e) => {
            console.log('magenta', e.target);
          }}
        >
          <LayoutBox
            style={styles.yellow}
            onClick={(e) => {
              console.log('yellow', e.target);
            }}
          ></LayoutBox>
        </LayoutBox>
      </LayoutBox>
    </details>
  );
}

const styles = {
  cyan: {
    '--color': 'var(--cyan)',
  },
  magenta: {
    '--color': 'var(--magenta)',
  },
  yellow: {
    '--color': 'var(--yellow)',
  },
};

export default EventPropagation;
