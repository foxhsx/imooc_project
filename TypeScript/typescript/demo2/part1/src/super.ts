(function () {
  class Animal {
    name: string

    constructor(name: string) {
      this.name = name  
    }

    sayHello() {
      console.log(111);
    }
  }

  class Dog extends Animal {
    // 如果在子类中写了构造函数，相当于把父类的构造函数重写了，这里需要
    // 手动的调用下父类的构造函数，并传入父类必须的参数
    age: number;

    constructor(name: string, age: number) {
      super(name)
      this.age = age
    }
    sayHello() {
      // super 就表示当前类的父类
      super.sayHello()
    }
  }

  const dog = new Dog('旺财', 5)
  dog.sayHello()
})()