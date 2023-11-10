- [复习 JavaScript](#复习 JavaScript)
  
  - [0.将 JS 添加到网页中](#0.将 JS 添加到网页中)
    
    - [内联方式](#内联方式)
    
    - [内部写入](#内部写入)
    
    - [引入外部脚本](#引入外部脚本)
  
  - [1.变量](#1.变量)
  
  - [2.数据类型](#2.数据类型)
  
  - [3.数组](#3.数组)
    
    - [如何创建一个空数组](#如何创建一个空数组)
    
    - [如何创建一个包含值的数组](#如何创建一个包含值的数组)
    
    - [使用 split 来创建数组](#如何创建一个包含值的数组)
    
    - [使用索引访问数组里面的项](#使用索引访问数组里面的项)
    
    - [修改数组元素](#修改数组元素)
    
    - [操作数组的方法](#操作数组的方法)
      
      - [构造函数](#构造函数)
      
      - [使用 fill 创建静态值](#使用 fill 创建静态值)
      
      - [使用 concat 来合并数组](#使用 concat 来合并数组)
      
      - [数组长度](#数组长度)
      
      - [索引](#索引)
      
      - [检查数组](#检查数组)
      
      - [将数组转为字符串](#将数组转为字符串)
      
      - [join 方法](#join 方法)
      
      - [slice](#slice)
      
      - [splice](#splice)
      
      - [push](#push)
      
      - [pop](#pop)
      
      - [删除数组的第一个元素](#删除数组的第一个元素)
      
      - [将一个元素添加到数组的开头](#将一个元素添加到数组的开头)
      
      - [反转数组的顺序](#反转数组的顺序)
      
      - [排序 Sort](#排序 Sort)
    
    - [多维数组（数组中的数组）](#多维数组（数组中的数组）)
  
  - [练习](#练习)
    
    - [练习1](#练习1)
    
    - [练习2](#练习2)
    
    - [练习3](#练习3)
  
  - [4.条件句](#4.条件句)
    
    - [if](#if)
    
    - [if else](#if else)
    
    - [if else if else](#if else if else)
    
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
      
      - [do while](#do while)
      
      - [for of](#for of)
      
      - [forEach](#forEach)
      
      - [for in](#for in)
    
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


