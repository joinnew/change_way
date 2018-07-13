const readline = require('readline');  //命令行的读取，cli工具常用


// 创建接口,process进程模块process.env   stdin输入

// readline 在哪里？
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 询问一个问题后，进程会等待在那里， %s占位符
rl.question('please input a word:', function (answer) {
  console.log('Your has entered [%s]', answer.toUpperCase())
  // 让其处于一直等待输入的状态，是异步的，关闭须在里边
  rl.close()
})
