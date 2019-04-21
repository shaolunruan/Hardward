<template>
    <div>
        <div id="sunburst" style="width:1000px;height:1000px"></div>
    </div>
</template>

<script>

import linksProcess from './links.js';
import * as d3 from 'd3';


export default {

    data(){
        return{
            data:[]
        }
    },

    mounted(){

        var Json = [{"_id":"5caf26c18fd84281dc58c747","inst_name":"ins_1291554804","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168638,"machine_id":"m_1740"},{"_id":"5caf26c18fd84281dc58c748","inst_name":"ins_1044726976","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_2471"},{"_id":"5caf26c18fd84281dc58c749","inst_name":"ins_410081043","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168635,"machine_id":"m_1123"},{"_id":"5caf26c18fd84281dc58c74c","inst_name":"ins_761583586","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168641,"machine_id":"m_3305"},{"_id":"5caf26c18fd84281dc58c74e","inst_name":"ins_84687978","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_3368"},{"_id":"5caf26c18fd84281dc58c74f","inst_name":"ins_966160983","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168638,"machine_id":"m_2002"},{"_id":"5caf26c18fd84281dc58c754","inst_name":"ins_328725079","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168636,"machine_id":"m_3613"},{"_id":"5caf26c18fd84281dc58c756","inst_name":"ins_1249595449","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168638,"machine_id":"m_587"},{"_id":"5caf26c18fd84281dc58c75e","inst_name":"ins_491418031","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_3410"},{"_id":"5caf26c18fd84281dc58c75f","inst_name":"ins_8560624","task_name":"M2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168583,"machine_id":"m_3737"},{"_id":"5caf26c18fd84281dc58c763","inst_name":"ins_531098076","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168640,"machine_id":"m_1084"},{"_id":"5caf26c18fd84281dc58c764","inst_name":"ins_1044720473","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168638,"machine_id":"m_3616"},{"_id":"5caf26c18fd84281dc58c765","inst_name":"ins_793519793","task_name":"M2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168582,"machine_id":"m_3201"},{"_id":"5caf26c18fd84281dc58c768","inst_name":"ins_884852059","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168638,"machine_id":"m_3109"},{"_id":"5caf26c18fd84281dc58c76c","inst_name":"ins_328725005","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168635,"machine_id":"m_1488"},{"_id":"5caf26c18fd84281dc58c76d","inst_name":"ins_1168285321","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_1871"},{"_id":"5caf26c18fd84281dc58c76e","inst_name":"ins_328724851","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168636,"machine_id":"m_770"},{"_id":"5caf26c18fd84281dc58c770","inst_name":"ins_410082122","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_1693"},{"_id":"5caf26c18fd84281dc58c773","inst_name":"ins_1249595789","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168637,"machine_id":"m_2440"},{"_id":"5caf26c18fd84281dc58c775","inst_name":"ins_328724701","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_131"},{"_id":"5caf26c18fd84281dc58c776","inst_name":"ins_966160827","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168640,"machine_id":"m_3186"},{"_id":"5caf26c18fd84281dc58c778","inst_name":"ins_88131716","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_3056"},{"_id":"5caf26c18fd84281dc58c77f","inst_name":"ins_572731936","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168638,"machine_id":"m_1035"},{"_id":"5caf26c18fd84281dc58c780","inst_name":"ins_3351365","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168637,"machine_id":"m_655"},{"_id":"5caf26c18fd84281dc58c782","inst_name":"ins_884850868","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168638,"machine_id":"m_858"},{"_id":"5caf26c18fd84281dc58c783","inst_name":"ins_1044721330","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168645,"machine_id":"m_3395"},{"_id":"5caf26c18fd84281dc58c786","inst_name":"ins_941944703","task_name":"M2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168583,"machine_id":"m_1168"},{"_id":"5caf26c18fd84281dc58c788","inst_name":"ins_612444837","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168641,"machine_id":"m_589"},{"_id":"5caf26c18fd84281dc58c78a","inst_name":"ins_84687896","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_9"},{"_id":"5caf26c18fd84281dc58c78b","inst_name":"ins_966160355","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_1864"},{"_id":"5caf26c18fd84281dc58c790","inst_name":"ins_1291553719","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168636,"machine_id":"m_3226"},{"_id":"5caf26c18fd84281dc58c793","inst_name":"ins_171261546","task_name":"M2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168584,"machine_id":"m_878"},{"_id":"5caf26c18fd84281dc58c794","inst_name":"ins_612445573","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168637,"machine_id":"m_1785"},{"_id":"5caf26c18fd84281dc58c795","inst_name":"ins_1168285486","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168639,"machine_id":"m_3979"},{"_id":"5caf26c18fd84281dc58c797","inst_name":"ins_680238481","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168635,"machine_id":"m_2630"},{"_id":"5caf26c18fd84281dc58c798","inst_name":"ins_166046344","task_name":"J3_1_2","job_name":"j_2833123","task_type":"1","status":"Terminated","start_time":168502,"end_time":168640,"machine_id":"m_354"}]

        var links = linksProcess(Json)

var data = [{
    name: 'Grandpa',
    children: [{
        name: 'Uncle Leo',
        value: 15,
        children: [{
            name: 'Cousin Jack',
            value: 2
        }, {
            name: 'Cousin Mary',
            value: 5,
            children: [{
                name: 'Jackson',
                value: 2
            }]
        }, {
            name: 'Cousin Ben',
            value: 4
        }]
    }, {
        name: 'Father',
        value: 10,
        children: [{
            name: 'Me',
            value: 5
        }, {
            name: 'Brother Peter',
            value: 1
        }]
    }]
}, {
    name: 'Nancy',
    children: [{
        name: 'Uncle Nike',
        children: [{
            name: 'Cousin Betty',
            value: 1
        }, {
            name: 'Cousin Jenny',
            value: 2
        }]
    }]
}];

        var root = d3.stratify()
            .id(d=>{return d.target})
            .parentId(d=>{return d.source})
            (links)

            // this.data = root.ancestors()[0].children;
            this.data = data

        this.paintSunburst();
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
    }
}
</script>