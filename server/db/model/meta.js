const mongoose = require('../db.js')


// 定义集合的映射

let metaSchema = mongoose.Schema({

    machine_id: {

        type: String,
        default: 'None'

    },
    time_stamp: {

        type: Number,
        default: 0

    },
    disaster_level_1: {

        type: Number,
        default: 0

    },
    disaster_level_2: {

        type: Number,
        default: 0

    },
    cpu_num: {

        type: Number,
        default: 0

    },
    mem_size: {

        type: Number,
        default: 0

    },
    status: {

        type: String,
        default: 'None'

    }

},{versionKey:false})

// 定义model操作数据库

module.exports = mongoose.model('meta',metaSchema,'machine_meta');