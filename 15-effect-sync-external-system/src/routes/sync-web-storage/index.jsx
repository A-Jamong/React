// --------------------------------------------------------------------------
// ✅ 웹 스토리지 동기화
// --------------------------------------------------------------------------
// - [ ] 스위치가 ON일 경우, 다크 모드로 전환되도록 설정합니다.
// - [ ] 웹 페이지를 새로고침 하더라도 상태가 유지되도록 설정합니다.
// --------------------------------------------------------------------------

import { getStorageData, setStroageData } from '../utils/web-storage';
import Switcher from './components/Switcher';
const DARK_MODE_KEY = '@theme/dark';
function SyncWebStorage() {
  // 화살표 함수를 통해서 처음 컴포넌트가 구성될 때 1회 실행되게 하는 게 좋은 것.
  const [isDarkjMode, setIsDarkMode] = useState(() =>
    getStorageData(DARK_MODE_KEY, false)
  );

  useEffect(() => {
    setStroageData(DARK_MODE_KEY, isDarkjMode);
  }, [isDarkjMode]);

  const handleSaveDarkMode = () => {
    setStroageData(DARK_MODE_KEY, isDarkjMode);
  };

  const handleToggleDarkMode = (nextIsDarkMode) => {
    setIsDarkMode(nextIsDarkMode);
  };
  return (
    <main id="page">
      <h1 className="headline">웹 스토리지 동기화</h1>

      <div className="description">
        <p>이팩트를 사용해 브라우저 스토리지(Storage)와 동기화합니다.</p>
        <p>
          스토리지 데이터를 읽기/쓰기하는 것은 리액트의 렌더링 프로세스와
          관련없습니다.
        </p>
        <p>이펙트를 사용해 스토리지 데이터를 리액트 앱과 동기화 해봅니다.</p>
      </div>

      <Switcher />
    </main>
  );
}

export default SyncWebStorage;
