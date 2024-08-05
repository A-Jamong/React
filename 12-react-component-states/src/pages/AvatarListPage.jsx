import Avatar from '@/components/Avatar';
import { avatarData } from '@/data/data';
// import { STATUS } from '@/constants/STATUS';
import { useState } from 'react';

// 1. 데이터 분리
// 2. 컴포넌트 상태로 정의(선언)
// 3. 이벤트 핸들러 작성(기능 구현)
// 4. 사용자 상호작용에 따라 화면 업데이트 (확인)
// 5. 컴포넌트 테스트 (스킵!)

function AvatarListPage() {
  const [list, setList] = useState(avatarData);

  const handleDeleteItem = (deleteId) => () => {
    console.log('delete');

    const nextList = list.filter((item) => item.id !== deleteId);
    setList(nextList);
  };
  if (list.length === 0) {
    return <p style={{ fontSize: 24 }}> 화면에 표시할 아바타가 없습니당. </p>;
  }

  return (
    <ul className="AvatarList">
      {list.map((item) => (
        <li key={item.id}>
          <Avatar name={item.name} photo={item.photo} status={item.status} />
          <button type="button" onClick={handleDeleteItem(item.id)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;
