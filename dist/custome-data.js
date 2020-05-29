"use strict";
/**
 * any类型，允许被赋值为任意类型
 * 声明一个变量为任意值之后对它的任何操作，返回的内容类型都是任意值
 */
var myFavoriteNumber = 'Tom';
myFavoriteNumber = 2020;
console.log('myFavoriteNumber-1: ', myFavoriteNumber);
myFavoriteNumber.setName('Jack');
console.log('myFavoriteNumber-2: ', myFavoriteNumber);
/**
 * 未声明类型的变量,被识别为任意值类型
 */
var something;
something = 'Tom';
something = 2020;
