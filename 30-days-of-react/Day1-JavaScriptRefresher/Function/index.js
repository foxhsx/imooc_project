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

{
  // TODO Exercises 2
  function printArray(array) {
    array.forEach(item => {
      console.log(item)
    })
  }

  printArray([1, 2, 3, 4, 5])

  function showDateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours()
    const minutes = date.getMinutes()

    function formatDate(time) {
      return time < 10 ? `0${time}` : time;
    }

    return `${formatDate(month)}/${formatDate(day)}/${year} ${hours}:${minutes}`
  }

  console.log((showDateTime))

  function swapValues(x, y) {
    return `y 是 ${x}，x 是 ${y}`
  }

  console.log(swapValues(2, 5))

  function reverseArray(array) {
    const arr = []
    for (let i = array.length - 1; i >= 0; i--) {
      arr.push(array[i])
    }

    return arr;
  }

  console.log(reverseArray([1,2,3,4,5]))

  function capitalizeArray(array) {
    return array.map(item => item.toUpperCase())
  }

  console.log(capitalizeArray(['cecil', 'jerry', 'test']))

  const itemList = []
  function addItem(item) {
    itemList.push(item)
    return itemList
  }

  console.log(addItem(3))

  function removeItem(index) {
    itemList.splice(index, 1)
    return itemList
  }

  console.log(removeItem(0))

  function evensAndOdds(number) {
    const isEven = number % 2 === 0;
    return isEven? '偶数' : '奇数'
  }

  console.log(evensAndOdds(14))

  function sumParamters() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }

  console.log(sumParamters(1,2,3,4,5))

  function userIdGenerator() {
    return Math.random().toString(36).substring(2, 9)
  }

  console.log(userIdGenerator())
}
