(function () {
  /**
   * 以 abstract 开头的类是抽象类，抽象类不能用来创建对象，
   * 专门用来被继承
   */
  abstract class Animal {
    name: string

    constructor(name: string) {
      this.name = name  
    }

    // 定义一个抽象方法，没有方法体，只能定义在抽象类中
    // 且子类必须对抽象方法进行重写
    abstract sayHello(): void;
  }
})()