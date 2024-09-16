// import { useSearchParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MaskedText from "../Components/MaskedText/MaskedText.jsx";
import { useState } from "react";
import LetterButtons from "../Components/LetterButtons/LetterButtons.jsx";
import HangMan from "../Components/HangMan/HangMan";
import Button from "../Components/Button/Button.jsx";

function PlayGame() {
  // Fetch the value using query params using URL (Although it is not helpful for our game)
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("text"));

  // Fetch the value using path params using URL (Although it is not helpful for our game)
  // const { text } = useParams();
  // console.log(text);

  // useLocation() state is used for accessing the state passed through navigation
  // The state object contains data that was passed to the current route
  const { state } = useLocation();

  // state variable to keep track of guessed letters
  const [guessedLetters, setGuessedLetters] = useState([]);

  // state variable to track the number of incorrect guesses (steps) in the game
  // This is used to update the HangMan component to show the correct number of steps
  const [step, setStep] = useState(0);

  // Function to handle the letter click event
  // It checks if the guessed letter is in the selected word
  // If the letter is correct, it does nothing, otherwise, it increments the step count
  // and updates the list of guessed letters
  function handleLetterClick(letter) {
    if (state.wordSelected.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-200 to-pink-300 min-h-screen flex flex-col items-center justify-center p-[50px]">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 tracking-wide">
        Play Game
      </h1>
      {state?.wordSelected && (
        <div className="bg-gradient-to-r from-teal-100 to-cyan-200 shadow-lg rounded-lg flex w-[90%] h-[80vh] max-w-screen-xl overflow-hidden">
          {/* Left Side: MaskedText and LetterButtons */}
          <div className="w-1/2 p-[4rem] border-r border-gray-300 flex flex-col items-center bg-gradient-to-r from-white to-gray-100">
            {/* MaskedText Section */}
            <div className="w-full mb-14 flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <MaskedText
                text={state.wordSelected}
                guessedLetters={guessedLetters}
              />
            </div>
            {/* LetterButtons Section */}
            <div className="w-full mt-[7rem] flex flex-col items-center mb-8">
              <LetterButtons
                text={state.wordSelected}
                guessedLetters={guessedLetters}
                onLetterClick={handleLetterClick}
              />
            </div>
            <div className="mt-8 flex flex-col items-center">
              <Link to="/">
                <Button
                  text="Home"
                  styleType="success"
                  className="w-3/4 max-w-xs"
                />
              </Link>
            </div>
          </div>
          {/* Right Side: HangMan */}
          <div className="w-1/2 p-6 flex items-center justify-center bg-white">
            <HangMan step={step} />
          </div>
          {/* <Link to="/start" className="text-blue-400">
        Start Game Link
      </Link> */}
        </div>
      )}
    </div>
  );
}

export default PlayGame;
