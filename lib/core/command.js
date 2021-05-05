const { program } = require('commander')

const { createProjectAction } = require('./actions')

const createCommands = () => {
  program
    .command('create <project> [others...]') // 创建一个 create 指令
    .description('clone a repository into a newly created directory') // 描述指令功能
    .action(createProjectAction)
}

module.exports = {
  createCommands
}