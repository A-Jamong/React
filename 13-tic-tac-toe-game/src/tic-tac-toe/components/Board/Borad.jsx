import Status from '../Status/Status';
import Squares from '../Square/Squares';
export default function Board() {
  return (
    <div className="Board">
      <Status />
      <Squares />
    </div>
  );
}
