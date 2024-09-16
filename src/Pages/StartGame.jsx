import { Link } from "react-router-dom";
import TextInputFormContainer from "../Components/TextInputForm/TextInputFormContainer.jsx";

function StartGame() {
  // <> is called a React Fragment. It allows us to group multiple elements under a single parent without adding extra nodes to the DOM.
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-200 to-pink-300 min-h-screen flex items-center justify-center p-[90px]">
      <div className="bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg flex flex-col items-center justify-center w-[80%] h-[60vh] max-w-screen-lg overflow-hidden p-6">
        <h1 className="text-4xl font-extrabold mb-8  drop-shadow-lg text-center text-purple-600 tracking-wide">
          Start Game
        </h1>
        <div className="w-full flex items-center justify-center mb-8">
          <TextInputFormContainer />
        </div>
      </div>
    </div>
  );
}

export default StartGame;
