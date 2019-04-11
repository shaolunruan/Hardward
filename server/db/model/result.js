var mongoose = require('../db')

var resultSchema = mongoose.Schema({
    inst_name:String,
    task_name:String,
    job_name:String,
    task_type:String,
    status:String,
    start_time:Number,
    end_time:Number,
    machine_id:String,
    seq_no:Number,
    total_seq_no:Number,
    cpu_avgc:Number,
    cpu_avg:Number,
    mem_avg:Number,
    mem_max:Number

})

module.exports = mongoose.model('result',resultSchema,'resultDay1')