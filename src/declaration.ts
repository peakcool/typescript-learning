/**
 * 声明类型
 * 当使用第三方库时，需要引用它的声明文件，才能获得对应的diamante补全、接口提示等功能
 * 
 * declare var 声明全局变量
 * declare function 声明全局方法
 * declare class 声明全局类
 * declare enum 声明全局枚举类型
 * declare namespace 声明（含有子属性的）全局对象
 * interface 和 type 声明全局类型
 * export 导出变量
 * export namespace 导出（含有子属性的）对象
 * export default ES6默认导出
 * export = commonjs导出模块
 * export as namespace UMD库声明全局变量
 * export global 扩展全局变量
 * declare module 扩展模块
 * /// <reference/> 三斜线指令
 * 
 * 
 * 
 * 什么是声明文件？
 * 通常把声明语句放在单独的文件*.d.ts
 * 
 * /path/to/project
 * |--src
 *   |-- index.ts
 *   |-- jquery.d.ts
 * |--tsconfig.json
 *  
 */

