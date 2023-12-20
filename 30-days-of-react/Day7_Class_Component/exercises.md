- 如何编写纯 JavaScript 函数
  
  首先，我们要理清楚是纯 JavaScript 函数，它是指只使用 JavaScript 语言本身提供的特性和 API，不依赖于任何第三方库或者框架的函数。以下是编写纯 JavaScript 函数的一些常见方法：
  
  - 使用原生 JS 方法实现功能，例如使用 `Array.prototype.map` 实现一个数组映射函数
  
  ```js
  function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i, arr));
    }
    return result;
  }
  ```
  
  - 使用 ECMAScript 新特性来简化代码，例如使用箭头函数和展开运算符实现一个合并对象的函数
  
  ```js
  const merge = (obj1, obj2) => ({ ...obj1, ...obj2 });
  ```
  
  - 使用 JS 标准库提供的 API，例如使用 `Math.random()` 和 `Math.floor()` 来实现一个生成随机数的函数。
  
  ```js
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  ```
  
  需要注意的是，纯 JS 函数通常会比依赖第三方库的函数更加轻量和高效，但也可能需要更多的代码来实现相同的功能。因此，在编写纯 JS 函数时，需要充分了解 JS 语言本身提供的特性和 API，以及其优缺点和使用场景。

- 什么是继承以及如何从父类创建子类？
  
  继承是面向对象编程中的一个概念，它允许一个类（称为子类或者派生类）继承另一个类（父类或者基类）的属性和方法。通过继承，子类可以重用父类的代码，并且可以添加新的属性和方法，或者覆盖父类的方法。
  
  在 JS 中，可以从父类创建子类的方式有：
  
  - 使用 JS 中的原型链，具体步骤如下：
    
    - 创建一个父类，定义其属性和方法
    
    - 创建一个子类，将其原型设置为父类的实例
    
    - 在子类中添加额外的属性和方法，或者覆盖父类的方法
    
    ```js
    // 父类
    function Animal(name) {
      this.name = name;
    }
    
    Animal.prototype.sayName = function() {
      console.log("My name is" + this.name)
    }
    
    // 子类
    function Dog(name, breed) {
      Animal.call(this, name); // 调用父类的构造函数
      this.breed = breed;
    }
    
    Dog.prototype = Object.create(Animal.prototype) // 将子类的原型设置为父类的实例
    Dog.prototype.constructor = Dog; // 设置子类的构造函数
    
    Dog.prototype.bark = function() {
     console.log("Woof!");
    };
    
    // 创建子类实例
    var myDog = new Dog("Max", "Labrador");
    myDog.sayName(); // 输出: My name is Max
    myDog.bark(); // 输出: Woof!
    ```

- 使用 `class` 和 `extends`
  
  ```js
  class Animal {
    constructor(name) {
      this.name = name;
    }
    sayName() {
      console.log("My name is " + this.name);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    bark() {
      console.log("Woof!");
    }
  }
  
  const myDog = new Dog("Max", "Labrador");
  myDog.sayName(); // My name is Max
  myDog.bark(); // Woof!
  ```

- 什么是基于类的 React 组件？
  
  基于类的 React 组件是指使用 ES6 中的 class 关键字来定义 React 组件的一种方式。这种方式使用 class 关键字来创建组件，并继承自 React.Component，并且可以包含状态 state 和生命周期方法（lifecycle methods）。这在 React Hooks 出来之前是主要的组件定义方式。

- 函数式 React 组件和基于类的 React 组件有什么区别？
  
  - 函数式组件是使用函数来定义的 React 组件，而基于类的组件是使用 class 类来定义的
  
  - 函数式组件使用 Hooks 来定义状态和其他的 React 特性，而类组件则是使用生命周期来处理状态和副作用
  
  - 在函数式组件中，我们可以直接使用 JS 函数的特性，如闭包和函数参数等；而在类组件中，我们需要使用 this 关键字来访问组件实例的属性和方法
  
  - 函数式组件通常比类组件更轻量，而 Hooks 的出现使得函数式组件在某些情况下编写起来更简洁、更易于理解

- 我们什么时候需要使用基于类的组件而不是函数式组件
  
  - 需要使用生命周期方法来处理组件的挂载、更新和卸载过程
  
  - 需要使用实例方法来处理组件的逻辑，比如在事件处理程序中使用 this 来访问组件实例
  
  - 需要使用特定于类组件的功能，如错误边界等。

- 基于类的组件的用例是什么？
  
  - 参见上一题

- 最常使用哪种类型的组件？函数组件还是类组件
  
  在 16.8.0 版本出来之前，最常用的还是类组件，而在 16.8.0 出来之后，最常用的就是 函数式组件了。这是因为函数式组件提供了更简洁、可服用和易于测试的代码。
  
  但是在一些特定的场景下，如需要使用生命周期方法、内部状态或者特定于类组件的功能时，仍然会使用基于类的组件。

- 什么是 React 生命周期？ 在函数式组件中有生命周期吗？
  
  React 生命周期指的是组件在挂载、更新和卸载过程中所经历的一系列阶段。在类组件中，可以通过生命周期方法来处理这些阶段，比如 componentDidMount、componentDidUpdate 和 componentWillUnmount 等。
  
  在函数式组件中，虽然没有传统意义上的生命周期方法，但是随着 React Hooks 的引入，可以使用 useEffect Hook 来模拟类组件中的生命周期行为。
  
  通过 useEffect Hook，可以在函数式组件中实现组件挂载后、更新时和卸载前的逻辑。

- 如何理解 React 中的状态是什么？
  
  在 React 中，状态 state 是组件内部用于存储和管理数据的机制。状态可以影响组件的渲染输出，当状态发生变化时，React 会重新渲染组件以反映最新的状态。
  
  状态通常用于存储组件的数据，比如用户输入、组件的可见性、加载状态等。通常使用 this.state 和 this.setState（在类组件中）或者 useState Hook（在函数式组件中），可以在组件中定义和更新状态。
  
  状态的变化会触发组件的更新渲染，从而使得界面能够根据最新的状态来进行更新。
