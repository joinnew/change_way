// 按照文件引入的顺序(其他文件)进行打包  文件顺序性，文件依赖
require('./styles/normalize')
require('./styles/index')
require('./style.less')

const format = require('utils/format')
const { log } = require('./utils')

log(_.map([1, 2, 3], (item) => item *2 ))
log(format('hello world'))