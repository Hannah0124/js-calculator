const prompt = require('prompt');
const operators = ['1. add(+)', '2. subtract(-)', '3. multiply(*)', '4. divide(/)', '5. exponent(^)', '6. modulo(%)']


const greeting = function() {
  console.log('======================================')
  console.log('Welcome come to the Ada Calculator! 🔢')
  console.log('We have the following operators.')
  console.log('======================================')

  for (const operator of operators) {
    console.log(operator);
  }
  console.log('\n')
}

const userInput = function(error, promptInput) {
  console.log('----------------------------')
  console.log(`result: ${calculator(promptInput)}`);
  console.log('----------------------------')
}

function calculator(input) {
  validateNumbers(input);
  validateOperator(input);

  switch (input.operation) {
    case 'add':
    case '+':
      input.result = add(input)
      break;
    case 'subtract':
    case '-':
      input.result = subtract(input)
      break;
    case 'multiply':
    case '*':
      input.result = multiply(input)
      break;
    case 'divide':
    case '/':
      input.result = divide(input)
      break;
    case 'exponent':
    case '^':
    case '**':
      input.result = exponent(input)
      break;
    case 'modulo':
    case '%':
      input.result = modulo(input)
      break;
    default:
        console.log('⚠️  Invalid operator!\n');
  }

  printFormula(input);
  return input.result;
}

const validateNumbers = function(input) {
  input.num1 = parseFloat(input.num1)
  input.num2 = parseFloat(input.num2)

  if ((input.num1 !== 0 && !input.num1) || (input.num2 !== 0 && !input.num2)) {
    console.log(`❗️${!input.num1 ? "\'num1\'" : "\'num2\'" } is a NaN. You can only calculate numbers.\n`)
  }
}

const validateOperator = function(input) {
  input.operation = input.operation.toLowerCase();
}

const printFormula = function(input) {
  console.log(`Formula: ${input.num1} ${input.operation} ${input.num2} = ${input.result}`)
}

const add = function(input) {
  input.operation = "+"
  return input.num1 + input.num2;
}

const subtract = function(input) {
  input.operation = "-"
  return input.num1 - input.num2;
}

const multiply = function(input) {
  input.operation = "*"
  return input.num1 * input.num2;
}

const divide = function(input) {
  input.operation = "/"
  if (input.num2 === 0) {
    console.log('\n❗️You cannot divide number by 0')
  }
  return input.num1 / input.num2;
}

const exponent = function(input) {
  input.operation = "**"
  return input.num1 ** input.num2;
}

const modulo = function(input) {
  input.operation = "%"
  return input.num1 % input.num2;
}

const main = function() {
  greeting();
  prompt.start();
  prompt.get(['num1', 'num2', 'operation'], userInput);
}

main();




