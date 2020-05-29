/**
 * 函数声明
 * Function Declaration
 */

 function sum(x: number, y: number): number {
     return x + y;
 }

 /**
  * 函数表达式
  * Function Expression
  * 
  * typescript中的 => 和 ES6中箭头函数是不一样的，
  * ts中表示函数的定义，左边是输入类型，右边是输出类型
  */

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch:SearchFunc = function(source: string, subString: string): boolean {
    return source === subString;
}

/**
 * 可选参数
 * 可选参数后面不允许再出现必需参数
 */

 function buildName(firstName: string, lastName?: string) {
     return lastName ? firstName + ' ' + lastName : firstName;
 }

 console.log(buildName('Tom'));
console.log(buildName('Tom', 'Cat'));

/**
 * 参数默认值
 * ts会将添加了默认值的参数识别为可选参数
 */

 function buildName_2(firstName: string, lastName: string = 'Cat') {
     return firstName + ' ' + lastName;
 }

 console.log(buildName_2('Tom'));
 console.log(buildName_2('Tom', 'Cat_2'));

 /**
  * 剩余参数
  * rest参数
  */

function push(array: any[], ...items: any[]) {
    items.forEach(function(item: any) {
        array.push(item);
    })
}

push([], 1, 2, '3');

/**
 * 重载
 * 重载允许一个函数接受不同数量或类型的参数时，作出不同处理
 */