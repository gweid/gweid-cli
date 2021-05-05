#! /usr/bin/env node
const { program } = require('commander')

const { helpOptions } = require('./lib/core/help')
const { createCommands } = require('./lib/core/command')

// 使用 program.version 定义版本
program.version(require('./package.json').version)

// 给 help 增加一些其他选项
helpOptions()

// 创建指令
createCommands()

// 使用 program.parse 解析传进来的参数，比如 gcli --version，后面的 --version 就是参数
// process.argv 获取的就是传进来的参数
program.parse(process.argv)
