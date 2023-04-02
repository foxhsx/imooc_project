(() => {
  // 描述一个对象的类型
  type myType = {
    name: string,
    age: number
  }

  /**
   * 接口用来定义一个类的结构
   * 即一个类中应该包含哪些属性和方法
   * 同时接口也可以当成类型声明去使用
   * 
   * 接口可以重复声明，多个相同的声明会被合并到一起
   * 
   * 可以限制类的结构，且接口中的所有属性都不能有实际值的，
   * 接口只定义对象的结构，不考虑实际值，在接口中的所有方法都是
   * 抽象方法
   */

  interface myInterface {
    name: string,
    age: number
  }

  /**
   * 定义类时，可以使类去实现一个接口
   * 实现接口就是使类满足接口的要求
   * 
   * 接口就是定义了一个规范
   */

  class MyClass implements myInterface {
    name: string
    age: number

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }
})()