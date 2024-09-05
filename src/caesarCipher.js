// * A caesarCipher function that takes a string and a shift factor
// * and returns it with each character “shifted”.

export function caesarCipher(string, shift) {
  const [...letters] = string.split("");
  const plaintextAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipherAlphabet = plaintextAlphabet
    .slice(shift)
    .concat(plaintextAlphabet.slice(0, shift));
  const cipheredArray = [];

  letters.forEach((letter) => {
    if (!/^[a-zA-Z]$/.test(letter)) {
      cipheredArray.push(letter);
    } else if (letter == letter.toUpperCase()) {
      let index = plaintextAlphabet.indexOf(letter.toLowerCase());
      cipheredArray.push(cipherAlphabet[index].toUpperCase());
    } else {
      let index = plaintextAlphabet.indexOf(letter);
      cipheredArray.push(cipherAlphabet[index]);
    }
  });
  return cipheredArray.join("");
}
