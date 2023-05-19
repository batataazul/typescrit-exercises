import { it, describe } from 'testing';
import { expect } from 'chai';
import { MyArray } from '../../src/functions/MyArray.ts';

describe('MyArray', () => {
  describe('MyArray.myMap', () => {
    it('Should return a new array with the values doubled', () => {
    const array = [1, 2, 3];
    const expected = [2, 4, 6];
    const result = MyArray.myMap(array, (value) => value * 2);
    expect(result).to.deep.equal(expected);
  });

    it('Should return a new array with the values doubled', () => {
      const array = [1, 2, 3];
      const expected = [2, 4, 6];
      const result = MyArray.myMap(array, (value, index, array) => value + array[index]);
      expect(result).to.deep.equal(expected);
    });
  });
  
  describe('MyArray.myFilter', () => {
    it('Should return a new array with even values', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const expected = [2, 4, 6];
      const result = MyArray.myFilter(array, (value) => value % 2 === 0);
      expect(result).to.deep.equal(expected);
    });

    it('Should return a new array with all numbers that added to its position are smaller than array size', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const expected = [1, 2, 3];
      const result = MyArray.myFilter(array, (value, index, array) => value + index < array.length);
      expect(result).to.deep.equal(expected);
    });
  });
  
  describe('MyArray.myReduce', () => {
    it('Should return the sum of all values', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const expected = 22;
      const result = MyArray.myReduce(array, (acc, value) => acc + value);
      expect(result).to.deep.equal(expected);

      array.reduce((acc, value) => acc + `${value}`, '');
    });

    it('Should return the sum of all values plus the initial value', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const initialValue = 0;
      const expected = 21;
      const result = MyArray.myReduce(array, (acc, value) => acc + value, initialValue);
      expect(result).to.deep.equal(expected);
    });

    it('Should concatenate each value with itself and then with the acc', () => {
      const array = ['a', 'b', 'c'];
      const initialValue = '';
      const expected = 'aabbcc';
      const result = MyArray.myReduce(array, (acc, value, index, array) => acc + value + array[index], initialValue);
      expect(result).to.deep.equal(expected);
    });

    it('Should concatenate each value with itself and then with the acc without initial value', () => {
      const array = ['a', 'b', 'c'];
      const expected = 'aaabbcc';
      const result = MyArray.myReduce(array, (acc, value, index, array) => acc + value + array[index]);
      expect(result).to.deep.equal(expected);
    });

    it('Should return undefined if array is empty and no initial value is provided', () => {
      const array: number[] = [];
      const expected = undefined;
      const result = MyArray.myReduce(array, (acc, _value) => acc);
      expect(result).to.deep.equal(expected);
    });

    it('Should return the initial value if array is empty and initial value is provided', () => {
      const array: number[] = [];
      const initialValue = 0;
      const expected = 0;
      const result = MyArray.myReduce(array, (acc: number, value) => acc + value, initialValue);
      expect(result).to.deep.equal(expected);
    });
  });
});