// TODO 1. Exercises Level 1
{
  const dog = {}
  console.log(dog)
  dog.name = '橘子';
  dog.age = 10;
  dog.legs = '四个小短腿'
  dog.color = '橘色'
  dog.bark = function() {
    return 'woof woof';
  }
  dog.breed = '中华田园犬'
  dog.getDogInfo = function() {
    console.log(`这是一只名叫${dog.name}的${dog.color}的狗，它有${dog.legs}并且今年已经${dog.age}岁了，你们听，它又在叫了 ${dog.bark()}~~`)
  }
  dog.getDogInfo()
}
// TODO 2. Exercises Level 2
{
  const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  function hasManySkills() {
    let hasManySkills = {}
    for (let key in users) {
      if (!Object.keys(hasManySkills).length) {
        hasManySkills = {
          name: key,
          skillsLength: users[key].skills.length,
        }
      } else {
        if (users[key].skills.length > hasManySkills.skillsLength) {
          hasManySkills = {
            name: key,
            skillsLength: users[key].skills.length,
          }
        }
      }
    }
    return hasManySkills
  }
  console.log(hasManySkills())

  function pointsMoreThan50() {
    const pointsMoreThan50 = []
    for (let key in users) {
      if (users[key].points >= 50) {
        pointsMoreThan50.push(key)
      }
    }
    return pointsMoreThan50
  }
  console.log(pointsMoreThan50())

  console.log(Object.keys(users))
  console.log(Object.values(users))
}
// TODO 3. Exercises Level 3
{
  const personAccount = {
    firstName: 'Cecil',
    lastName: 'He',
    incomes: 2200,
    expenses: 2000,
    totalIncome: function (month) {
      return this.incomes * month;
    },
    totalExpense: function (month) {
      return this.expenses * month;
    },
    accountInfo: function() {
      console.log(this.firstName, this.lastName)
    },
    addIncome: function(money) {
      this.incomes += money;
    },
    addExpense: function(money) {
      this.expenses += money;
    },
    accountBalance: function(month) {
      return this.totalIncome(month) - this.totalExpense(month);
    }
  }

  const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  function signUp({ username, email, password }) {
    const hasAccount = users.some(user => user.username === username)
    if (hasAccount) {
      alert('当前账户已存在')
    } else {
      users.push({
        username,
        email,
        password,
        createdAt: new Date().toUTCString(),
        isLoggedIn: false,
        _id: Math.random().toString(36).substr(2),
      })
    }
  }

  // signUp({ username: 'cecil', email: 'worldhsx@163.com', password: 'test' })
  // console.log(users, '192');
  // signUp({ username: 'cecil', email: 'worldhsx@163.com', password: 'test' })

  function signIn({ username, password }) {
    const findUser = users.find(user => user.username === username);
    const hasLogin = findUser?.isLoggedIn;
    const validatePassword = findUser?.password === password;
    if (!findUser) {
      alert('当前用户不存在')
      return;
    }
    if (hasLogin) {
      alert('当前账户已登录')
    } else {
      if (!validatePassword) {
        alert('密码错误')
      } else {
        findUser.isLoggedIn = true;
        alert('登录成功')
      }
    }
  }

  // signIn({ username: 'ccc', password: 'ccc' })  // 不存在
  // signIn({ username: 'cecil', password: 'ttt' }) // 密码错误
  // signIn({ username: 'cecil', password: 'test' }) // 登录成功
  // signIn({ username: 'cecil', password: 'test' }) // 已登录
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

  function rateProduct({ productKey, userId, rate}) {
    const findProduct = products.find(product => product.name === productKey)
    if (!findProduct) {
      alert('Product not found')
    } else {
      findProduct.ratings.push({ userId, rate})
    }
  }

  rateProduct({ productKey: 'hhh', userId: Math.random().toString(36).substring(2), rate: 5}) // 找不到
  rateProduct({ productKey: 'mobile phone', userId: Math.random().toString(36).substring(2), rate: 5}) // 华为再添一分
  rateProduct({ productKey: 'Laptop', userId: Math.random().toString(36).substring(2), rate: 4.5})
  console.log(products, '262')

  function averageRating(productKey) {
    const findProduct = products.find(product => product.name === productKey);
    if (!findProduct) {
      alert('Product not found 267')
    } else {
      console.log(findProduct.ratings)
      const rates = findProduct.ratings.reduce((a, b) => {
        return a + b.rate
      }, 0);
      return rates / findProduct.ratings.length;
    }
  }

  console.log(averageRating('mobile phone'), '274')

  function likeProdcut(productKey, userId) {
    const findProduct = products.find(product => product.name === productKey);
    if (!findProduct) {
      alert('Product not found')
    } else {
      const hasLiked = findProduct.likes.indexOf(userId)
      if (hasLiked > -1) {
        findProduct.likes.splice(hasLiked, 1)
      } else {
        findProduct.likes.push(userId);
      }
    }
  }

  likeProdcut('mobile phone', Math.random().toString(36).substring(2))
  likeProdcut('Laptop', 'fg12cy')
  console.log(products, '295')
}