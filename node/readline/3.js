const readline = require ('readline')

const completer = (line) => {
  // console.log(line)
  // line是目前输入的那行东西
  const command = 'npm';
  const subCommands = ['help', 'init', 'install']
  // 小于command 时， line 是command 一部分 补全一下
  if (line.length < command.length) {
    // 当长度相等的时候，就没有补全的必要了
    return [command.indexOf(line) === 0 ? [command]: [], line]
    // 是通过返回来操作line内容
  }

  // npm + tab 三个命令都出来， 不熟练， 建议出来 
  // npm i 则出现install init 不出现help
  let hints = subCommands.filter(subCommand => {
    const lineTrippedCommand = line.replace(command, '').trim();
    return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0
  })

  // 当输入的是比如ini ，返回值一个 return 退出的是一重循环，对于if条件则不是
  if (hints.length === 1) {
    hints = hints.map(function(hit) {
      return [command, hit].join(' ')
    })
  }

  // 匹配到多个？或者没有匹配到
  return [hints.length ? hints: subCommands, line]
}

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout,
  completer: completer
})

rl.prompt ()
// 给与提示,按tab键输出提示(提示>)