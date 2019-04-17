var metaModel = require('../db/model/meta');
var usageModel = require('../db/model/usage');
var resultModel = require('../db/model/result');

var result = require('../db/model/result')


module.exports = function(app){     

    app.get('/',function(req,res){
        res.send('Hello,here is /')
    });


    app.get('/meta',function(req,res){
        metaModel.find({}).exec((err,metaList)=>{
            if(err){
                console.log(err);
            }else{
                res.json(metaList);
            }
        })
    });


    //获取usage数据
    app.get('/usage',require('./usage'))

    //获取result数据
    app.get('/result',require('./result'));
}