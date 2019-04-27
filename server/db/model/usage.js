const mongoose = require('../db.js')


// 定义集合的映射

let usageSchema = mongoose.Schema({

    machine_id: {

        type: String,
        default: 'None'

    },
    time_stamp: {

        type: Number,
        default: 0

    },
    cpu_util_percent: {

        type: Number,
        default: 0

    },
    mem_util_percent: {

        type: Number,
        default: 0

    },
    mem_gps: {

        type: Number,
        default: 0

    },
    mpki: {

        type: Number,
        default: 0

    },
    net_in: {

        type: Number,
        default: 0

    },
    net_out: {

        type: Number,
        default: 0

    },
    disk_io_percent: {

        type: Number,
        default: 0

    },
    warning:Number

},{versionKey:false})

// 定义model操作数据库

module.exports = mongoose.model('usage',usageSchema,'usageDay2');