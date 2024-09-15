import "./LetterButtons.css";

const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButtons({ text, guessedLetters, onLetterClick }) {
  const originalLetters = new Set(text.toUpperCase().split(""));
  const guessedLettersSet = new Set(guessedLetters);

  const buttonStyle = function (letter) {
    if (guessedLettersSet.has(letter)) {
      return `${originalLetters.has(letter) ? "correct-guess" : "wrong-guess"}`;
    } else {
      return "unselected";
    }
  };

  function handleLetterClick(event) {
    const characterOfLetter = event.target.value;
    onLetterClick?.(characterOfLetter);
  }

  const firstRow = ALPHABETS.slice(0, 10).map((letter) => (
    <button
      key={`button-${letter}`}
      value={letter}
      onClick={handleLetterClick}
      disabled={guessedLettersSet.has(letter)}
      className={`letter-button ${buttonStyle(letter)}`}
    >
      {letter}
    </button>
  ));

  const secondRow = ALPHABETS.slice(10, 19).map((letter) => (
    <button
      key={`button-${letter}`}
      value={letter}
      onClick={handleLetterClick}
      disabled={guessedLettersSet.has(letter)}
      className={`letter-button ${buttonStyle(letter)}`}
    >
      {letter}
    </button>
  ));

  const thirdRow = ALPHABETS.slice(19, 26).map((letter) => (
    <button
      key={`button-${letter}`}
      value={letter}
      onClick={handleLetterClick}
      disabled={guessedLettersSet.has(letter)}
      className={`letter-button ${buttonStyle(letter)}`}
    >
      {letter}
    </button>
  ));

  return (
    <>
      <div className="letter-buttons-container">{firstRow}</div>
      <div className="letter-buttons-container second-row">{secondRow}</div>
      <div className="letter-buttons-container third-row">{thirdRow}</div>
    </>
  );
}

export default LetterButtons;
