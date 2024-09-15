import { Link } from "react-router-dom";
import TextInputFormContainer from "../Components/TextInputForm/TextInputFormContainer.jsx";

function StartGame() {
  // <> is called a React Fragment. It allows us to group multiple elements under a single parent without adding extra nodes to the DOM.
  return (
    <>
      <h1>Start</h1>
      <TextInputFormContainer />
      <Link to="/play" className="text-blue-500">
        Play Game Link
      </Link>
    </>
  );
}

export default StartGame;
