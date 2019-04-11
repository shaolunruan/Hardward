var resultModel = require('../db/model/result')

function test(req,res,next){
    (resultModel.find({'start_time':{$lt:82000}})).find({'end_time':{$gt:82000}})
    .then(result=>{
        res.json(result)
    })
}

module.exports = test;