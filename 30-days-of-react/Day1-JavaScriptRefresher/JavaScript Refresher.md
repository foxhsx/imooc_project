- [复习 JavaScript](#复习JavaScript)
  
  - [0.将 JS 添加到网页中](#0.将JS添加到网页中)
    
    - [内联方式](#内联方式)
    
    - [内部写入](#内部写入)
    
    - [引入外部脚本](#引入外部脚本)
  
  - [1.变量](#1.变量)
  
  - [2.数据类型](#2.数据类型)
  
  - [3.数组](#3.数组)
    
    - [如何创建一个空数组](#如何创建一个空数组)
    
    - [如何创建一个包含值的数组](#如何创建一个包含值的数组)
    
    - [使用 split 来创建数组](#使用-split-来创建数组)
    
    - [使用索引访问数组里面的项](#使用索引访问数组里面的项)
    
    - [修改数组元素](#修改数组元素)
    
    - [操作数组的方法](#操作数组的方法)
    
    - [多维数组（数组中的数组）](#多维数组数组中的数组)
  
  - [练习](#练习)
    
    - [练习1](#练习1)
    
    - [练习2](#练习2)
    
    - [练习3](#练习3)
  
  - [4.条件句](#4.条件句)
    
    - [if](#if)
    
    - [if else](#if-else)
    
    - [if else if else](#if-else-if-else)
    
    - [switch](#switch)
    
    - [三元表达式](#三元表达式)
  
  - [条件语句练习](#条件语句练习)
    
    - [条件语句练习1](#条件语句练习1)
    
    - [条件语句练习2](#条件语句练习2)
    
    - [条件语句练习3](#条件语句练习3)
  
  - [5.循环](#5.循环)
    
    - [循环类型](#循环类型)
      
      - [for](#for)
      
      - [while](#while)
      
      - [do while](#do-while)
      
      - [for of](#for-of)
      
      - [forEach](#forEach)
      
      - [for in](#for-in)
    
    - [停止循环及跳过某个条件](#停止循环及跳过某个条件)
      
      - [break](#break)
      
      - [continue](#continue)
    
    - [小结](#小结)
  
  - [6.作用域](#6.作用域)
    
    - [Window 作用域](#Window-作用域)
    
    - [全局作用域](#全局作用域)
    
    - [局部作用域](#局部作用域)
  
  - [7.对象](#7.对象)
    
    - [创建一个空对象](#创建一个空对象)
    
    - [创建一个有值的对象](#创建一个有值的对象)
    
    - [获取对象中的值](#获取对象中的值)
    
    - [创建对象的方法](#创建对象的方法)
    
    - [给对象设置一个新的属性](#给对象设置一个新的属性)
    
    - [对象的方法](#对象的方法)
      
      - 使用 `Object.keys` API 获取对象的所有 keys
      
      - 使用 `Object.assign` 合并两个或多个对象
      
      - 使用 `Object.values` 获取对象的所有值
      
      - 使用 `Object.entries` 获取对象的所有 keys
      
      - 使用 `hasOwnProperty` 方法检查对象的属性
    
    - [对象练习](#对象练习)
      
      - [对象练习1](#对象练习1)
      
      - [对象练习2](#对象练习2)
      
      - [对象练习3](#对象练习3)
  
  - [8.方法](#8.方法)
  
  - [9.高阶函数](#9.高阶函数)
  
  - [10.解构赋值](#10.解构赋值)
  
  - [11.函数式编程](#11.函数式编程)
  
  - [12.类](#12.类)
  
  - [13.DOM](#13.DOM)

## 复习 JavaScript

### 0.将 JS 添加到网页中

将 JavaScript 添加到网页中有三种不同的方式：

- 内联

- 内部

- 外部引入

我们通过以下例子来看下它们是如何进行引入的：

#### 内联方式

我们可以在编辑器中新建一个命名为 `30DaysOfJS` 的项目，然后在该目录中再新建一个目录为 `Day1-JavaScriptRefresher`，在这个目录中我们新建一个 `index.html` 文件。然后粘贴以下代码并在浏览器中打开：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>  
  </body>
</html>
```

这就是内联的 JavaScript，在页面上通过点击按钮触发 alert 内置函数弹出一个消息。

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day1_inline_script.png)

#### 内部写入

我们也可以在 head 或者 body 中写入 JavaScript，但最好还是将其写在 body 中。我们来看下例子：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript in head')
    </script>
  </head>
  <body>
    <script>
      console.log('Welcome to 30DaysOfJavaScript in body')
    </script>
</body>
</html>
```

然后按下 F12 打开浏览器控制台我们就可以看到打印出的日志信息了。

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day1_internal_script.png)

#### 引入外部脚本

和内部脚本类似，外部脚本也可以在 head 和 body 中引入，但一般情况下还是更适合在 body 中引入。

首先，我们需要在我们的项目目录下创建一个 JavaScript 文件，文件名以 `.js` 的后缀结尾，比如 `introduction.js` ，内容也很简单：

```js
console.log('Welcome to 30DaysOfJavaScript')
```

然后，将这个 JS 文件在 body 的底部引入：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External script</title>
  </head>
  <body>
    //it could be in the header or in the body // Here is the recommended place
    to put the external script
    <script src="introduction.js"></script>
  </body>
</html>
```

当然我们也可以在 head 中引入：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External script</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
```

最后，将这个 html 文件在浏览器中打开，并打开浏览器控制台，我们就可以看到对应的输出：

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day1_external_file.png)

### 1.变量

在 JavaScript 中我们使用 `var`、`let` 和 `const` 来定义一个变量。其中：

- var 的作用域是根据它当前的执行上下文来决定的。也就是说它本身是根据声明位置决定是全局变量还是局部变量，作用域限制在其声明位置的上下文中。

- let 和 const 是块作用域，它们的作用域范围只会限制在对应的块中。

在现在，我们基本上都使用 `let` 和 `const` ，很少再去使用 `var` 了。

```js
let firstName = 'Asabeneh'
firstName = 'Eyob'

const PI = 3.14 // Not allowed to reassign PI to a new value
// PI = 3.
```

更多关于 `var` 、`let` 和 `const` 的区别请参考 [var、let 和 const 的区别 | Coder 小站](https://blog.ihsxu.com/blog/1694413771640)

### 2.数据类型

如果你还对数据类型不太了解，可以参考以下任意一个资料：

- 《JavaScript 高级程序第 4 版》

- [JavaScript 数据类型和数据结构]([JavaScript 数据类型和数据结构 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures))

### 3.数组

相较于单个变量而言，数组可以存储更多的值。

- 在数组中每个值都有对应的下标 `index`，且每个下标在内存中都有一个引用地址。

- 数组中的每个值都可以通过对应的下标来访问。

- 在一个数组中，下标都是从 0 开始，且最后一个值的下标都是比数组的长度小一的。

- 数组是一个有序的、可修改的、可以由不同数据类型组成的集合体。

- 数组中允许出现相同的元素。

- 当然，它也允许是一个空数组，也就是说，它里面可以不存储任何值。

#### 如何创建一个空数组

在 JS 中我们有多种定义数组的方法：

- 使用数组的构造函数

```js
// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []
```

- 使用方括号

```js
// syntax
// This the most recommended way to create an empty list
const arr = []
console.log(arr)
```

#### 如何创建一个包含值的数组

最简单的方法就是定义数组的时候，在方括号中写入变量：

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
```

可以打印出以下内容：

```textile
Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
Number of numbers: 6
Fruits: ['banana', 'orange', 'mango', 'lemon']
Number of fruits: 4
Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
Number of vegetables: 5
Animal products: ['milk', 'meat', 'butter', 'yoghurt']
Number of animal products: 4
Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
Number of web technologies: 7
Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
Number of countries: 5
```

- 数组中也允许有不同类型的数据

```js
const arr = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
] // arr containing different data types
console.log(arr)Aha
```

#### 使用 split 来创建数组

在字符串类型中，我们可以使用 `split` API 来分割字符串，并生成一个数组出来。让我们来看个例子：

```js
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
```

#### 使用索引访问数组里面的项

上面也说过，数组里的每个值都对应一个下标，我们可以通过下标来访问对应的值。下图很清晰的展示了在一个数组中值与下标的关系。

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day1_array_index.png)

```js
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit) // lemon
```

#### 修改数组元素

数组是可以被修改的。当一个数组被创建之后，我们可以修改数组里面的元素内容。

```js
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10 // changing 1 at index 0 to 10
numbers[1] = 20 // changing  2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

countries[0] = 'Afghanistan' // Replacing Albania by Afghanistan
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

console.log(countries) // ["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
```

#### 操作数组的方法

数组中提供了大量的 API 和属性供开发者使用，以下是一些常见的方法和属性：

- Array：上面有说明，不再赘述；

- length：用来访问一个数组的长度，也就是数组中有多少个值；

- concat：可以将两个以上的数组合并到一起

```js
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
```

- indexOf：返回数组中第一次出现给定元素的下标，如果不存在则返回 -1。

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1
```

- lastIndexOf：和上一个 API 刚好相反，它是用来查找最后一个元素的

```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1
```

- slice：可以生成一个目标数组的副本，有俩参数 `start` 和 `end`，生成的新数组是不包含 `end` 下标对应的值的。

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position
```

- splice：删除和替换数组的内容，有三个参数：
  
  - start：从哪个位置开始
  
  - deleteCount：要删除的数量
  
  - addeds：要增加的值

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.splice()) // -> remove all items


const numbers = [1, 2, 3, 4, 5]
console.log(numbers.splice(0, 1)) // remove the first item


const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
```

- join：可以将一个数组转为由 `,` 连接的字符串，也可以指定链接符号

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
] // List of web technologies

console.log(webTechs.join()) // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # ')) // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
```

- toString：和上述方法一样，只不过它无法指定链接符

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
```

- includes：检查数组中是否有目标元素，返回一个 boolean 类型的值。

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
] // List of web technologies

console.log(webTechs.includes('Node')) // true
console.log(webTechs.includes('C')) // false
```

- isArray：检查一个值是否是数组类型。

```js
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false
```

- fill：使用一个固定值来填充数组

```js
const arr = Array() // creates an an empty array
console.log(arr)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]
```

- push：将指定的元素添加到数组的末尾，并返回新的数组长度。

```js
// syntax
const arr = ['item1', 'item2', 'item3']
arr.push('new item')

console.log(arr)
// ['item1', 'item2','item3','new item']
```

- pop：从数组中删除**最后一个**元素，并返回该元素的值。此方法会更改数组的长度。

```js
const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> remove one item from the end

console.log(numbers) // -> [1,2,3,4]
```

- shift：从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。

```js
const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning

console.log(numbers) // -> [2,3,4,5]
```

- unshift：将指定元素添加到数组的开头，并返回数组的新长度。

```js
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning

console.log(numbers) // -> [0,1,2,3,4,5]
```

- reverse：反转数组中的元素，并返回同一数组的引用。

```js
const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> reverse array order

console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]
```

- sort：对数组的元素进行排序，并返回对相同数组的引用。默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

#### 多维数组（数组中的数组）

数组中也可以嵌套数组。

```js
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
]
console.log(arrayOfArray[0]) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
```

### 练习

#### 练习1

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]
```

1. 声明一个空数组；

2. 声明一个元素数量超过 5 个的数组

3. 找到数组的长度

4. 获取数组的第一项、中间项和最后一项

5. 声明一个名为mixedDataTypes的数组，将不同的数据类型放入数组中并找到数组的长度。 数组大小应大于 5

6. 声明一个数组变量名称 itCompanies 并分配初始值 Facebook、Google、Microsoft、Apple、IBM、Oracle 和 Amazon

7. 使用 console.log() 打印数组

8. 打印数组中的公司数量

9. 打印第一家公司、中间和最后一家公司

10. 打印出每个公司

11. 将各个公司名称一一改为大写并打印出来

12. 将数组打印为一个句子：Facebook、Google、Microsoft、Apple、IBM、Oracle 和 Amazon 是大型 IT 公司。

13. 检查 itCompanies 数组中是否存在某个公司。 如果存在返回公司，否则返回未找到公司

14. 不使用过滤方法过滤掉具有多个“o”的公司

15. 使用 sort() 方法对数组进行排序

16. 使用reverse()方法反转数组

17. 从数组中切出前 3 个公司

18. 从数组中切出最后 3 个公司

19. 从阵列中剔除中间的 IT 公司或公司

20. 从数组中删除第一家 IT 公司

21. 从阵列中删除中间 IT 公司或公司

22. 从数组中删除最后一个 IT 公司

23. 删除所有 IT 公司

> 查看 [github 仓库](https://github.com/foxhsx/imooc_project/blob/master/30-days-of-react/Day1-JavaScriptRefresher/introduction.js)

#### 练习2

1. 创建一个 `countries.js` 文件，将上面的 `countries` 数组添加到这个文件中；再创建一个 `web_techs.js` 文件，并将上面的 `web_tech` 数组存储在这个文件中，然后将两个文件在 `main.js` 中引入

2. 将下面字符串中的所有标点符号都去掉，并将其改为数组。然后计算数组中共有多少个单词。
   
   > 友情提示
   > 
   > 使用字符串的 `replace` 方法时，需要注意第一个参数，如果第一个参数是字符串，那么只会替换掉匹配到的第一个值。如果想要替换所有想要替换的值，这里要么：
   > 
   > - 使用带 `g` 的正则表达式
   > 
   > - 要么使用 `replaceAll` API
   
   ```js
   let text =
     'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
   console.log(words)
   // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
   console.log(words.length)
   // 13
   ```

3. 在下面的购物车中实现添加、删除和编辑商品的功能
   
   ```js
   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
   ```
   
   - 将肉类添加到你购物车的开头
   
   - 将糖添加到你购物车的末尾
   
   - 移除掉蜂蜜
   
   - 将茶改为绿茶

4. 在 `countries` 数组中检查是否有 `Ethiopia`，如果有，则打印出大写的单词。如果没有则添加到数组中。

5. 在 `webTechs` 数组中检查是否存在 `Sass`，如果有，则打印出 `Sass is a CSS preprocess`，如果没有则将其添加到数组中。

6. 将下面两个变量合并到一起，并存储在一个名为 `fullStack` 的变量中

```js
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
```

#### 练习3

1. 下面是一组年龄的数组，现在我们要对这个数组进行一些操作：
   
   ```js
   const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
   ```
   
   - 对整个数组进行排序，并找到最大年龄和最小年龄
   
   - 找到处于中间位置的年龄
   
   - 求平均年龄
   
   - 求最大年龄和最小年龄差了多少岁
   
   - 比较（最小值 - 平均值）和（最大值 - 平均值）之间的值，使用 `abs()` 方法

2. 将 `countries`数组中的前十个值进行分割

3. 从 `countries` 数组中找出中间的国家

4. 将 `countries` 数组分割成两个数组，如果原数组不是偶数，则第一个数组比后面的数组多一个国家

### 4.条件句

条件句用于在不同条件时做出不同选择的场景。默认情况下，JS 中的代码执行顺序是从上到下进行执行的，而如果我们需要修改执行的顺序，那么有两种方式：

- 条件执行：即如果一个表达式为 true 时，则会执行条件体里的一个或者多个语句。

- 重复执行：只要表达式为 true，则会重复执行条件体里的一个或者多个语句。

接下来我们来看看在开发中经常用到的几个条件句方法：

#### if

在 JS 及其他编程语言中，if 关键字是用来检查条件是否为真的。如果为真，则会执行条件体中的代码。

```js
// syntax
if (condition) {
  //this part of code runs for truthy condition
}
```

```js
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number
```

#### if else

既然有了 if，那么我们就还需要 else，也就是「如果和反之」的关系。简单一点来说，if 的条件如果成立，则执行第一个代码块中的内容，反之则执行第二个代码块的内容。

```js
// syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
```

```js
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number
```

#### if else if else

以上都是条件比较少的情况，如果遇到两个以上的条件判断时，需要怎么做呢？这个时候就有了 `if...else if...else` 。

```js
// syntax
if (condition) {
  // code
} else if (condition) {
  // code
} else {
  //  code
}
```

```js
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
```

#### switch

`switch` 是 `if...else if...else` 的替代方案，`switch` 语句以 `switch` 关键字开头，后面紧跟小括号（里面是条件，一般是一个变量）和代码块，而在代码块中，我们将具有不同的条件。

如果 switch 中的变量与 case 的值相匹配，那么就会执行这个 case 下的代码。而在每个 case 中都会有一个 break 语句，break 是用来终止 switch 循环的，即当前条件满足后代码就不会再继续执行下去了。

最后是 default 部分，只有在所有的 case 都不满足时才会执行。

```js
switch (caseValue) {
  case 1:
    // code
    break
  case 2:
    // code
    break
  case 3:
  // code
  default:
  // code
}
```

```js
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
```

#### 三元表达式

在 React 中，三元表达式是很常见的一种写法，它是编写 `if...else` 语句的一种简短的方法。

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

### 条件语句练习

#### 条件语句练习1

1. 使用 prompt 来获取用户的输入信息，提示「请输入您的年龄」。如果用户年满18岁，则提示用户：您已符合驾驶汽车的年龄；如果不是则提示：需要18周岁才可以驾驶汽车。
   
   ```textile
   Enter your age: 30
   You are old enough to drive.
   
   Enter your age:15
   You are left with 3 years to drive.
   ```

2. 使用 `if...else` 来比较 `myAge` 和 `yourAge` 的值，根据比较出来的结果，将更大的值打印在控制台上。也是使用 prompt 来获取用户的年龄。
   
   ```textile
   Enter your age: 30
   You are 5 years older than me.
   ```

3. 如果 a 比 b 大，则返回 a 大于 b，反之返回 a 小于 b。尝试使用两种方式来实现。
   
   - 使用 `if...else`
   
   - 使用三元表达式
   
   ```textile
   let a = 4
   let b = 3
   ```
   
   //   4 is greater than 3

```
4. 偶数可以被2整除，且余数为零。如何使用 JS 检查数字是否为偶数？

```textile
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
```

#### 条件语句练习2

1. 写一个根据学生分数来评优的代码；
   
   - 80-100, A
   
   - 70-89, B
   
   - 60-69, C
   
   - 50-59, D
   
   - 0-49, F

2. 检查当前时间是处于哪个季节？如果用户输入：
   
   - 九、十、十一月是秋天
   
   - 十二月、一月和二月是冬天
   
   - 三月、四月和五月是春天
   
   - 六月、七月和八月是夏天

3. 检查某一天是工作日还是周末，只需要输入周几即可

#### 条件语句练习3

1. 写一个计算输入的月份有多少天的程序

2. 在上一题的基础上，要考虑是否是闰年

### 5.循环

在开发中我们经常需要使用不同的循环任务来处理一些重复的事情。比如现在让你在页面中打印1000次 Hello World，假如没有循环，哪怕是 CV 也需要大量时间，但是有循环之后，分分钟就可以完成。

在 JS 中，循环的种类有：

- for 

- while

- do while

- for of

- forEach

- for in

在循环中，我们通常都会设置一个停止循环的条件来避免造成死循环（也就是要避免它一直循环下去）。

而在一些场景下，我们也可能想在循环到某个条件时，跳过或者中断这次任务。跳过任务我们使用 continue 关键字，中断则使用 break 关键字。

#### 循环类型

##### for

假如我们知道有多少次循环任务时，我们通常会使用 for 循环。这是在平时开发中经常用到的循环方法，它的语法如下：

```js
// for loop syntax

for (initialization, condition, increment/decrement) {
    code goes here
}
```

```js
// 循环 5 次
for (let i = 0; i < 6; i++) {
  console.log(i)
}


// 计算 0 到 100 的let sum = 0
for (let i = 0; i < 101; i++) {
  sum += i
}

console.log(sum)##### 
```

##### while

假如我们不知道提前需要进行多少次循环的时候，while 循环就闪亮登场了。

```js
let count = prompt('Enter a positive number: ')
while (count > 0) {
  console.log(count)
  count--
}
```

##### do while

`do while` 是在任何条件下都会执行一次的循环。

```js
let count = 0
do {
  console.log(count)
  count++
} while (count < 11)
```

尽管下面的变量不符合 while 后面的条件判断，但是也会执行一次 do 代码块中的代码。

```js
let count = 11
do {
  console.log(count)
  count++
} while (count < 11)
```

> while 循环在开发中其实是比较少见的，比较常见的还是 for 相关的循环

##### for of

`for of` 循环是 ES6 之后新增的一种循环方法，可以用在任何可迭代对象上，主要访问可迭代对象的值：

```js
const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
  console.log(number)
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
for (const country of countries) {
  console.log(country.toUpperCase())
}

const str = 'Hello';
for (const char of str) {
  console.log(char);
}
// 输出：H e l l o
```

##### forEach

`forEach` 方法实际上是 Array 数组原型上的一个 API 方法，它大大简化了我们循环数组的操作。

```js
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((number, i) => {
  console.log(number, i)
})

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
countries.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase())
})
```

##### for in

`for in` 方法可以用在对象上，很有趣是吧。它会以对象的 key 作为循环对象：

```js
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
}

for (const key in user) {
  console.log(key, user[key])
}
```

#### 停止循环及跳过某个条件

##### break

break 关键字是被用来中断循环的：

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break
  }
  console.log(i)
}

// 0 1 2
```

可以看到，当匹配到数字 3 的时候，循环就被停止了。

##### continue

我们也可以使用 continue 关键字来跳过一些迭代。

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue
  }
  console.log(i)
}
// 0 1 2 4 5
```

当这段代码匹配到 3 的时候，跳过了这次循环，继续下次循环，所以这里没有打印出 3。

#### 小结

- 当已知循环次数时，我们通常会使用 for 循环；

- 而在不确定循环次数时，需要使用 while 循环；

- do while 循环在任何情况下，都至少会执行一次代码

- for of 循环可以用在任何可迭代对象上，它主要访问可迭代对象的值

- forEach 是目前在数组中使用频率很高的、用来循环的 API

- for in 用于遍历对象的可枚举属性，而不是里面的元素

### 作用域

在编程中，是有作用域的概念的，简单点来说就是当我们在定义了一个变量之后，这个变量的可用范围。

细分作用域类型的话，一般有三种：

- Window

- Global

- 局部

在之前我们已经介绍过定义变量的三个关键字 `var`、`let` 和 `const`，其中 `let` 和 const `关键`字定义的变量一般都只能在局部作用域使用。

> 我们可以新建一个 `scope.js` 文件开始作用域的练习。

#### Window 作用域

在 JS 中，Window 作用域也就是窗口作用域和全局（Global）作用域在概念上大差不差，都是指全局作用域，但是需要注意的是这种情况只出现在浏览器端。如果在 Node 等环境中它俩是不同的。

那怎么定义全局变量呢？两种方式：

- 使用 `var` 关键字

- 不使用任何关键字，直接在文件中定义变量

```js
//scope.js
var a = 'JavaScript' // is a window scope this found anywhere
b = 10 // this is a window scope variable
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible
```

#### 全局作用域

上面说过，在浏览器环境中，全局作用域其实就是 Window 作用域，我们可以在当前窗口访问所有在全局作用域下的变量。

不过这里有一点需要注意，这个概念是有参照物的，如果只针对某个文件而言，在文件最外层定义的变量，我们也可以称它为这个文件里的全局变量。

```js
//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
```

#### 局部作用域

一般我们声明在某些代码块中的变量，只能在这个代码块中进行访问，外部是无法感知的。这个代码块就是这个变量的局部作用域，而这个变量我们称为局部变量。

```js
//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let c = 30
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let d = 40
    console.log(a, b, c) // Python 20 30
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b) // JavaScript 10
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
```

> ⚠️需要注意的是，在 JS 中使用 `var` 关键字定义的变量是**有函数作用域**的，但是它没有块级作用域。我们来看一个例子：

```js
//scope.js
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity) // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i) // 1, 2, 3
}
console.log(i) // 3
```

可以看到在函数中使用 `var` 定义的变量外界是访问不到的，但是在下边的条件体中定义的变量，外界就可以访问到。

不过假如我们使用 `let` 或者 `const` 就可以避免这种情况，因为它俩是讲究块级作用域的，只要它在一个代码块中被定义，那么就只能在这个代码块中被访问。

```js
//scope.js
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81
  console.log(gravity)
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  const gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i) // 1, 2, 3
}
// console.log(i), Uncaught ReferenceError: gravity is not defined
```

### 对象

在编程领域中，一切皆对象。对象是一个或者多个无序的键值对的集合。

#### 创建一个空对象

```js
const person = {}
```

#### 创建一个有值的对象

一个对象的属性值可以是字符串、数字、布尔值、对象、null、undefined 和函数。

对于一个人来说，他有姓、有名、年龄、住址、爱好和是否已婚等属性。那么在对象中他可以这样进行展示：

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  isMarried: true,
}
console.log(person)
```

#### 获取对象中的值

我们有两种方式来访问对象的值：

- 我们可以使用 `.` 号来访问 key 为一个单词的属性

- 使用方括号和引号

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545',
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location'])

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])
```

#### 创建对象的方法

在上面的代码块中我们可以看到一个 `getFullName` 的属性，它在这个对象中是一个方法。在这个方法中 `this` 关键字指的是对象本身，我们可以使用 `this` 来访问对象的不同属性。

> ⚠️注意：如果要在对象方法中使用 this，那么就不能使用箭头函数，不然 this 会指向 window 对象而非当前对象。

#### 给对象设置一个新的属性

对象的内容是可变的，我们可以在创建对象后对对象进行增删改的操作。

比如给一个对象新增属性：

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .slice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.slice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
```

#### 对象的方法

Object 自身提供了不同的 API 来协助开发者对对象进行操作，接下来我们来看一些常用的：

##### 使用 `Object.keys` API 获取对象的所有 keys
