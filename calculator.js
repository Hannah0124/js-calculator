const prompt = require('prompt');
const operators = ['1. add(+)', '2. subtract(-)', '3. multiply(*)', '4. divide(/)', '5. exponent(^)', '6. modulo(%)']
 

const greeting = function() {
  console.log('======================================')
  console.log('Welcome come to the Ada Calculator! 🔢')
  console.log('We have the following operators.')
  console.log('======================================')

  for(let operator of operators) {
    console.log(operator);
  }
  console.log('\n')
}


const userInput = function(error, promptInput) {
  try {
    console.log('============================')
    console.log(`result: ${calculator(promptInput)}`);
    console.log('============================')

  } catch(error) {
    console.error(error);
  }
}

// // TODO => How do I add this function?
// const playAgainInput = function(error, input) {
//   while (input.playAgain === 'yes' || input.playAgain === 'y') {
//     prompt.get(['num1', 'num2', 'operation'], iput);
//   }
//   input.playAgain = 'no';
// }


greeting();

prompt.start();
prompt.get(['num1', 'num2', 'operation'], userInput);


// // TODO => How do I use '.get' properly?
// prompt.get(['Would you like to calculate?'], playAgainInput);



// ============


const inputExamples = [
  // addition example
  {
    num1: 3,
    num2: 5,
    operation: 'add'
  },
  {
    num1: 3,
    num2: 5,
    operation: '+',
  },
  // subtraction example
  {
    num1: 3,
    num2: 5,
    operation: 'subtract',
  },
  {
    num1: 3,
    num2: 5,
    operation: '-',
  },
  // multiplicaiton example
  {
    num1: 20,
    num2: 5,
    operation: 'multiply',
  },
  {
    num1: 20,
    num2: 5,
    operation: '*',
  },
  // division example
  {
    num1: 10.5,
    num2: 5,
    operation: 'divide',
  },
  {
    num1: 10.5,
    num2: 5,
    operation: '/',
  },
  {
    num1: 7,
    num2: 0,
    operation: '/',
  },
  // exponent example
  {
    num1: 2,
    num2: 4,
    operation: 'exponent',
  },
  {
    num1: 2,
    num2: 4,
    operation: '^',
  },
  {
    num1: 2,
    num2: 4,
    operation: '**',
  },
  // modulo example
  {
    num1: 100,
    num2: 9,
    operation: 'modulo',
  },
  {
    num1: 100,
    num2: 9,
    operation: '%',
  },
  // wrong input example
  {
    num1: 9,
    num2: 111,
    operation: 'wrong',
  },
  {
    num1: "",
    num2: 12,
    operation: '+',
  }
]

function calculator(input) {
  validateNumbers(input);
  validateOperator(input);
  input.playAgain = 'yes';
  // let result = null;

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
      throw '\n⚠️  Invalid operator!';
  }

  printFormula(input);
  return input.result;
}

function validateNumbers(input) {
  input.num1 = parseFloat(input.num1) 
  input.num2 = parseFloat(input.num2)

  if (input.num1 === NaN || input.num2 === NaN) {
    console.log(`\n❗️  This is a ${input.num1 == NaN ? input.num1 : input.num2 }. You can only calculate numbers`)
  }
}

function validateOperator(input) {
  input.operation = input.operation.toLowerCase();
}

function printFormula(input) {
  console.log(`Formula: ${input.num1} ${input.operation} ${input.num2} = ${input.result}`)
}

function add(input) {
  input.operation = "+"
  return input.num1 + input.num2;
}

function subtract(input) {
  input.operation = "-"
  return input.num1 - input.num2;
}

function multiply(input) {
  input.operation = "*"
  return input.num1 * input.num2;
}

function divide(input) {
  input.operation = "/"
  if (input.num2 === 0) {
    console.log('\n❗️  You cannot divide number by 0')
  }
  return input.num1 / input.num2;
}

function exponent(input) {
  input.operation = "**"
  return input.num1 ** input.num2;
}

function modulo(input) {
  input.operation = "%"
  return input.num1 % input.num2;
}




// function printResult(inputExamples) {
//   for(let example of inputExamples) {
//     try {
//       console.log(`\'${example.operation}\' operator: ${calculator(example)}\n`);
//     } catch(e) {
//       console.error(e);
//     }
//   }
// }


// printResult(inputExamples);