// * A calculator object that contains functions for the basic operations:
// * add, subtract, divide, and multiply. Each of these functions
// * should take two numbers and return the correct calculation.

export const calculator = {
  inputIsInvalid(n1, n2) {
    if (typeof n1 != "number" || typeof n2 != "number") return true;
  },
  add(n1, n2) {
    if (this.inputIsInvalid(n1, n2)) return null;
    else return n1 + n2;
  },
  subtract(n1, n2) {
    if (this.inputIsInvalid(n1, n2)) return null;
    else return n1 - n2;
  },
  divide(n1, n2) {
    if (this.inputIsInvalid(n1, n2)) return null;
    else return n1 / n2;
  },
  multiply(n1, n2) {
    if (this.inputIsInvalid(n1, n2)) return null;
    else return n1 * n2;
  },
};
