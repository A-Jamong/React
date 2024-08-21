import { NavLink as Link } from 'react-router-dom';
import { string } from 'prop-types';
import S from '../style.module.css';
NavLink.propTypes = {
  className: string,
};

function NavLink({ className = '', ...restProps }) {
  return (
    <Link
      className={({ isActive }) => {
        const classNames = `${isActive ? S.active : ''} ${className}`.trim();
        return classNames;
      }}
      {...restProps}
    />
  );
}

export default NavLink;
