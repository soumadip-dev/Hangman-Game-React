import { getMaskedString } from "./MaskingUtility.jsx";
function MaskedText({ text, guessedLetters }) {
  const maskedString = getMaskedString(text, guessedLetters);
  return (
    <>
      {maskedString.map((letter, index) => {
        return (
          <span key={index} className="mx-1">
            {letter}
          </span>
        );
      })}
    </>
  );
}
export default MaskedText;
