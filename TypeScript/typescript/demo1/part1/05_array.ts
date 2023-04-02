// ? array 类型
// ? 表示字符串字符串数组，里面都是字符串
let ee:string[]
ee = ['1','2','3']

// 另一种写法
let gg:Array<number>;
gg = [1,2,3]

// ? tuple 元祖，就是固定长度的数组
// ? 语法：[type1, type2, ..., typen]
let h:[string, string];
h = ['www', 'ddd']

// ? enum 枚举，
enum Gender {
  Male = 0,
  Female = 1
}

let i:{name: string, gender: Gender};
i = {
  name: '悟空',
  gender: Gender.Male,
}

console.log(i.gender === Gender.Male);

// 定义对象类型的另一种语法, & 表示同时满足
let j: {name: string} & {age:number}
j = { name: '悟空', age: 18 }

// ? 类型的别名
type myType = 1 | 2 | 3 | 4;
let k:myType;
