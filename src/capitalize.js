// * A capitalize function that takes a string and
// * returns it with the first character capitalized.

export function capitalize(string) {
  if (typeof string != "string") return "invalid input";
  const [firstLetter, ...rest] = string.split("");
  return firstLetter.toUpperCase() + rest.join("");
}
