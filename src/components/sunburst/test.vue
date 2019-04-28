<template>
<div>
    <div id="sunburst" style="width:1000px;height:1000px"></div>
</div>
</template>

<script>
import linksProcess from './links.js';
import structure from './structure.js'
import * as d3 from 'd3';

import {
    data
} from './data0'
import {
    colorJob
} from '../../../static/color.js'

export default {


    data() {
        return {
            data: []
        }
    },

    methods: {
        paintSunburst() {

            let chart = this.$echarts.init(document.getElementById('sunburst'));

            let option = {

                visualMap: {
                    type: 'continuous',
                    min: 0,
                    max: 15,
                    inRange: {
                        color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
                    }
                },

                series: {
                    type: 'sunburst',
                    // highlightPolicy: 'ancestor',
                    data: data,
                    radius: [0, '90%'],
                    label: {
                        rotate: 'radial'
                    },
                    levels: [{},
                        {},
                        {},
                        {
                            label: {
                                show: false
                            }
                        }
                    ]
                }
            }
            chart.setOption(option);
        }
    },
    mounted() {

        this.paintSunburst();


    },

    computed: {
        showData() {
            return this.$store.state.data
        }
    },

    watch: {
        //这里有bug：Error: ambiguous: R2_1
        showData: function(a, b){
            let links = linksProcess(a);

            let root = d3.stratify()
                .id(d => {
                    return d.target
                })
                .parentId(d => {
                    return d.source
                })
                (links)

            let d = root.ancestors()[0].children;;

            let data = structure(d);

            console.log(data);

            let chart = this.$echarts.init(document.getElementById('sunburst'));

            let option = {

                visualMap: {
                    type: 'continuous',
                    min: 0,
                    max: 15,
                    inRange: {
                        color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
                    }
                },

                series: {
                    type: 'sunburst',
                    // highlightPolicy: 'ancestor',
                    data: data,
                    radius: [0, '90%'],
                    label: {
                        rotate: 'radial'
                    },
                    levels: [{},
                        {},
                        {},
                        {
                            label: {
                                show: false
                            }
                        }
                    ]
                }
            }
            chart.setOption(option);
        }
    }

    
}
</script>