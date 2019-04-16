var resultModel = require('../db/model/result')

//用来画主View视图的数据
module.exports = function(req,res,next){

//测试该时刻的job簇
// 1	j_1648770	687
// 2	j_155296	151
// 3	j_3351818	141
// 4	j_275557	101
// 5	j_1764770	33
// 6	j_3834827	11
// 7	j_858070	2
// 8	j_2280250	1
// 9	j_2653732	1
// 10	j_770612	1

req_time= 165910;

//应该使用管道聚合aggregate，把出现次数少的值给删去

    resultModel
    .where('start_time').lt(req_time)
    .where('end_time').gt(req_time)
    // .select(['inst_name','task_name','job_name','task_type','status','start_time','end_time','machine_id'])
    .then(result=>{
        res.json(result)
    })
};