import { bool, func } from 'prop-types';

InstantSearchSwitch.propTypes = {
  isInstantSearch: bool,
  onToggle: func,
};

function InstantSearchSwitch({ isInstantSearch = false, onToggle }) {
  return (
    <div className="formControl">
      <label htmlFor="">
        <input type="checkbox" checked={isInstantSearch} onChange={onToggle} />
        인스턴스 서치
      </label>
    </div>
  );
}
export default InstantSearchSwitch;
