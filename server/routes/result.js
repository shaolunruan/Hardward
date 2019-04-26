var resultModel = require('../db/model/result');

//用来画主View视图的数据
module.exports = function(req,res,next){


//应该使用管道聚合aggregate，把出现次数少的值给删去

//现在需要进行表的关联查询，用populate来进行查询

//又想直接update result表里面的数据，关联查询绝对不会这么蠢。。再议

let req_time = Number(req.query.name)

    resultModel
    .where('start_time').lt(req_time)
    .where('end_time').gt(req_time)
    .limit(100)//最后记得删去
    .select(['inst_name','task_name','job_name','task_type','status','start_time','end_time','machine_id','util_cpu','util_mem'])
    .then(result=>{
        res.json(result)

    })

}

