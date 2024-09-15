/**
 * @param {The word that is given as word and is expected to guessed } originalWord
 * @param {Letters which are gassed by the user already} guessedLetters
 */
export function getMaskedString(originalWord, guessedLetters) {
  guessedLetters = guessedLetters.map((Letter) => Letter.toUpperCase()); // ['H','m','E']

  // Make a set to search faster
  const guessedLettersSet = new Set(guessedLetters);
  const result = originalWord
    .toUpperCase()
    .split("")
    .map((char) => {
      if (guessedLettersSet.has(char)) {
        return char;
      } else {
        return "_";
      }
    });
  return result;
}
