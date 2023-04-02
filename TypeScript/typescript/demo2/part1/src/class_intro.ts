// 使用 class 关键字来定义一个类
/**
 * 对象中主要包含了两个部分：
 *   属性
 *   方法
 */
class Person {
  constructor() {
    
  }
  /**
   * 实例属性
   * 直接定义的属性是实例属性，需要通过对象的实例去访问
   * readonly 表示只读的属性，不可更改
   */
  name: string = '悟空'
  age: number = 18
  readonly sex: string = '男'

  /**
   * 类属性，静态属性
   * 使用 static 开头的属性是静态属性（类属性），直接通过类进行访问
   */
  static like: string = '打架'

  /**
   * 定义方法
   */
  sayHello() {
    console.log('Hello 大家好');
  }
}

const person = new Person()

// 打印实例属性
console.log(person);
console.log(person.name, person.age);

// 打印类属性
console.log(Person.like);

