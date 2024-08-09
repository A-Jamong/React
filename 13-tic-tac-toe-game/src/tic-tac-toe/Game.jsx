import { PLAYER } from './components/player';
import Board from './components/Board/Borad';
import History from './components/History/History';
console.log(PLAYER);
function Game() {
  const a = () => {
    console.log(document.querySelector('Status'));
  };
  a();
  return (
    <div className="Game">
      <Board />
      <History />
    </div>
  );
}

export default Game;
