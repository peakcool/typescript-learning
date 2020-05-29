/**
 * 数组的类型
 */

 /**
  * 类型+方括号
  */
 
  let fibonacci: number[] = [1,2,3];

  fibonacci.push(4);

//   fibonacci.push('5');

/**
 * 数组范型
 */

 let fibonacci_2: Array<number> = [1,2,3];

 /**
  * 类数组 Array-like Object
  */

  function sum() {
      let args: {
          [index: number]: number;
          length: number;
          callee: Function;
      } = arguments;

      //等同
    //   let args: IArguments = arguments;
  }

  /**
   * 数组内任意类型值
   */

   let somethingArray: any[] = ['1', 2, false];