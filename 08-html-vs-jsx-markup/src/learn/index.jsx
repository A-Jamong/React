import JSX_Markup from './jsx-markup';
import ScrollUpAndDown from './scroll-up-and-down';

function Learn() {
  return (
    <div className="Learn">
      <Headline />
      <hr />
      <JSX_Markup />
      <ScrollUpAndDown />
    </div>
  );
}

export default Learn;

// eslint-disable-next-line react/prop-types
function Headline({ hasChildren = false }) {
  const abbrs = {
    html: 'Hyper Text Markup Language',
    // jsx: 'JavaScript eXtension for ECMAScript',
    jsx: {
      abbr: 'JavaScript eXtension for ECMAScript',
      text: '제에엑',
    },
  };

  // hasChildren 값이 false면
  if (!hasChildren) {
    return '~~';
  }

  return (
    <h1>
      <abbr title={abbrs.html}>HTML</abbr> vs.{' '}
      <abbr title={abbrs.jsx}>{abbrs.jsx.text}</abbr> 마크업
    </h1>
  );
}
