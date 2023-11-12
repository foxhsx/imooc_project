// TODO 2. Exercise Level 2
// ? 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
import countries, { allCountries } from './countries.js'
import webTechs from './web_techs.js'
// ? 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/\./g, '');
text = text.replaceAll(',', '')
const words = text.split(' ')
console.log(words)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

console.log(words.length)
// 13

// ? 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// ? 3.1 add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
// ? 3.2 add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
// ? 3.3 remove 'Honey' if you are allergic to honey
shoppingCart.splice(4, 1)
// ? 3.4 modify Tea to 'Green Tea'
shoppingCart.splice(3, 1, 'Green Tea')
console.log(shoppingCart)

// ? 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
  console.log('Ethiopia'.toUpperCase())
} else {
  countries.push('Ethiopia')
  console.log(countries)
}
// ? 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
  console.log(webTechs)
}

// ? 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// ? 3.2 Slice the first ten countries from the countries array
const firstTenCountries = allCountries.slice(0, 10);
console.log(firstTenCountries, 'firstTenCountries')
// ? 3.3 Find the middle country(ies) in the countries array
const middleIndex = Math.ceil(allCountries.length / 2);
const isEven = allCountries % 2 === 0;
let middleCountries;
if (isEven) {
  middleCountries = allCountries.slice(middleIndex, middleIndex + 2);
} else {
  middleCountries = allCountries.slice(middleIndex, middleIndex + 1);
}
console.log(middleCountries, 'middleCountries')
// ? 3.4 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countries1 = []
let countries2 = []
if (isEven) {
  countries1 = allCountries.slice(0, middleIndex)
  countries2 = allCountries.slice(middleIndex, allCountries.length)
} else {
  countries1 = allCountries.slice(0, middleIndex)
  countries2 = allCountries.slice(middleIndex, allCountries.length)
}
console.log(countries1, countries2, '73')