// --------------------------------------------------------------------------
// ✅ 노트 앱 (with React)
// --------------------------------------------------------------------------
// - [ ] 노트 앱, 세부 구성 해설
// - [ ] 노트 생성 (Create)
// - [ ] 노트 리스트 또는 아이템 읽기 (Read)
// - [ ] 노트 수정 (Update)
// - [ ] 노트 삭제 (Delete)
// --------------------------------------------------------------------------

import { useState } from 'react';
import { ROUTES } from './constants/routes';
import NoteListPage from './pages/NoteListPage';
import NoteCreatePage from './pages/NoteCreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import NoteEditPage from './pages/NoteEditPage';

function NoteApp() {
  const [routeInfo, setRouteInfo] = useState({
    // [상태 선언]
    // 얘를 바꿔줘야 페이지가 바뀐당.
    route: ROUTES.list,
    noteId: null,
  });

  // [ 상태 업데이트 ]
  const handleChangeRoute = (nextRoute) => {
    // console.log({ nextRoute });
    setRouteInfo({ ...routeInfo, route: nextRoute });
  };

  // [ 파생 상태 ]

  // [ 마크업 ]

  switch (routeInfo.route) {
    default:
    case ROUTES.list:
      return <NoteListPage onChangeRoute={handleChangeRoute} />;
    case ROUTES.create:
      return <NoteCreatePage />;
    case ROUTES.detail:
      return <NoteDetailPage noteId={routeInfo.noteId} />;
    case ROUTES.edit:
      return <NoteEditPage noteId={routeInfo.noteId} />;
  }
}

export default NoteApp;
