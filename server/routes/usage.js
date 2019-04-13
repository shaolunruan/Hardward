var usageModel = require('../db/model/usage')

//calendar图的数据接口=>usage

module.exports = function(req,res,next){

    var reqId = 'm_1933';
    var reqTime = 160000;

    // (usageModel.find({'time_stamp':520})).find({'machine_id':'m_1933'})
    usageModel
    //这种查询方式过慢，后期可以优化
    .where('machine_id').equals(reqId)
    .where('time_stamp').lte(140000)
    .select(['machine_id','time_stamp','cpu_util_percent','mem_util_percent','disk_io_percent'])
    .sort({'time_stamp' : -1})
    .limit(366)
    .then(result=>{
        res.json(result)
    })
};