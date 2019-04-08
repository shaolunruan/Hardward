const webpack = require('webpack')
//导入安装的html-webapack
const path = require('path')
// const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry:path.join(
        __dirname,'./src/main.js'
    ),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },  
    module:{  
        rules:[  
            {  
                test:/\.vue$/,  
                loader:'vue-loader'  
            },  
            {  
                test:/\.js$/,   
                loader:'babel-loader',    
                exclude:/node_modules/,   
                query:{  
                    presets: ['es2015'],  
                    plugins:['transform-runtime']  
                }  
            }  
        ]  
    }  
    // devServer:{//\这是dev-server命令参数的第二种形式
    // // --open --port 3000 --contentBase src --hot
    // open:true,//自动打开浏览器
    // port:3000,//
    // contentBase:'src',
    // hot:true//热更新第一步
    // },


    // plugins:[

    //     // new webpack.HotModuleReplacementPlugin()
    //     // //启用热更新的第三步 
    // new htmlWebpackPlugin({
    //     template:path.join(__dirname,'./src/index.html'),
    //     //指定模板页面，以后会在 内存 中生成页面
    //     filename:'index.html'
    // })
    // ],
}

