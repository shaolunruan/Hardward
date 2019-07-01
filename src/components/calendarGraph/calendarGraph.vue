<template>
    <div>
        <transition id="loading-faade">
            <div v-show="notdone" class="loading">loading...</div>
        </transition>
        <div id="calendar" style="width:800px;height:300px"></div>
        <!-- {{data}} -->
    </div>
</template>
<script>
    import processData from './processData.js'

    import {
    data0
} from './data0'

    export default {

        data: function() {
            return {
                data: [],
                notdone : true

            }
        },

        methods: {

            paintCalendar() {
                let chart = this.$echarts.init(document.getElementById('calendar'));
                // console.log('paint', this.data)
                let option = {
                    
        backgroundColor: "#EFEBE1",
                    title: {
                        top: 5,
                        left: 'left', //'center',
                        text: '服务器过去每10秒的状态记录',
                        show:true,
                        textAlign:'auto',
                        // backgroundColor:'#ccc'

                    },
                    tooltip: {
                        position: 'top',
                        left:100
                    },
                    visualMap: {
                        min: 75,
                        max: 88,
                        calculable: true,
                        orient: 'horizontal',
                        left: 'center',
                        top: 'top',
                                inRange: {
            color: ['#fff','#bf0000'],
            opacity: 0.9,
            // colorSaturation:0.5//饱和度
        },
                    },

                    calendar: [{
                        top: 100,
                        range: ['2016-01-03','2016-10-29'],
                        cellSize: ['auto', 15],
                        left: 70,
                        right: 30,
                        cellSize:['auto',15],
                        splitLine:{
                            show:false,

                        },

                                dayLabel: {
                                    nameMap:  []
                                },
                                monthLabel:{
                                    nameMap: [
                                        '5min', '10min', '15min',
                                        '20min', '25min', '30min',
                                        '35min', '40min', '45min',
                                        '50min', '', ''
                                    ],
                                },
                                yearLabel:{
                                    show:false
                                }
                    }],

                    series: [{
                            type: 'heatmap',
                            coordinateSystem: 'calendar',
                            calendarIndex: 0,
                            data: this.data0
                        }
                    ]

                };
                chart.setOption(option);
            }
        },

        mounted() {
            this.$axios.get('/usage')
                .then((response) => {
                    // this.notdone = false;
                    // this.data = processData(response.data);
                    //请求完成数据后渲染视图
                    // console.log(this.data);
                    this.paintCalendar();
                })
        }


    }
</script>

<style>

    .loading{
        font-size: 50px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        opacity: 0.5;
        padding-left: 300px;
        padding-top: 50px;
        width:1000px;
        height:600px;
    }
    
    /* 后期添加渐入渐出动画 */
    .loading-fade-enter-active,.loading-fade-leave-active{
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
</style>