/*
 * @Description: 利用Babel输出es模块
 * @Author: TangXiaozhuo
 * @Date: 2019-11-18 15:19:29
 * @LastEditTime: 2020-08-13 17:00:05
 * @LastEditors: xiaozhuo
 */
/**
 * Compile components
 */
const fs = require('fs-extra')
const path = require('path')
const babel = require('@babel/core')

const esDir = path.join(__dirname, './es')
// const libDir = path.join(__dirname, '../lib')
const srcDir = path.join(__dirname, './components')

const scriptRegExp = /\.(js|ts|tsx)$/
const isDir = dir => fs.lstatSync(dir).isDirectory()
const isCode = path => !/(demo|site|docs|tests|\.md)$/.test(path)
const isScript = path => scriptRegExp.test(path)

function compile(dir) {
    const files = fs.readdirSync(dir)

    files.forEach(file => {
        const filePath = path.join(dir, file)
        // 如果是dir则递归
        if (isDir(filePath)) {
            return compile(filePath)
        }
        // 移除非必要文件
        if (!isCode(file)) {
            return fs.removeSync(filePath)
        }

        // 编译js、ts
        if (isScript(file)) {
            const { code } = babel.transformFileSync(filePath, {
                configFile: path.join(__dirname, './.babelrc')
            })
            fs.removeSync(filePath)
            fs.outputFileSync(filePath.replace(scriptRegExp, '.js'), code)
        }
    })
}

// clear dir
fs.emptyDirSync(esDir)
// fs.emptyDirSync(libDir)

// compile es dir
fs.copySync(srcDir, esDir)
compile(esDir)

// compile lib dir
// process.env.BABEL_MODULE = 'commonjs'
// fs.copySync(srcDir, libDir)
// compile(libDir)
