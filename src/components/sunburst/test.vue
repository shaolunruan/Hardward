<template>
    <div>
        <div id="sunburst" style="width:1000px;height:1000px"></div>
    </div>
</template>

<script>

import linksProcess from './links.js';
import structure from './structure.js'
import * as d3 from 'd3';


    var Json = [{"_id":"5caf26c18fd84281dc58c9ed","inst_name":"ins_410080969","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168638,"machine_id":"m_3091"},{"_id":"5caf26c18fd84281dc58c9ee","inst_name":"ins_1291554720","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168637,"machine_id":"m_3609"},{"_id":"5caf26c18fd84281dc58c9f1","inst_name":"ins_1047498500","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_285"},{"_id":"5caf26c18fd84281dc58c9f3","inst_name":"ins_860621287","task_name":"M2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168581,"machine_id":"m_2691"},{"_id":"5caf26c18fd84281dc58c9f4","inst_name":"ins_612445099","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168636,"machine_id":"m_2550"},{"_id":"5caf26c18fd84281dc58c9f6","inst_name":"ins_378907376","task_name":"M2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168596,"machine_id":"m_2539"},{"_id":"5caf26c18fd84281dc58c9f8","inst_name":"ins_547595104","task_name":"M2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168614,"machine_id":"m_2294"},{"_id":"5caf26c18fd84281dc58c9fd","inst_name":"ins_572731675","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_356"},{"_id":"5caf26c18fd84281dc58c9ff","inst_name":"ins_680230393","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_2696"},{"_id":"5caf26c18fd84281dc58ca01","inst_name":"ins_1210218790","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_3977"},{"_id":"5caf26c18fd84281dc58ca03","inst_name":"ins_84687820","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_1063"},{"_id":"5caf26c18fd84281dc58ca05","inst_name":"ins_247391086","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168643,"machine_id":"m_1282"},{"_id":"5caf26c18fd84281dc58ca07","inst_name":"ins_924238118","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_1396"},{"_id":"5caf26c18fd84281dc58ca0a","inst_name":"ins_410081289","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168636,"machine_id":"m_1038"},{"_id":"5caf26c18fd84281dc58ca0c","inst_name":"ins_245486447","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168640,"machine_id":"m_3165"},{"_id":"5caf26c18fd84281dc58ca0e","inst_name":"ins_1291553636","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168634,"machine_id":"m_671"},{"_id":"5caf26c18fd84281dc58ca0f","inst_name":"ins_1267303778","task_name":"M2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168583,"machine_id":"m_1581"},{"_id":"5caf26c18fd84281dc58ca11","inst_name":"ins_531098732","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168638,"machine_id":"m_2724"},{"_id":"5caf26d58fd84281dc6a66de","inst_name":"ins_520618887","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168680,"machine_id":"m_2356"},{"_id":"5caf26d58fd84281dc6a66df","inst_name":"ins_475323805","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168655,"machine_id":"m_629"},{"_id":"5caf26d58fd84281dc6a66e0","inst_name":"ins_357953094","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168663,"machine_id":"m_1050"},{"_id":"5caf26d58fd84281dc6a66e3","inst_name":"ins_231099514","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168639,"machine_id":"m_1794"},{"_id":"5caf26d58fd84281dc6a66e5","inst_name":"ins_1094881638","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168675,"machine_id":"m_410"},{"_id":"5caf26d58fd84281dc6a66e9","inst_name":"ins_276593380","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168657,"machine_id":"m_1557"},{"_id":"5caf26d58fd84281dc6a66ec","inst_name":"ins_113898226","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168659,"machine_id":"m_3036"},{"_id":"5caf26d58fd84281dc6a66ed","inst_name":"ins_357953373","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168658,"machine_id":"m_3245"},{"_id":"5caf26d58fd84281dc6a66f4","inst_name":"ins_556635909","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168649,"machine_id":"m_3721"},{"_id":"5caf26d58fd84281dc6a66f7","inst_name":"ins_601949338","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168661,"machine_id":"m_3557"},{"_id":"5caf26d58fd84281dc6a66f8","inst_name":"ins_113897691","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168667,"machine_id":"m_1671"},{"_id":"5caf26d58fd84281dc6a66f9","inst_name":"ins_1021968669","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168649,"machine_id":"m_2969"},{"_id":"5caf26d58fd84281dc6a66fa","inst_name":"ins_1094882021","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168671,"machine_id":"m_2596"},{"_id":"5caf26d58fd84281dc6a66fc","inst_name":"ins_1054459140","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168623,"machine_id":"m_610"},{"_id":"5caf26d58fd84281dc6a66fd","inst_name":"ins_276593541","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168668,"machine_id":"m_3994"},{"_id":"5caf26d58fd84281dc6a66fe","inst_name":"ins_357952912","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168669,"machine_id":"m_906"},{"_id":"5caf26d58fd84281dc6a6701","inst_name":"ins_149744728","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168642,"machine_id":"m_2274"},{"_id":"5caf26d58fd84281dc6a6703","inst_name":"ins_638006533","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168663,"machine_id":"m_2162"},{"_id":"5caf26d58fd84281dc6a6704","inst_name":"ins_475323893","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168640,"machine_id":"m_1242"},{"_id":"5caf26d58fd84281dc6a6705","inst_name":"ins_475323972","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168656,"machine_id":"m_1133"},{"_id":"5caf26d58fd84281dc6a6709","inst_name":"ins_601948789","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168669,"machine_id":"m_752"},{"_id":"5caf26d58fd84281dc6a670a","inst_name":"ins_81468948","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168640,"machine_id":"m_2438"},{"_id":"5caf26d58fd84281dc6a670c","inst_name":"ins_68387240","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168633,"machine_id":"m_3463"},{"_id":"5caf26d58fd84281dc6a670d","inst_name":"ins_733818290","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168639,"machine_id":"m_662"},{"_id":"5caf26d58fd84281dc6a6710","inst_name":"ins_1054462180","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168630,"machine_id":"m_925"},{"_id":"5caf26d58fd84281dc6a6711","inst_name":"ins_1094882338","task_name":"R2_1","job_name":"j_3490107","task_type":"1","status":"Terminated","start_time":168430,"end_time":168675,"machine_id":"m_1160"}]


export default {


    data(){
        return{
            data:[]
        }
    },

methods:{
            paintSunburst(){
            var chart = this.$echarts.init(document.getElementById('sunburst'));

            var option = {
                    series: {
                        type: 'sunburst',
                        // highlightPolicy: 'ancestor',
                        data: this.data,
                        radius: [0, '90%'],
                        label: {
                            rotate: 'radial'
                        }
                    }
};
            chart.setOption(option);
        }
},
    mounted(){

var links = linksProcess(Json);

console.log(links);
var root = d3.stratify()
    .id(d=>{return d.target})
    .parentId(d=>{return d.source})
    (links)

var d = root.ancestors()[0].children;;

       this.data = structure(d);
        console.log(this.data);
        this.paintSunburst();
    }

}
</script>