//发布版本配置文件
//发布版本运行方式 npm run pub
const path = require('path')
    //复制index.html到首页
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    minify: {
        collapseWhitespace: true, //合并多余的空格
        removeComments: true, //移除注释
        removeAttributeQuotes: true, //移除属性上的双引号
    }
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//导入每次删除文件夹的插件
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
    //导入抽取css的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
    //导入压缩css的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    //编译模式
    mode: 'development', //development production
    entry: { //配置入口节点
        app: path.join(__dirname, './src/main.js'),
        vendors: ['jquery', 'vue'] //把要抽离的第三方包的名称放到这个数组中
    },
    output: {
        path: path.join(__dirname, './dist'), //输出文件的存放路径
        filename: 'bundle.js' //输出文件的名称
    },
    plugins: [htmlPlugin, new VueLoaderPlugin(),
        new cleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', //指定要抽离的入口名称
            filename: 'vendors.js' //将来发布的时候除了会有bundle.js, 还会多一个vendors.js文件，里面存放的都是第三方包
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { //配置压缩选项
                warnings: false //移除警告
            }
        }),
        new webpack.optimize.DedupePlugin({ //设置为产品上线环境，进一步压缩js代码
            'process.env.NODE_ENV': 'production'
        }),
        new ExtractTextPlugin("css/1.css"), //抽取css文件
        new OptimizeCssAssetsPlugin, //压缩css的插件
    ],
    module: {
        rules: [

            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader', 'postcss-loader']
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    // publicPath: '../' //指定抽取的时候自动为路径加上../前缀
                })
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: 'url-loader?limit=16940&name=imgs/[hash:8]-[name].[ext]'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
        ]

    }
}