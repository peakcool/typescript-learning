/**
 * 类型断言是用来手动指定一个值的类型
 * 
 * 值 as 类型
 * 或
 * <类型>值
 * 
 * 建议统一使用 第一种
 */


interface asA {
    type: string;
}

interface asB {
    type: number
}

function getALength(value: string | number): number {
    return (value as string).length;
}

/**
 * 将一个父类断言为更加具体的子类
 */
class ApiError extends Error {
    code: number = 0;
}

class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === "number") {
        return true;
    }
    return false;
}

/**
 * as any
 * 它有很大的概率掩盖真正的错误，如果不是非常确定值，就不要使用它
 * 一方面不能滥用，另一方面也不能完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡
 */

 /**
  * any 可以被断言为任何类型
  */

  /**
   * 断言的限制
   * A兼容B, 那么A能够被断言为B， B也能够被断言为A
   * 
   * Animal 兼容 Lion
   */

   interface Animal {
       name: string;
   }

   interface Lion {
       name: string;
       run(): void;
   }

   let myLion: Lion = {
       name: 'Jack',
       run: () => {console.log('run')}
   }

   let animal: Animal = myLion;

   /**
    * 不到万不得已，千万别用双重断言
    */


    /**
     * 类型断言 vs 类型转换
     * 
     * 类型断言只会影响ts编译时的类型，断言语句会在编译结果中删除，它不会真正影响变量的类型
     */


     /**
      * 类型断言 vs 类型声明
      * 
      * animal 断言为 Lion, 只需要满足 Animal 兼容 Lion 或 Lion 兼容 Animal就可以
      * 而
      * 类型声明，animal 赋值给myLion，需要满足 Lion 兼容 Animal才行
      */

      /**
       * 类型断言 vs 范型
       */