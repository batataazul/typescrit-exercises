const sum = (a: number) => {
  return (b: number) => {
    return (c: number) => {
      return a + b + c;
    };
  };
};

const subtract = (a: number, b: number) => {
  return a - b;
};

const calculate = (a: number) => {
  return (b: number) => {
    return (fn: (a: number, b: number) => number) => {
      return fn(a, b);
    };
  };
};

const pow = (base: number) => (exp: number) => Math.pow(base, exp);

export const mathFunctions = {
  sum,
  subtract,
  calculate,
  pow,
};

export default mathFunctions;
