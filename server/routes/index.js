const metaModel = require('../db/model/meta');
const usageModel = require('../db/model/usage');
const resultModel = require('../db/model/result');

const result = require('../db/model/result')


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
        // console.log(req.query);

 
    });

    //获取lineView的数据

    app.get('/view',require('./lineView'));

    //获取usage数据
    app.get('/usage',require('./usage'))

    //获取result数据
    app.get('/result',require('./result'));

    //获取直方图单个节点数据
    app.get('/histGraph',require('./histGraph'));

}