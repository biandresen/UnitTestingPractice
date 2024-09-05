// * A capitalize function that takes a string and
// * returns it with the first character capitalized.

export function capitalize(string) {
  const [firstLetter, ...rest] = string.split("");
  return firstLetter.toUpperCase() + rest.join("");
}
