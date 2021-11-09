# 脚手架



## 1、认识脚手架

脚手架本质上是一个操作系统的客户端，可以通过命令执行。这里以 vue-cli 为例，比如创建 vue 项目的脚手架命令：

```bash
vue create vue-test
```

这条命令由三部分组成：

- vue：主命令
- create：command
- vue-test：command 的参数

代表创建一个 vue 项目，项目名称为 vue-test



上面是一条最基本的脚手架命令，实际上还会有各种更加复杂的场景，比如：当前目录已经存在同名项目，需要覆盖操作，那么可以执行：

```bash
vue create vue-test --force
```

`--force` 是 option，即配置项。而 `--force` 也可以简写成 `-f`，更多的 option 可以通过命令 `vue create --help` 来查看



除了上面的识别命令行参数之外，还有很多其他的功能，比如创建完项目之后，自动执行 `install`，安装完依赖之后，自动启动项目等







