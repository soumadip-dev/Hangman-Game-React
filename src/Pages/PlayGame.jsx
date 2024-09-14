import { Link } from "react-router-dom";
function PlayGame() {
  return (
    <>
      <h1>Play</h1>
      <Link to="/start" className="text-blue-500">
        Start Game Link
      </Link>
    </>
  );
}
export default PlayGame;
