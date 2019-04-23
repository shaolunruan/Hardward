<template>
<div>
    <div id="line" style="width:80%;height:1000px"></div>
</div>
</template>

<script>
import processData from './structure.js'

  export default {
    data () {
      return {
          data:[]
      }
    },

    methods:{
        paintChart(){
            var chart = this.$echarts.init(document.getElementById('line'))

            
    var  option = {
        title: {
            text: 'Anomaly Counter'
        },
        tooltip: {//跟随鼠标的刻度线
            trigger: 'axis',
        },
        xAxis: {
            data: this.data.map(function (item) {
                return item[0];
            }),
            name:"Time",
            nameTextStyle:{
                fontSize:20
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            name:"Anomaly Number",
            nameLocation:'center',
            nameTextStyle:{
                fontSize:20
            },
            nameGap:20
        },
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [
            {
            startValue: '116250',
            endValue:'120150'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 1750,
                color: '#096'
            }, {
                gt: 1750,
                lte: 2500,
                color: '#ffde33'
            }, {
                gt: 2500,
                lte: 3000,
                color: '#ff9933'
            }, {
                gt: 3000,
                lte: 3250,
                color: '#cc0033'
            }, {
                gt: 3250,
                lte: 3500,
                color: '#660099'
            }, {
                gt: 3500,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: 'Beijing AQI',
            type: 'line',
            data: this.data.map(function (item) {
                return item[1];
            }),
            markLine: {
                silent: true,
                data: [{
                    yAxis: 1750
                }, {
                    yAxis: 2500
                }, {
                    yAxis: 3000
                }, {
                    yAxis: 3250
                }, {
                    yAxis: 3500
                }]
            }
        }
    }

            chart.setOption(option);
        }

    },

    mounted(){
        this.$axios.get('/view')
            .then(response=>{
                this.data = processData(response.data);
                this.paintChart();
            })
    }
  }
</script>