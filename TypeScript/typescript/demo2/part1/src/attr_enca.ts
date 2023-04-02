(() => {
  // 定义一个表示人的类
  class Person {
    name: string;
    age: number;

    // TS 可以在属性前添加属性的修饰符
    /**
     * public 修饰的属性可以在任意位置访问和修改--默认
     * private 私有属性，只能在类的内部进行访问和修改
     *      通过在类中添加方法使得私有属性可以被外部访问
     * protected 受保护的属性，只能在当前类和子类中使用，不能
     * 在实例中进行访问
     */

    private sex: string

    constructor(name: string, age: number, sex: string) {
      this.name = name
      this.age = age
      this.sex = sex
    }

    /**
     * getter 用来读取属性
     * setter 用来设置属性
     * 它们被称为属性的读取器
     */
    getSex() {
      return this.sex
    }

    setSex(value: string) {
      this.sex = value
    }

    // 在 TS 中提供了设置 getter 和 setter 的更简便方法
    get _name() { // 这里的方法名其实就是一个属性名
      return this.name
    }

    set _name(value: string) {
      this.name = value
    }
  }

  const per = new Person('章三', 18, '男')
  console.log(per._name);  // 章三
  per._name = '里斯'

  /**
   * 现在属性是在对象中设置的，属性可以任意被修改
   * 而这会导致对象中的数据变得非常不安全，比如年龄不能为负数
   */
  
  /**
   * 特殊语法
   * 下面语法是可以直接将属性定义在构造函数中，它等价于将属性定义在
   * 构造函数外部，然后在构造函数中去进行赋值
   * 是一个语法糖
   */

  class C {
    constructor(public name: string, public age: number) {
      
    }
  }
})()