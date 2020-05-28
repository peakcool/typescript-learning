/**
 * 布尔值
 */

let isDone: boolean = false;

//let isDoneByNewBoolean: boolean = new Boolean(1);

let isDoneByNewBoolean: Boolean = new Boolean();

/**
 * 数值
 */

 let decLiteral: number = 6;
 let hexLiteral: number = 0xf00d;

 let notANumber: number = NaN;
 let infinityNumber: number = Infinity;

 /**
  * 字符串
  */
 let myName: string = 'Tom';
 let myAge: number = 26;

 let tpl:string = `Hello, my name is ${myName}`;

/**
 * 空值 
 */
function alertName(): void {
    console.log('void 表示没有任何返回值的函数')
}

/** 
 * Null 和 Undefined
*/
let u: undefined = undefined;
let n: null = null;