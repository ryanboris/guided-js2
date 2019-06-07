//imperative --> declarative
//how              what? (abstracted)

//

// const x = 3
// // console.log(x.push('hi'))
// console.log(arr.push('3'))
// const y = arr.push('3')
// console.log(y)

// console.log(arr)
// arr.push('3')
// arr.push('3')
// arr.push('3')
// arr.push('3')
// arr.push('3')
// arr.push('3')
// arr.push('3')
// console.log(arr)
//destructive or not destructive (mutate vs immutable)

//.pop()
//.unshift()
// //.shift()
// const cl = console.log

// console.log('pop', arr.pop())
// console.log('pop2', arr.pop())
// console.log('pop3', arr.pop())
// console.log('unshift', arr.unshift(29999))
// console.log('shift', arr.shift())

// cl('arr', arr)

//iteration --> move through reps of code
// i = i + 1
// i += 1
// i++           *++i
// const arr = [1, 3, 45, 5, 6, 6, 3, 4, 4]
// const arr2 = [...arr, ...arr]
// console.log(arr2)
// console.log('arr.length', arr.length)
//for loop
// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i])
// }

// const newArr = []
// arr.forEach(function(item) {
//   newArr.push(item * 2)
// })

// console.log(newArr)

// cityData.map(function(city) {
//   console.log(city)
// })
// cityData.map(city => {
//   const cityName = city.name
//   return cityName
// })

//arrow function
// //function someName() {
//   console.log('some name')
// }
const cityData = [
  { name: 'Seattle', state: 'WA', population: 652405, land_area: 83.9 },
  { name: 'New york', state: 'NY', population: 8405837, land_area: 302.6 },
  { name: 'Boston', state: 'MA', population: 645966, land_area: 48.3 },
  { name: 'Kansas city', state: 'MO', population: 467007, land_area: 315 },
  { name: 'Hazleton', state: 'PA', population: 850000, land_area: 313 }
]

// const filtered = cityData.filter(city => city.name === 'Seattle')
// // console.log(filtered)

// //.filter()
// //.reduce()

// // const nums = [0, 1, 2, 3, 4]

// // const numsFiltered = nums.filter(num => num === 0)
// // console.log(numsFiltered)

// const filterAgain = cityData.filter(
//   city => city.state.charAt(0).toUpperCase() === 'N'
// )

// console.log(filterAgain)

// //take my array and iterate through
// const moreFilter = cityData.map(city => city.state)
// //work with only city.state of each object
// const filteredSomeMore = moreFilter.filter(string => string.charAt(0) === 'N')
// //get the first letter of each string and compare it to "N
// //donee!

const putItAllTogether = cityData
  .map(city => city.state)
  .filter(string => string.charAt(0) === 'N')

console.log(putItAllTogether)

const nums = [3, 4, 4, 32, 342, 23, 3, 2, 234]

const numzz = nums.reduce((left, right) => left + right)
console.log(numzz)

const sum = cityData.map(city => city.land_area).reduce((l, r) => l + r)

console.log(sum / cityData.length)
