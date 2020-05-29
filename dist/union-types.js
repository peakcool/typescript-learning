"use strict";
/**
 * 联合类型表示取值可以为多种类型中的一种
 */
var unionValue;
unionValue = 'Hello World';
unionValue = 2020;
//unionValue = false;
/**
 * 访问联合属性的属性、方法
 * 只能访问此联合类型所有类型的共有属性和方法
 */
function getLength(something) {
    return something.toString;
    //return something.length;
}
