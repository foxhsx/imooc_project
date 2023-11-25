class Animal {
  constructor({ name, age, color, limbs }) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.limbs = limbs;
  }

  run() {
    alert(`${this.name} is running on the grassland. It has four powerful ${this.limbs}. It is ${this.color} and it has ${this.age} years old.`)
  }
}

const animal = new Animal({ name: '辛巴', age: 8, color: 'orange', limbs: 'legs' })
// animal.run()

class Dog extends Animal {
  constructor({ name, age, color, limbs }) {
    super({ name, age, color, limbs });
    this.type = 'Dog'
  }

  eat() {
    alert(`this is a ${this.type} named ${this.name} like eat bone`)
  }
}
const dog = new Dog({name: '小哈', age: 3, color: 'black', limbs: 'legs'})
// dog.eat()
// dog.run()

class Cat extends Animal {
  constructor({ name, age, color, limbs }) {
    super({ name, age, color, limbs });
    this.type = 'Cat'
  }

  eat() {
    alert(`this is a ${this.type} named ${this.name} like eat fish`)
  }

  run() {
    alert(`${this.name} is running on the small courtyard. It has four small ${this.limbs}. It is ${this.color} and it has ${this.age} years old.`)
  }
}
const cat = new Cat({ name: '小花', age: 3, color: 'white', limbs: 'legs' })
// cat.eat();
// cat.run()

class Statistics {
  constructor(array) {
    this.arr = array
  }

  count() {
    return this.arr.length
  }

  sum() {
    return this.arr.reduce((a, b) => (a + b), 0)
  }

  min() {
    return Math.min(...this.arr)
  }

  max() {
    return Math.max(...this.arr)
  }

  range() {
    return this.max() - this.min()
  }

  median() {
    // const newArr = [].concat(this.arr)
    // for (let i = 0; i < newArr.length; i++) {
    //   for (let j = i + 1; j <= newArr.length; j++) {
    //     if (newArr[i] > newArr[j]) {
    //       const store = newArr[i];
    //       newArr[i] = newArr[j]
    //       newArr[j] = store
    //     }
    //   }
    // }
    // return newArr[Math.floor(newArr.length / 2)]
    const newArr = ([].concat(this.arr)).sort((a, b) => a - b);
    const len = newArr.length;
    if (len % 2 === 0) {
      return newArr[len / 2]
    } else {
      return newArr[Math.floor(len / 2)]
    }
  }
}

const statistics = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
console.log(statistics.median())