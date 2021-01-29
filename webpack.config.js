//开发版本配置文件
//开发版本运行方式 npm run dev
const path = require('path')
    //复制index.html到首页
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    //编译模式
    mode: 'development', //development production
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'), //输出文件的存放路径
        filename: 'bundle.js' //输出文件的名称
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [ 
            {
                test: /\.css$/, 
                // use: ['style-loader', { loader: 'css-loader',options: {modules: { localIdentName: '[path][name]-[local]-[hash:5]'}}}]   //css模块化
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader',  { loader: 'css-loader',options: {modules: { localIdentName: '[path][name]-[local]-[hash:5]'}}}, 'sass-loader']
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: 'url-loader' //'url-loader?limit=16940'
            },
            {
                test: /\.jsx?$/,
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