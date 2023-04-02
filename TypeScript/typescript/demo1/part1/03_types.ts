// 字面量进行类型声明

let e: 10;
// e = 11; 不可以赋值为 11，这里类似定义常量

// 可以使用 ｜ 来连接多个类型（联合类型）
let f: "male" | "female";
f = "male"
f = "female"

let d: boolean | string;
d = true
d = 'hello'

// any 表示的是任意类型，即相当于对该变量关闭了 TS 的类型检测
// 使用 TS 时，不建议使用 any 类型

// 声明变量如果不指定类型，则 TS 解析器会自动判断变量的类型为 any——隐式 any
let g: any;
g = 10;
g = 'hello'
g = true

// 在不使用 any 的情况下，还可以设置 unknown 类型
let aa: unknown
aa = 10
aa = 'hello'
aa = true

let s:string
// d 的类型是 any，它可以赋值给任意变量，s 的类型本来是 string，但是赋值为 d 后，也成为了 any
s = d
// aa 的类型是 unknown，当我们将它赋值给 s 时，就会报错，这就是 any 和 unknown 的区别，
// 它不会影响别的值
// s = aa

// 通过类型判断来进行赋值
aa = 'hello';
if (typeof aa === 'string') {
  s = aa
}

// 类型断言，可以用来告诉解析器变量的实际类型
s = aa as string;
s = <string>aa;

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn():void {}

// never 表示永远不会返回结果，常见的场景就是抛出异常
function fn2():never {
  throw new Error('something was wrong!')
}