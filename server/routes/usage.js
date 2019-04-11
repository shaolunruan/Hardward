var usageModel = require('../db/model/usage')

function test(req,res,next){
    // (usageModel.find({'time_stamp':520})).find({'machine_id':'m_1933'})
    usageModel
    //这种查询方式过慢，后期可以优化
    .where('time_stamp').equals(70000)
    .then(result=>{
        res.json(result)
    })
}

module.exports = test;