{
  // TODO Exercises 1
  function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
  }
  
  console.log(fullName('Cecil', 'He'))
  
  function addNumbers(a, b) {
    return a + b
  }
  
  console.log(addNumbers(1, 2))
  
  function areaOfCircle(r) {
    return Math.PI * r + r;
  }
  
  console.log(areaOfCircle(3));
  
  function convertCelciusToFahrenheit(oCelcius) {
    return (oCelcius * 9 / 5) + 32
  }
  
  console.log(convertCelciusToFahrenheit(25))
  
  function calculatesBMI(weight, height) {
    const heightInMeters = height / 100;
    
    // 计算BMI
    const bmi = Math.ceil(weight / (heightInMeters * heightInMeters));
    if (bmi < 18.5) {
      return '偏瘦';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return '正常';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return '过重';
    } else if (bmi >= 30) {
      return '肥胖';
    } else {
      return '你是不是没输入体重和身高啊'
    }
  }
  
  console.log(calculatesBMI(75, 170))
  
  function checkSeason(month) {
    if ([9, 10, 11].includes(month)) {
      return '现在是秋天'
    } else if ([12, 1, 2].includes(month)) {
      return '现在是冬天'
    } else if ([3, 4, 5].includes(month)) {
      return '现在是春天'
    } else if ([6, 7, 8].includes(month)) {
      return '现在是夏天'
    } else {
      return 'Please enter a valid moon'
    }
  }

  console.log(checkSeason(11))
}
