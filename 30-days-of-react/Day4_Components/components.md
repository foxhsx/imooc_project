# Components

- [划分组件](#划分组件)

- [JavaScript 函数](#javascript-函数)

- [JavaScript 类](#javascript-类)

- [创建 React 组件](#创建-react-组件)
  
  - [函数组件](#函数组件)
  
  - [类组件](#类组件)
  
  - [在 React 组件中使用动态数据](#在-react-组件中使用)
  
  - [进一步了解函数组件](#进一步了解函数组件)

- [练习](#练习)
  
  - [练习1](#练习1)
  
  - [练习2](#练习2)
  
  - [练习3](#练习3)

什么是 React 组件？

React 组件是一段可重用的代码，通过组件之间的组合就构成了一个个完整的模块，一个个完整的模块又构成了一个完整的应用程序。所以说 React 应用程序是组件的聚合。

在下面的示例中展示了不同的组件，我们给不同的组件给了不同的边框颜色。

我们可以使用 JS 函数或者类来创建组件，如果使用 JS 函数，则该组件就是函数式组件，而如果使用类，那么该组件就是类组件。在 React 16.8 以后的版本中已经很少使用类组件了，大多数情况下我们都使用函数式组件。

组件的类型有：

- 函数组件

- 展示组件

- 无状态组件

- 有状态组件

- 容器组件

- 哑组件

- 类组件

- 智能组件

React 组件是返回 JSX 的 JavaScript 函数或者类。组件名必须以大写字母开头，如果名称是两个单词，则应该是有两个驼峰的形式——CamelCase.

## 划分组件

在上一节，我们在网页中使用 buttons, forms, texts, media objects, header, section, article 和 footer等元素构建了一个简单的页面。

如果我们有一个需要被经常使用的 button 按钮，我们可以创建一个按钮组件，而不是在需要的时候重新创建它。对于其他元素也是如此。

在下图中，页面、页面主体和页脚都是组件，而在主体内部还有一个用户卡组件和一个文本部分组件。图中共有五个组件，不同的颜色代表不同的组件。

![](../imgs/day4_components_example.png)

在正式进入到 React 组件学习之前，我们先来回顾一下函数和类。

## JavaScript 函数

JavaScript 函数可以是常规函数也可以是箭头函数。它俩之间存在着细微的差别。

```js
const getUserInfo = (firstName, lastName, country, title, skills) => {
  return `${firstName} ${lastName},  a ${title} developer based in ${country}. He knows ${skills.join(
    ' '
  )} `
}
// When we call this function we need parameters
const skills = ['HTML', 'CSS', 'JS', 'React']
console.log(
  getUserInfo('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer', skills)
)
```

## JavaScript 类

类是一个对象的抽象。我们通过实例化一个类来创建具有共性的不同的对象。此外我们可以通过继承父级的所有方法和属性来创建子级。

```js
class Parent {
  constructor(firstName, lastName, country, title) {
    // we bind the params with this class object using this keyword
    this.firstName = firstName
    this.lastName = lastName
    this.country = country
    this.title = title
  }
  getPersonInfo() {
    return `${this.firstName} ${this.lastName},  a ${this.title} developer base in ${this.country} `
  }
  parentMethod() {
    // code goes here
  }
}

const p1 = new Parent('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer')

class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title)
    this.skills = skills
    // we bind the child params with the this keyword to this child object
  }
  getSkills() {
    let len = this.skills.length
    return len > 0 ? this.skills.join(' ') : 'No skills found'
  }
  childMethod() {
    // code goes here
  }
}

const skills = ['HTML', 'CSS', 'JS', 'React']

const child = new Child(
  'Asabeneh',
  'Yetayeh',
  'Finland',
  'FullStack Developer',
  skills
)
```

这里我们只是简单的回顾一下，因为 React 组件是由 JavaScript 函数或者类构成的，所以现在让我们制作一个 React 组件。

## 创建 React 组件

### 函数组件

### 组件渲染

### 在 React 组件中使用动态数据

### 进一步了解函数组件

## 练习

### 练习1

### 练习2

### 练习3
