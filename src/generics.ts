/**
 * 泛型是指在定义函数，接口或类的时候，不预先指定具体的类型，
 * 而在使用的时候再制定类型的一种特性
 */

 function createArray<T>(length: number, value: any): Array<T>{
     let result: T[] = [];
     for(let i = 0; i < length; i++) {
        result[i] = value;
     }

     return result;
 }

 createArray<string>(3, 'x');