// TODO: 1. Exercises Level 1
{
  // ? 1.1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
  let sign = window.prompt('请输入您的年龄：');
  if (sign >= 18) {
    alert('您已符合驾驶汽车的年龄')
  } else {
    alert('需要18周岁才可以驾驶汽车')
  }
  // ? 1.2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
  const myAge = 30;
  let yourAge = prompt('请输入您的年龄：');
  if (yourAge > myAge) {
    alert(`您的年龄大于我 ${yourAge - myAge} 岁`)
  } else {
    alert(`您的年龄小于我 ${myAge - yourAge} 岁`)
  }
  // ? 1.3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
  const a = 4;
  const b = 3;

  // Method 1 -- if...else
  if (a > b) {
    console.log('a is greater than b')
  } else {
    console.log('a is less than b')
  }
  // Method 2 -- ternary operator
  console.log(a > b ? 'a is greater than b' : 'a is less than b')
  // ? 1.4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
  let number = prompt('请输入一个数字：')
  if (number % 2 === 0) {
    console.log(`${number} is an even number`)
  } else {
    console.log(`${number} is not an even number`)
  }
}
// TODO: 2. Exercises Level 2
{
  // ? 2.1 Write a code which can give grades to students according to theirs scores: 
  /**
   * 
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
   */
  const score = prompt('请输入您的分数：')
  if (score >= 80 && score <= 100) {
    console.log('A')
  } else if (score >= 70 && score <= 79) {
    console.log('B')
  } else if (score >= 60 && score <= 69) {
    console.log('C')
  } else if (score >= 50 && score <= 59) {
    console.log('D')
  } else if (score >= 0 && score <= 49) {
    console.log('F')
  } else {
    console.log('Please enter a valid score')
  }
  
  // ? 2.2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  /**
   * 
    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer
   */
  const moon = Number(prompt('请输入月份：'))
  if ([9, 10, 11].includes(moon)) {
    console.log('现在是秋天')
  } else if ([12, 1, 2].includes(moon)) {
    console.log('现在是冬天')
  } else if ([3, 4, 5].includes(moon)) {
    console.log('现在是春天')
  } else if ([6, 7, 8].includes(moon)) {
    console.log('现在是夏天')
  } else {
    console.log('Please enter a valid moon')
  }
  // ? 2.3 Check if a day is weekend day or a working day. Your script will take day as an input.
  const day = prompt('请输入日期：')
  if (['周六', '周天'].includes(day)) {
    console.log('今天是休息日')
  } else {
    console.log('今天是工作日')
  }
}
// TODO: 3. Exercises Level 3
{
  // ? 3.1 Write a program which tells the number of days in a month.
  // ? 3.2 Write a program which tells the number of days in a month, now consider leap year.
}