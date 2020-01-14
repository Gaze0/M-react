const { 
    override, 
    fixBabelImports,
    addWebpackAlias,
    addDecoratorsLegacy,
    enableEslintTypescript,
    // setWebpackPublicPath
} = require('customize-cra');

const path = require('path')
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    // setWebpackPublicPath 配置js，css  build之后的绝对路径
    addWebpackAlias({
        ["assets"]:path.resolve(__dirname,'./src/assets'),
        ["utils"]:path.resolve(__dirname,'./src/utils'),
        ["pages"]:path.resolve(__dirname,'./src/pages'),
        ["@"]:path.resolve(__dirname,'./src/components'),
    }),
    enableEslintTypescript(['.ts', '.tsx', '.js', 'config.js', '.json']),
    addDecoratorsLegacy(),
    // setWebpackPublicPath('http://182.92.79.87/zhungchu/')
);