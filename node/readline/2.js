// 用途：将访问日志中的时间和访问地址分离输出

const readline = require('readline')
const fs = require('fs')

const fReadName = './access.log';

var rRead = fs.createReadStream(fReadName);

// output会把input的内容输出，也就是文件的整个内容，按行输出,这里我们自行设置,但在question中，不会把input内容再输出
var rl = readline.createInterface({
  input: rRead
})

// 事件： '线' 逐行读取在 input 流接受了一个 \n 时触发，通常在用户敲击回车或者返回时接收。 这是一个监听用户输入的利器。
rl.on('line', (line) => {
  const arr = line.split(' ');
  console.log('访问时间： %s %s, 访问地址: %s', arr[0],arr[1], arr[13])
})

rl.on('close', () => {
  console.log('readline close ...')
})