// import { useSearchParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function PlayGame() {
  // Fetch the value using query params using URL (Although it is not helpful for our game)
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("text"));

  // Fetch the value using path params using URL (Although it is not helpful for our game)
  // const { text } = useParams();
  // console.log(text);

  // useLocation() state is used for
  const { state } = useLocation();

  return (
    <>
      <h1>Play</h1>
      <Link to="/start" className="text-blue-500">
        Start Game Link
      </Link>
      <p>Output: {state.wordSelected}</p>
    </>
  );
}

export default PlayGame;
