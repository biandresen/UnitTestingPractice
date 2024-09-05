// * A reverseString function that takes a string and returns it reversed.

export function reverseString(string) {
  if (typeof string != "string") return null;
  const [...word] = string.split("");
  const reversedWord = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedWord.push(word[i]);
  }
  return reversedWord.join("");
}
