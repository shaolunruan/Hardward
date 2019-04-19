var resultModel = require('../db/model/result');
var usageModel = require('../db/model/usage')

//用来画主View视图的数据
module.exports = function(req,res,next){

req_time= 168580;

//应该使用管道聚合aggregate，把出现次数少的值给删去

//现在需要进行表的关联查询，用populate来进行查询

//又想直接update result表里面的数据，关联查询绝对不会这么蠢。。再议

    resultModel
.where('start_time').lt(req_time)
.where('end_time').gt(req_time)
    .select(['inst_name','task_name','job_name','task_type','status','start_time','end_time','machine_id','util_cpu','util_mem'])
    .then(result=>{
        //res.json(result)
        var machine = new Array();
        for(let i = 0;i<result.length;i++){
            machine.push(result[i].machine_id)
        }

        var valueCpu = new Array();
        var valueMem = new Array();
        var valueDisk = new Array();

        usageModel
        .where('time_stamp').equals(req_time)
        .then(d=>{
            for(let i = 0;i<machine.length;i++){
                for(let j = 0;j<d.length;j++){
                    if(machine[i] == d[j].time_stamp){
                        valueCpu.push(d[j].cpu_util_percent);
                        valueMem.push(d[j].mem_util_percent);
                        valueDisk.push(d[j].disk_io_percent);
                    }
                }

                resultModel.update({machine_id:machine[i]},{
                    util_cpu:valueCpu[i],
                    util_mem:valueMem[i],
                    util_disk:valueDisk[i]
                })
            };
            

            res.json(result)
        })

    })







//     resultModel
//     .aggregate([
// {
//     $lookup:{
//         from:"usageDay2",
//         localField:'machine_id',
//         foreignField:'machine_id',
//         as:'value'
//     }
// },
// {
//     $match:{'start_time':{$lt:req_time},
//         'end_time':{$gt:req_time},
//         'value.time_stamp':req_time//重点，然而运行太久，崩掉了
//     }

// }
//     ],function(err,docs){
//         if(err) return err;
//         else console.log(docs);
//     })
//     // .where('start_time').lt(req_time)
//     // .where('end_time').gt(req_time)
//     // .select(['inst_name','task_name','job_name','task_type','status','start_time','end_time','machine_id'])
//     .then(result=>{
//         res.json(result)
//     })
};