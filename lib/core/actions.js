const { promisify } = require('util')

// 因为 download-git-repo 不支持 promise
// 所以使用 node 内置模块 util 的 promisify 函数将 download-git-repo 转为 promise 形式
// promisify 的原理很简单，就是给 download-git-repo 包一层 promise
const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo-config')
const { spawnCommand } = require('../utils/terminal')

// 创建项目
const createProjectAction = async (project, others) => {
  console.log('开始下载模板...')

  // 1. 将项目模板 clone 下来
  //    download 参数1：项目模板的仓库地址  参数2：下载下来后需要放到哪个位置 
  //             clone: true 代表使用 clone 方式将项目 download 下来
  await download(vueRepo, project, { clone: true })

  console.log('模板下载完成，开始 npm install...');

  // 2. 执行 npm install
  // 需要判断一下平台，window 执行 npm 命令实际执行的 npm.cmd
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await spawnCommand(command, ['install'], { cwd: `./${project}`})

}

module.exports = {
  createProjectAction
}