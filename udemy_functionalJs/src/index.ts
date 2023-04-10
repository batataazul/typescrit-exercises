// import * as fs from 'fs';
import * as path from 'path';

export const main = () => {
  const summ: number = sum(1)(2)(3);
  const subtraction: number = calculate(3)(3)(subtract);
  const power = pow(2)(10);
  console.log(summ);
  console.log(subtraction);
  console.log(power);
  const pth = path.join(__dirname, __filename);
  console.log(pth);
};

export const sum = (a: number) => {
  return (b: number) => {
    return (c: number) => {
      return a + b + c;
    };
  };
};

export const subtract = (a: number, b: number) => {
  return a - b;
};

export const calculate = (a: number) => {
  return (b: number) => {
    return (fn: (a: number, b: number) => number) => {
      return fn(a, b);
    };
  };
};

export const pow = (base: number) => (exp: number) => Math.pow(base, exp);

main();
