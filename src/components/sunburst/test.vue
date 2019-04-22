<template>
    <div>
        <div id="sunburst" style="width:1000px;height:1000px"></div>
    </div>
</template>

<script>

import linksProcess from './links.js';
import structure from './structure.js'
import * as d3 from 'd3';

export default {


    data(){
        return{
            data:[]
        }
    },

methods:{
            paintSunburst(){
                
            var chart = this.$echarts.init(document.getElementById('sunburst'));
var item1 = {
    color: '#F54F4A'
};
var item2 = {
    color: '#FF8C75'
};
var item3 = {
    color: '#FFB499'
};

          var option = {
                    series: {
                        type: 'sunburst',
                        // highlightPolicy: 'ancestor',
                        data: this.data,
                        radius: [0, '90%'],
                        label: {
                            rotate: 'radial'
                        },
                        levels:[
                            {},
                            {},
                            {},
                            {       label:{
                                    show:false
                                }}
                        ]
                    }
};
            chart.setOption(option);
        }
},
    mounted(){
        this.$axios.get('/result')
            .then(response=>{
                var links = linksProcess(response.data);

console.log(links);
var root = d3.stratify()
    .id(d=>{return d.target})
    .parentId(d=>{return d.source})
    (links)

var d = root.ancestors()[0].children;;

       this.data = structure(d);
        console.log(this.data);
        this.paintSunburst();
            })

    }

}
</script>