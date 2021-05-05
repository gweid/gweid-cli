const { promisify } = require('util')

// 因为 download-git-repo 不支持 promise
// 所以使用 node 内置模块 util 的 promisify 函数将 download-git-repo 转为 promise 形式
// promisify 的原理很简单，就是给 download-git-repo 包一层 promise
const download = promisify(require('download-git-repo'))

// 创建项目
const createProjectAction = async (project, others) => {
  // 1. 将项目模板 clone 下来
  await download()

  // 2. 执行 npm install
}

module.exports = {
  createProjectAction
}