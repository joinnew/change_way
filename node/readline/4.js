// const readline = require('readline')

// let questionArr = ['项目的名字是什么?', '项目的结构是什么?', '项目的版本是什么?'];

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: '>'
// })
// let index = 0;
// let len = questionArr.length;

// 对于原生的函数，尤其是带有回调的，递归调用这个函数，是不可能的。我们可以将其封装到一个函数中,别忘了在外面调用这个函数

//   function quest() {
//     rl.question(questionArr[index], (answer) => {
//     if (index <= len) {
//       index++;
//       console.log(questionArr + '问题的回答是: '+ answer)
//       // rl.question(questionArr[index])
//       quest()
//     } else {
//       rl.close()
//      return}
//   })
// }

const readline = require('readline')
const fs = require('fs')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI>'
})

const preHint = `
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
`

console.log(preHint)

let index = 0
const questions = ['name', 'version', 'author']
const defaultAnswers = ['name', '1.0.0', 'none']
const answers = []

function createPackageJSON() {
  // JSON 你想怎么写？
  var map = {};
  questions.forEach((question, index) => {
    map[question] = answers[index];
  })

  fs.writeFileSync('./package.json', JSON.stringify(map, null, 4))
}
function runQuestionLoop() {
  if (index === questions.length) {
    createPackageJSON() 
    rl.close()
    console.log(answers)
    return
  }
  let defaultAnswer = defaultAnswers[index]
  let question = questions[index] + ':(' + defaultAnswer + ')'
  rl.question(question, function(answer) {
    answers.push(answer || defaultAnswer)
    index++
    runQuestionLoop()
  })
}



runQuestionLoop()
