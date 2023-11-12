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
    
    - [多维数组（数组中的数组）](#多维数组（数组中的数组）)
  
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
  
  - [练习](#练习)
    
    - [练习1](#练习1)
    
    - [练习2](#练习2)
    
    - [练习3](#练习3)
  
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

#### ternary operator
