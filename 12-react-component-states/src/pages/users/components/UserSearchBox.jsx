import { useId } from 'react';
import { string, func, bool } from 'prop-types';
import './UserSearchBox.css';

UserSearchBox.propTypes = {
  searchTerm: string.isRequired,
  onSearch: func, // optional
  onReset: func,
  isInstantSearch: bool,
};

function UserSearchBox({
  searchTerm,
  onSearch,
  onReset,
  isInstantSearch = false,
}) {
  const id = useId();

  const handleSearch = (e) => {
    e.preventDefault();
    // Side Effects
    // DOM 접근, 속성 값 읽기
    const input = document.getElementById(id);
    const button = input.closest('form').querySelector('[type="submit"]');
    const value = input.value.trim();

    onSearch?.(value);
    if (value.length > 0) {
      onSearch?.(value);
      input.value = '';
      button.focus();
    } else {
      alert('검색어를 입력해주세요.');
    }
  };

  const handleResetUsersList = (e) => {
    e.preventDefault();
    onReset?.();
    // onSearch('');
  };

  const handleLive = () => {
    const input = document.getElementById(id);
    const value = input.value.trim();
    onSearch(value);

    // onSearch?.(e.target.value)
  };

  return (
    <form className="UserSearchBox">
      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        <input
          id={id}
          type="search"
          placeholder="사용자 정보 입력"
          defaultValue={searchTerm}
          onChange={handleLive}
          // value={searchTerm}
          // onChange={handleChange}
          // readOnly
        />
      </div>
      {isInstantSearch ? null : (
        <>
          <button type="submit" onClick={handleSearch}>
            찾기
          </button>
          <button type="submit" onClick={handleResetUsersList}>
            목록 초기화
          </button>
        </>
      )}
    </form>
  );
}

export default UserSearchBox;
