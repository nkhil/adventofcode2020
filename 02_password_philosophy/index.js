// 01

const arr = [] // the given input set

function processRule(rule) {
  const [times, alphabet] = rule.split(' ')
  return [times, alphabet]
}

const result = arr.map(str => {
  const [rule, password] = str.split(':')
  const [times, alphabet] = processRule(rule)
  const count = password.trim().split('').reduce((acc, val) => {
    if (val.toLowerCase() === alphabet) {
      acc += 1
    }
    return acc
  }, 0)
  const [lowerLimit, upperLimit] = times.split('-')
  if (count >= lowerLimit && count <= upperLimit) {
    return password.trim()
  }
})

const actual = result.filter(Boolean)

console.log(actual.length)

/////////////////////////////////////////////////////////

// 02

const arr = [] // the given input set

function processRule(rule) {
  const [times, alphabet] = rule.split(' ')
  return [times, alphabet]
}

function checkIfCharAtIndex(string, index, alphabet) {
  return string.trim().charAt(Number(index)) === alphabet
}

const result = arr.map(str => {
  const [rule, password] = str.split(':')
  const [times, alphabet] = processRule(rule)
  const [firstPosition, secondPosition] = times.split('-')
  const firstCheck = checkIfCharAtIndex(password, Number(firstPosition) - 1, alphabet)
  const secondCheck = checkIfCharAtIndex(password, Number(secondPosition) - 1, alphabet)
  if ((firstCheck && !secondCheck) || (!firstCheck && secondCheck)) {
    return password.trim()
  }
})

const actual = result.filter(Boolean)

console.log(actual.length)
