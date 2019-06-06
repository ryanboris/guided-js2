// function kingdom(){
//   let queen = "Queen of Hearts";
//   console.log(`Long live ${queen}`);
//   debugger;

//   function city(value){
//     const mayor = "Mayor Umbada";
//     console.log(`${queen} demands more taxes from ${mayor}`);
//     debugger;

//     function town(){
//       const townCrier = "Crier Todd";
//       console.log(`${townCrier} has a message for you! ${mayor} says revolt againt ${queen}!`)
//       debugger;
//     }
//     town()

//   }

//   city()
// }

// kingdom()

// Higher Order Function

// function calculator(a, b, callback){
//   // a = 5
//   // b = 7
//   // callback = -2
//   return callback(a, b)
// }

// function add(num1, num2){
//   return num1 + num2;
// }

// function subtract(num1, num2){
//   return num1 - num2;
// }

// function multiply(num1, num2){
//   return num1 * num2;
// }

// let product = calculator(5, 7, subtract);

// console.log(product)

const cityData = [
  { city: 'Seattle', state: 'WA', population: 652405, land_area: 83.9 },
  { city: 'New york', state: 'NY', population: 8405837, land_area: 302.6 },
  { city: 'Boston', state: 'MA', population: 645966, land_area: 48.3 },
  { city: 'Kansas city', state: 'MO', population: 467007, land_area: 315 }
]

function bigPop(cityObj) {}

// let newArr = []

// for(let i = 0; i < cityData.length; i++){
//   if(bigPop(cityData[i])){
//       newArr.push(cityData[i])
//   }
// }

// cityData.forEach(printName)
// let newArr = cityData.filter(bigPop)
const nums = [1, 2, 3, 4]

function reduceCallback(currentValue, item) {
  console.log('Current Value', currentValue)
  console.log('ITEM:', item)
  return currentValue + item
}

let sum = nums.reduce(reduceCallback)

console.log(sum)
