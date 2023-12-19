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

- 什么是基于类的 React 组件？

- 函数式 React 组件和基于类的 React 组件有什么区别？

- 我们什么时候需要使用基于类的组件而不是函数式组件

- 基于类的组件的用例是什么？

- 最常使用哪种类型的组件？函数组件还是类组件

- 什么是 React 生命周期？ （尚未涵盖）？

- React 中的状态是什么？ （尚未涵盖）
