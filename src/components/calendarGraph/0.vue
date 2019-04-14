<template>
    <div>
        <transition id="loading-faade">
            <div v-show="notdone" class="loading">loading...</div>
        </transition>
        <div id="calendar" style="width:1000px;height:600px"></div>
        <!-- {{data}} -->
    </div>
</template>
<script>
    import processData from './processData.js'

    export default {

        data: function() {
            return {
                data: [],
                notdone : true

            }

        },

        methods: {

            paintCalendar() {
                var chart = this.$echarts.init(document.getElementById('calendar'));
                console.log('paint', this.data)
                var option = {
                    title: {
                        top: 5,
                        left: 'left', //'center',
                        text: '2014-2016年微博发布情况'

                    },
                    tooltip: {
                        position: 'top'
                    },
                    visualMap: {
                        min: 0,
                        max: 20,
                        calculable: true,
                        orient: 'horizontal',
                        left: 'center',
                        top: 'top'
                    },

                    calendar: [{
                        top: 100,
                        range: '2016',
                        cellSize: ['auto', 15],
                        left: 70,
                        right: 30,
                    }],

                    series: [{
                            type: 'heatmap',
                            coordinateSystem: 'calendar',
                            calendarIndex: 0,
                            data: this.data
                        }
                    ]

                };
                chart.setOption(option);
            }
        },

        mounted() {
            this.$axios.get('/usage')
                .then((response) => {
                    this.notdone = false;
                    this.data = processData(response.data);
                    //请求完成数据后渲染视图
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