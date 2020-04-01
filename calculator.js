const prompt = require('prompt');
const operators = ['1. add(+)', '2. subtract(-)', '3. multiply(*)', '4. divide(/)', '5. exponent(^)', '6. modulo(%)']

const greeting = function() {
  console.log('======================================');
  console.log('Welcome to the Ada Calculator! 🔢');
  console.log('We have the following operators:');
  console.log('======================================');

  operators.forEach(operator => console.log(operator));

  console.log('\n')
};

const userInput = function(error, promptInput) {
  console.log('----------------------------');
  console.log(`  - result: ${calculator(promptInput)}`);
  console.log('----------------------------');
};

const calculator = function(input) {
  validateNumbers(input);
  validateOperator(input);

  switch (input.operation) {
    case 'add':
    case '+':
      input.result = add(input);
      break;
    case 'subtract':
    case '-':
      input.result = subtract(input);
      break;
    case 'multiply':
    case '*':
      input.result = multiply(input);
      break;
    case 'divide':
    case '/':
      input.result = divide(input);
      break;
    case 'exponent':
    case '^':
    case '**':
      input.result = exponent(input);
      break;
    case 'modulo':
    case '%':
      input.result = modulo(input);
      break;
    default:
        console.log('❗️Invalid operator!\n');
  };

  printFormula(input);
  return input.result;
};

const validateNumbers = function(input) {
  input.num1 = parseFloat(input.num1);
  input.num2 = parseFloat(input.num2);

  if ((input.num1 !== 0 && !input.num1) || (input.num2 !== 0 && !input.num2)) {
    console.log(`❗️${!input.num1 ? "\'num1\'" : "\'num2\'" } is a NaN. You can only calculate numbers.\n`)
  }
};


// practice arrow functions
const validateOperator = (input) => input.operation = input.operation.toLowerCase();

const printFormula = (input) => console.log(`  - Formula: ${input.num1} ${input.operation} ${input.num2} = ${input.result}`);

const add = (input) => {
  input.operation = "+";
  return input.num1 + input.num2;
};

const subtract = (input) => {
  input.operation = "-";
  return input.num1 - input.num2;
};

const multiply = (input) => {
  input.operation = "*";
  return input.num1 * input.num2;
};

const divide = (input) => {
  input.operation = "/";
  if (input.num2 === 0) {
    console.log('\n❗️You cannot divide a number by 0')
  }
  return input.num1 / input.num2;
};

const exponent = (input) => {
  input.operation = "**";
  return input.num1 ** input.num2;
};

const modulo = (input) => {
  input.operation = "%";
  return input.num1 % input.num2;
};

const main = () => {
  greeting();
  prompt.start();
  prompt.get(['num1', 'num2', 'operation'], userInput);
};

main();



// // ==============================
// // hard coding version 
// // instruction: In order to check this version, please comment the code above.
// // =============================
// const inputExamples = [
//   // addition example
//   {
//     num1: 3,
//     num2: 5,
//     operation: 'add'
//   },
//   {
//     num1: 3,
//     num2: 5,
//     operation: '+',
//   },
//   // subtraction example
//   {
//     num1: 3,
//     num2: 5,
//     operation: 'subtract',
//   },
//   {
//     num1: 3,
//     num2: 5,
//     operation: '-',
//   },
//   // multiplicaiton example
//   {
//     num1: 20,
//     num2: 5,
//     operation: 'multiply',
//   },
//   {
//     num1: 20,
//     num2: 5,
//     operation: '*',
//   },
//   // division example
//   {
//     num1: 10.5,
//     num2: 5,
//     operation: 'divide',
//   },
//   {
//     num1: 10.5,
//     num2: 5,
//     operation: '/',
//   },
//   {
//     num1: 7,
//     num2: 0,
//     operation: '/',
//   },
//   // exponent example
//   {
//     num1: 2,
//     num2: 4,
//     operation: 'exponent',
//   },
//   {
//     num1: 2,
//     num2: 4,
//     operation: '^',
//   },
//   {
//     num1: 2,
//     num2: 4,
//     operation: '**',
//   },
//   // modulo example
//   {
//     num1: 100,
//     num2: 9,
//     operation: 'modulo',
//   },
//   {
//     num1: 100,
//     num2: 9,
//     operation: '%',
//   },
//   // wrong input example
//   {
//     num1: "",
//     num2: 12,
//     operation: '+',
//   },
//   {
//     num1: 9,
//     num2: 111,
//     operation: 'wrong',
//   }
// ];

// function calculator(input) {
//   validateNumbers(input);
//   validateOperator(input);

//   switch (input.operation) {
//     case 'add':
//     case '+':
//       input.result = add(input);
//       break;
//     case 'subtract':
//     case '-':
//       input.result = subtract(input);
//       break;
//     case 'multiply':
//     case '*':
//       input.result = multiply(input);
//       break;
//     case 'divide':
//     case '/':
//       input.result = divide(input);
//       break;
//     case 'exponent':
//     case '^':
//     case '**':
//       input.result = exponent(input);
//       break;
//     case 'modulo':
//     case '%':
//       input.result = modulo(input);
//       break;
//     default:
//       throw '  ❗️  Invalid operator!\n';
//     };

//     printFormula(input);
//     return input.result;
// };


// const validateNumbers = function(input) {
//   input.num1 = parseFloat(input.num1);
//   input.num2 = parseFloat(input.num2);

//   if ((input.num1 !== 0 && !input.num1) || (input.num2 !== 0 && !input.num2)) {
//     console.log(`  ❗️${!input.num1 ? "\'num1\'" : "\'num2\'" } is a NaN. You can only calculate numbers.\n`)
//   };
// };

// const validateOperator = function(input) {
//   input.operation = input.operation.toLowerCase();
// };

// const printFormula = function(input) {
//   console.log(`  - Formula: ${input.num1} ${input.operation} ${input.num2} = ${input.result}`)
// };

// // practice arrow functions
// const add = (input) => {
//   input.operation = "+"
//   return input.num1 + input.num2;
// };

// const subtract = (input) => {
//   input.operation = "-"
//   return input.num1 - input.num2;
// };

// const multiply = (input) => {
//   input.operation = "*"
//   return input.num1 * input.num2;
// };

// const divide = (input) => {
//   input.operation = "/"
//   if (input.num2 === 0) {
//     console.log('  ❗️You cannot divide number by 0\n')
//   }
//   return input.num1 / input.num2;
// };

// const exponent = (input) => {
//   input.operation = "**"
//   return input.num1 ** input.num2;
// };

// const modulo = function(input) {
//   input.operation = "%"
//   return input.num1 % input.num2;
// };


// const printResult = function(inputExamples) {
//   inputExamples.forEach(example => {
//     try {
//       console.log(`\'${example.operation}\' operator:`);
//       console.log(`  - Result: ${(calculator(example))}`);
//       console.log('-----------------------------')
//     } catch (e) {
//       console.error(e);
//     };
//   });
// };

// printResult(inputExamples);