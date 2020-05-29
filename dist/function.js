"use strict";
/**
 * 函数声明
 * Function Declaration
 */
function sumF(x, y) {
    return x + y;
}
/**
 * 函数表达式
 * Function Expression
 *
 * typescript中的 => 和 ES6中箭头函数是不一样的，
 * ts中表示函数的定义，左边是输入类型，右边是输出类型
 */
var mySum = function (x, y) {
    return x + y;
};
var mySearch = function (source, subString) {
    return source === subString;
};
/**
 * 可选参数
 * 可选参数后面不允许再出现必需参数
 */
function buildName(firstName, lastName) {
    return lastName ? firstName + ' ' + lastName : firstName;
}
console.log(buildName('Tom'));
console.log(buildName('Tom', 'Cat'));
/**
 * 参数默认值
 * ts会将添加了默认值的参数识别为可选参数
 */
function buildName_2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
console.log(buildName_2('Tom'));
console.log(buildName_2('Tom', 'Cat_2'));
/**
 * 剩余参数
 * rest参数
 */
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
push([], 1, 2, '3');
/**
 * 重载
 * 重载允许一个函数接受不同数量或类型的参数时，作出不同处理
 */ 
