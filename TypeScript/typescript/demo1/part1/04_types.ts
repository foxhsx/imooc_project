// object 表示一个 js 对象，但是一切皆对象，所以我们在开发的时候一般是不去使用的
let a: object;
a = {}
a = function () {}

/**
 *  其实在实际中我们并不是想限制一个值的属性是对象，而是限制对象里都包含哪些属性
 * {} 用来指定对象中可以包含哪些属性，后续的赋值必须和定义时的一模一样，多了不行少了也不行，
 * 除非是设置了可选属性，即属性后紧跟一个 ?
 * */ 
let b: {name: string, age?: number};
// b = {} // 报错，因为缺少 name 属性
b = { name: 'cecil' };

// 如果我们不想限制里面的属性，则可以使用属性变量的形式
let c: {name: string, [propsName: string]: any}
// 此时，就不会再限制该对象除了 name 之外的其他属性
c = {name: '猪八戒', age: 18}

// 对于定义函数来说，和 object 一样，没有什么作用，我们更倾向于规定函数参数的类型和返回值的类型
// let d: Function
let dd:(a:number, b:number) => number;
dd = function (n1, n2) {
  return n1 + n2;
}