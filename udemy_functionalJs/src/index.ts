import mathFunctions from './functions/mathFunctions.ts';

const cart = [
  { name: 'pen', num: 10, price: 7.99, fragile: true },
  { name: 'printer', num: 1, price: 649.5, fragile: true },
  { name: 'notebook', num: 4, price: 27.1, fragile: false },
  { name: 'pencil', num: 3, price: 5.82, fragile: false },
  { name: 'scissors', num: 1, price: 19.2, fragile: true },
];

export const main = () => {
  const summ: number = mathFunctions.sum(1)(2)(3);
  const subtraction: number = mathFunctions.calculate(3)(3)(mathFunctions.subtract);
  const power = mathFunctions.pow(2)(10);
  console.log(summ);
  console.log(subtraction);
  console.log(power);
  console.log('---------------------');
  const fragile = cart.filter((product) => product.fragile);
  const totalValue = fragile.map((product) => product.num * product.price);
  const average = totalValue.reduce((acc, value, _index, array) => acc + value / array.length, 0);
  console.log('Values:', totalValue);
  console.log('Average:', average);
};

main();
