(() => {
  /**
   * 定义函数或者类时，如果遇到类型不确定的情况，就可以使用泛型
   * 使用泛型就是定义的时候不知道，只有调用执行的时候才知道
   * 
   * 这样就还可以使用类型检查（避免使用 any 从而跳过了 TS 的类型检查）
   */

  function fn<T>(a:T): T{  // 即参数类型和返回值类型是相同的
    return a
  }

  // 可以直接调用具有泛型的函数
  fn(10);  // 不指定泛型，TS 可以自动对类型进行推断
  fn<string>('hello')  // 指定泛型

  // 也可以限制泛型
  interface Inter {
    length: number
  }

  // 泛型继承 Inter，即 T 必须是 Inter 的实现类（子类）
  function fn3<T extends Inter>(a:T): number{
    return a.length
  }

  // 类中也可以使用泛型
  class MyClass<T>{
    name: T;
    constructor(name: T) {
      this.name = name
    }
  }

  const mc = new MyClass<string>('章三')
})()