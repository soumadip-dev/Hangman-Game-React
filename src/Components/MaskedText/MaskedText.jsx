import { getMaskedString } from "./MaskingUtility.js";
import "./MaskedText.css";

function MaskedText({ text, guessedLetters }) {
  const maskedString = getMaskedString(text, guessedLetters);
  return (
    <>
      {maskedString.map((letter, index) => {
        return (
          <span key={index} className="masked-letter mx-1">
            {letter}
          </span>
        );
      })}
    </>
  );
}

export default MaskedText;
