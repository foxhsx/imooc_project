class Dog {
  // 定义属性
  name: string;
  age: number;
  /**
   * constructor 被称为构造函数
   * 构造函数会在对象创建时调用
   * 在实例方法中，this 就表示当前的实例
   * 在构造函数中当前对象就是当前新建的那个对象
   * 可以通过 this 向新建的对象中添加属性
   */
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  bark() {
    // 在方法中可以通过 this 来表示当前调用方法的对象
    console.log(this);
  }
}

const dog = new Dog('二哈', 5)

console.log(dog);
