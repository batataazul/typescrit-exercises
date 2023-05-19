export class MyArray {
  public static myMap<ArrayType, ReturnType>(
    array: ArrayType[],
    fn: (value: ArrayType, index: number, array: ArrayType[]) => ReturnType,
  ): ReturnType[] {
    const newArray: ReturnType[] = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      newArray.push(fn(array[i], i, array));
    }
    return newArray;
  }

  public static myFilter<ArrayType>(
    array: ArrayType[],
    fn: (value: ArrayType, index: number, array: ArrayType[]) => boolean,
  ): ArrayType[] {
    const newArray: ArrayType[] = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i], i, array)) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

  public static myReduce<ArrayType, ReturnType = ArrayType>(
    array: ArrayType[],
    fn: (
      acc: typeof initialValue,
      value: ArrayType,
      index: number,
      array: ArrayType[],
    ) => typeof acc,
    initialValue: ArrayType | ReturnType = array[0],
  ): typeof initialValue {
    let result = initialValue;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      result = fn(result, array[i], i, array);
    }
    console.log('Cheguei');
    return result;
  }
}
