/**
 * 类型别名是用来给类型取一个新名字
 * 使用type创建
 * 常用于联合类型
 */


 type Name = string;
 type NameResolver = () => string;
 type NameOrResolver = Name | NameResolver;

 function anotherName(n: NameOrResolver): Name {
     if (typeof n === 'string') {
         return n;
     } else {
         return n();
     }
 }


 /**
  * 字符串字面量类型
  * 字符串字面量类型是用来约束取值只能是某几个字符串中的一个
  * 用type定义
  * 
  * 和枚举同理
  */

  type EventNames = 'click' | 'scroll' | 'mousemove';

  function handleEvent(ele: Element, event: EventNames) {

  }

//   handleEvent(document.getElementById('hello'), 'scroll');


/**
 * 枚举类型用于取值被限定在一定范围内的场景
 */

 enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};