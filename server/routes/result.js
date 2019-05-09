const resultModel = require('../db/model/result');
const usageModel = require('../db/model/usage')

//用来画主View视图的数据
module.exports = function (req, res, next) {


    //应该使用管道聚合aggregate，把出现次数少的值给删去

    //现在需要进行表的关联查询，用populate来进行查询

    //又想直接update result表里面的数据，关联查询绝对不会这么蠢。。再议

    let req_time = Number(req.query.name)//先换成人工数据，后面记得管回来
    // let req_time = 140000

    let o = new Object()
    let warningId = new Array();
    resultModel
        .where('start_time').lt(req_time)
        .where('end_time').gt(req_time)
        // .limit(100)//最后记得删去
        .select(['inst_name', 'task_name', 'job_name', 'task_type', 'status', 'start_time', 'end_time', 'machine_id', 'util_cpu', 'util_mem'])
        .then(result => {
            o.result = result
            // res.json(result)



            //以下获取所有machine编号数组
            for (let i in result) {
                let a = new Array();
                a.push(result[i].machine_id)
                a.push(result[i].inst_name)
                warningId.push(a)
            };

            //promiss


            usageModel
                .where('time_stamp').equals(req_time)
                .then(response => {

                    let warningArray = new Array();
                    for (let i in warningId) {
                        for (let j in response) {
                            if (warningId[i][0] == response[j].machine_id) {
                                let obj = new Object();
                                obj.inst_id = warningId[i][1];
                                obj.warning = response[j].warning;
                                warningArray.push(obj)
                                break
                            }
                        }
                    }
                    console.log(warningArray);
                    o.warningArray = warningArray;
                    res.json(o);
                })


        })

}

