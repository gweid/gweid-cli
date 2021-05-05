const { program } = require('commander')

const helpOptions = () => {
  program
  .option('-g --gweid', 'a cli tool') // 脚手架简介
  .option('-s --source <source>', 'a source folder') // 源文件
  .option('-d --dest <dest>', 'a destination folder, example: -d src/modules') // 目标文件
  .option('-f --framework <framework>', 'your framework name') // 使用的框架 [vue, react]

  // 监听 --help
  program.on('--help', () => {
    console.log('')
    console.log('usage:')
  })
}

module.exports = {
  helpOptions
}