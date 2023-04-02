// 声明一个变量 a，同时指定它的类型为 number
let a: number;

// a 的类型设置了为 number，在以后的赋值过程中 a 的值只能是数字
a = 10;
// a = 'hello'; 会报错，且编译也会报错，默认情况下，如果不是严格模式，也会编译成功，因为这也符合 JS 语法

let b: string;
b = 'hello';

// 如果变量的声明和赋值是同时进行的，TS 可以自动对变量进行类型检测
let c = false;
c = true;

// 函数参数类型声明
// 在参数括号后面加一个 type，表示函数返回值的类型
function sum(a:number, b:number):number {
  // return a + 'b';
  return a + b;
}

sum(123, 345);
// sum(123, '345');
// sum(123, 345, 789);