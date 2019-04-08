var metaModel = require('../db/model/meta')

module.exports = function(app){     

    app.get('/',function(req,res){
        res.send('Hello,here is /')
    });

    //获取数据
    app.get('/meta',function(req,res,next){
        metaModel.find({}).exec((err,itemList)=>{
            if(err){
                console.log(err);
            }else{
                res.json(itemList);
            }
        })
    });
}