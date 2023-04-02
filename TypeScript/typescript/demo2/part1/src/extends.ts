(function () {
  // 定义抽象类
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHello() {
      console.log('JJJ');
    }
  }

  /**
   * 使用继承后，子类将会拥有父类所有的方法和属性
   * 通过继承可以将多个类中共有的代码写在一个父类中，这样只需要写一次即可让所有的子类
   * 都同时拥有父类中的属性和方法
   * 
   * 如果希望在子类中添加一些父类中没有的属性或者方法，可以直接在子类中进行添加
   * 也可以在子类中覆盖父类的方法——即方法重写
   */

  class Dog extends Animal {
    run() {
      console.log(`${this.name}再跑～～`);
    }
    sayHello() {
      console.log('WWW');
    }
  }

  const dog = new Dog('旺财', 5)
  console.log(dog);
  dog.sayHello()

  class Cat extends Animal {
    
  }

  const cat = new Cat('旺财', 5)
  console.log(cat);
  cat.sayHello()
})()