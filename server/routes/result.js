var resultModel = require('../db/model/result')

function test(req,res,next){
    (resultModel.find({'start_time':{$lt:100120}})).find({'end_time':{$gt:100120}})
    .then(result=>{
        res.json(result)
    })
}

module.exports = test;