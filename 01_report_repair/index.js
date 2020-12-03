
// 01

const arr = [] // the given input set

let result
const TARGET = 2020

for (let i = 0; i < arr.length && !result; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === TARGET) {
      result = arr[i] * arr[j]
      break
    }
  }
}

console.log(result)

/////////////////////////////////////

// 02

const arr = [] // the given input set

let result
const TARGET = 2020

for (let i = 0; i < arr.length && !result; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      if (arr[i] + arr[j] + arr[k] === TARGET) {
        result = arr[i] * arr[j] * arr[k]
        break
      }
    }
  }
}

console.log(result)
