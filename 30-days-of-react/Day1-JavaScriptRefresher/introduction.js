console.log('Welcome to 30DaysOfJavaScript! with external file')

// * 1. Variable
let firstName = 'Asabeneh'
firstName = 'Eyob'

const PI = 3.14 // Not allowed to reassign PI to a new value
// PI = 3.

// * 2. Array
// * 2.1 Using Array Constructor
// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []

// * 2.2 Using square brackets
// syntax
// This the most recommended way to create an empty list
const arrSquare = []
console.log(arr)

// * 3. How to create an array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// * 3.1 Array can have items of different data types
const arrDifferentDataTypes = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
] // arr containing different data types
console.log(arr)

// * 4. Using split create an array
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// * 5. Accessing array items using index
const fruitsIndex = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit) // lemon

// * 6. Modifying array element
{
  const numbers = [1, 2, 3, 4, 5]
  numbers[0] = 10 // changing 1 at index 0 to 10
  numbers[1] = 20 // changing  2 at index 1 to 20
  
  console.log(numbers) // [10, 20, 3, 4, 5]
  
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  countries[0] = 'Afghanistan' // Replacing Albania by Afghanistan
  let lastIndex = countries.length - 1
  countries[lastIndex] = 'Korea' // Replacing Kenya by Korea
  
  console.log(countries) // ["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
}

{
  // TODO Exercises
  // TODO 1. Exercise Level 1
    // ? 1. Declare an empty array;
    const emptyArray = []
    // ? 2. Declare an array with more than 5 number of elements
    const moreThan5Count = [1, 2, 3, 4, 5, 6, 7]
    // ? 3. Find the length of your array
    console.log(moreThan5Count.length) // 7
    // ? 4. Get the first item, the middle item and the last item of the array
    const first = moreThan5Count[0];
    const middleItem = moreThan5Count[3];
    const last = moreThan5Count[moreThan5Count.length - 1];
    // ? 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    const differentDataTypes = [
      1, 'string', true, { key: 'value' }, undefined, null
    ]
    console.log(differentDataTypes.length) // 5
    // ? 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft Apple, IBM, Oracle and Amazon
    const itCompanies = [
      'Facebook',
      'Google',
      'Microsoft',
      'Apple',
      'IBM',
      'Oracle',
      'Amazon',
    ]
    // ? 7. Print the array using console.log()
    console.log(itCompanies) // ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
    // ? 8. Print the number of companies in the array
    console.log(itCompanies.length) // 7
    // ? 9. Print the first company, middle and last company
    const firstCompany = itCompanies[0];
    const middleCompany = itCompanies[3];
    const lastCompany = itCompanies[itCompanies.length - 1];
    // ? 10. Print out each company
    for (let i = 0; i < itCompanies.length; i++) {
      console.log(itCompanies[i])
    }
    // ? 11. Change each company name to uppercase one by one and print them out
    for (let i = 0; i < itCompanies.length; i++) {
      itCompanies[i] = itCompanies[i].toUpperCase()
    }
    console.log(itCompanies) // ["FACEBOOK", "GOOGLE", "MICROSOFT", "APPLE", "IBM", "ORACLE", "AMAZON"]
    // ? 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    console.log(`${itCompanies.join()} are big IT companies`)
    // ? 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    if (itCompanies.indexOf('Alibaba') > -1) {
      console.log('Alibaba', itCompanies)
    } else {
      console.log('This company is not found in the itCompanies array')
    }
    // ? 14. Filter out companies which have more than one 'o' without the filter method
    for (let i = 0; i < itCompanies.length; i++) {
      if (itCompanies[i].indexOf('o') > -1) {
        itCompanies.splice(i, 1)
      }
    }
    // ? 15. Sort the array using sort() method
    itCompanies.sort()
    // ? 16. Reverse the array using reverse() method
    itCompanies.reverse()
    // ? 17. Slice out the first 3 companies from the array
    itCompanies.slice(0, 4)
    // ? 18. Slice out the last 3 companies from the array
    itCompanies.slice(-3)
    // ? 19. Slice out the middle IT company or companies from the array
    itCompanies.slice(4, 5)
    // ? 20. Remove the first IT company from the array
    itCompanies.shift()
    // ? 21. Remove the middle IT company or companies from the array
    itCompanies.splice(4, 0)
    // ? 22. Remove the last IT company from the array
    itCompanies.pop()
    // ? 23. Remove all IT companies
    itCompanies.splice();
  // TODO 3. Exercise Level 3
  // ? 3.1 The following is an array of 10 students ages:
   const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    //  * a. Sort the array and find the min and max age
    ages.sort();
    console.log(ages)
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    console.log(min, max)
    //  * b. Find the median age(one middle item or two middle items divided by two)
    const median = ages.length / 2;
    console.log(ages[median], ages[median + 1])
    //  * c. Find the average age(all items divided by number of items)
    const average = ages.reduce((a, b) => a + b) / ages.length;
    console.log(average)
    //  * d. Find the range of the ages(max minus min)
    const range = max - min;
    console.log(range)
    //  * e. Compare the value of (min - average) and (max - average), use abs() method
    const difference = Math.abs(min - average);
    const difference2 = Math.abs(max - average);
    console.log(difference, difference2)
}