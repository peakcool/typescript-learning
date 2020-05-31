class Student {
    fullName: string;
    constructor(public firstName:string, public middleInitial:string, public lastName:string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' +lastName;
    }
}

interface Person_2 {
    firstName: string;
    lastName: string;
}

function welcome_2(person: Person_2) {
    return 'Hello, ' + person.firstName + " " + person.lastName; 
}

let user_2 = new Student("Jane", "M", 'User');
console.log(welcome_2(user_2));


/**
 * -类（Class）: 定义了一件事物的抽象特点，包含它的属性和方法
 * -对象（Object）：类的实例，通过new生成
 * -面对对象（OOP）的三大特性：封装、继承、多态
 * -封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（不可能）知道细节，
 * 就能通过对外提供的接口来访问对象，同时也保证了外界无法任意更改对象内部的数据
 * -继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，外有一些更具体的特性
 * -多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如Cat和Dog都继承自Animal
 * 但是分别实现了自己的eat方法，此时针对某一个实例，我们无需了解他是Cat还是Dog， 就可以直接调用eat方法，程序会自动
 * 判断出来应该如何执行eat
 * -存取器（getter & setter）：用以改变属性的读取和赋值行为
 * -修饰符（Modifiers）： 修饰符是一些关键字，用于限定成员或类型的性质。比如plulic表示公有属性或方法。
 * -抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须
 * 在子类中被实现
 * -接口（Interfaces）: 不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。
 * 一个类只能继承自另一个类，但是可以实现多个接口
 *
 */


/**
 * TypeScript 中类的用法
 * 
 * public private和 protected
 * 
 * -public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public的
 * -private修饰的属性或方法是私有的，不能再声明他的类的外部访问
 * -protected修饰的属性或方法是受保护的，他和private类似，区别在于他在子类中也是允许被访问的
 *
 * 
 * readonly： 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中
 */


 /**
  * 类与接口
  * 接口（Interfaces）可以用于对【对象的形状】进行描述
  * 
  * 实现（implements）可以提高面向对象的灵活性
  * 
  * for example：
  * 
  * 门是一个类，防盗门是门的子类。如果防盗门有一个报警器功能，我们可以简单的给防盗门添加一个报警方法
  * 这时候如果有另一个类，车，也有报警器功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车
  * 都去实现它
  */

  interface Alarm {
      alert(): void;
  }

  interface Light {
      lightOn(): void;
      lightOff(): void;
  }

  class Door {

  }

  class SecurityDoor extends Door implements Alarm {
      alert() {
          console.log('防盗门报警')
      }
  }

  class Car implements Alarm, Light {
      alert() {
          console.log('车报警');
      }
      lightOn() {
          console.log('car lightOn');
      }
      lightOff() {
          console.log('car lightOff');
      }
  }

  /**
   * 接口继承接口
   */
  interface LighttableAlarm extends Alarm {
      lightOn(): void;
      lightOff(): void;
  }

