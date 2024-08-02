import { node } from 'prop-types';

LayoutBox.propTypes = {
  // PropTypes.node : 리액트 컴포넌트가 반환할 수 있는 모든 타입! (element, string, number, null, undefeind)
  children: node,
};

function LayoutBox({ children, style, onClick }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick(e);
  };

  // return <div className="box">{children}</div>;
  return (
    <div className="box" style={style} onClick={handleClick}>
      {children}
    </div>
  );
}
export default LayoutBox;
