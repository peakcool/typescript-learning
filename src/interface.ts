/**
 * Interfaces来定义对象的类型
 * 非常重要！！！！！
 * 比如： 它只用描述 猫的属性有颜色，品种，体型等等，而猫是如何跳跃的，睡觉的是由类去实现
 */

 interface Cat {
     color: string;
     variety: string;
     size: string;     
 }

 let myCat: Cat = {
     color: 'black',
     variety: '黑骑士',
     size: 'small'
 };

//  let partnerCat: Cat = {
//     color: 'black',
//     variety: '黑骑士',
//     size: 'small',
//     sex: 0
// };


/**
 * 可选属性
 */

 interface Dog {
     color: string;
     variety: string;
     size?: string;
 }

 let myDog: Dog = {
     color: 'white',
     variety: '黑骑士',
 };

 let partnerDog: Dog = {
     color: 'white',
     variety: '黑骑士',
     size: 'small'
 }

//  let sisterDog: Dog = {
//      color: 'white',
//      variety: '黑骑士',
//      sex: 1
//  }

/**
 * 任意属性
 */

 interface Pig {
     name: string;
     [propName: string]: any;
 }

 let myPig: Pig = {
     name: '佩奇',
     color: 'pink'
 }

 let partnerPig: Pig = {
     name: '猪猪侠',
     color: 'red',
     size: 'small'
 }

/**
 * 只读属性
 */

 interface Bird {
     name: string;
     readonly color: string;
 }

 let myBird: Bird = {
    name: '布谷',
    color: 'red'
 }

 myBird.name = '喜鹊';
//  myBird.color = 'blue';