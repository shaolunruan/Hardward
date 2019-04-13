var resultModel = require('../db/model/result')

module.exports = function(req,res,next){
    resultModel
    .where('end_time').gt(100120)
    .in('inst_name','task_name')
    .then(result=>{
        res.json(result)
    })
};