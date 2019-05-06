const usageModel = require('../db/model/usage')
//用meta数据做测试
// var meta = require('../db/model/meta')
// 总视图 折线图 的数据接口 不需要传入任何参数 第一个呈现的视图

module.exports = function(req,res,next){

    usageModel
    .aggregate([
        {$match:{warning:{$eq:1}}},
        {$limit:10000000},
        {$group:{_id:'$time_stamp',warning:{$sum:1}}},
        {$sort:{'_id':1}}
    ])
    .then(d=>{
        res.json(d)
    })
}