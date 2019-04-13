<template>
    <div>
        <div id="calendar" style="width:1000px;height:600px"></div>
        <!-- {{data}} -->
    </div>
</template>
<script>
import processData from './processData.js'

export default {

    data: function() {
        return {
            data: []
            
        }

    },

    methods: {

        paintCalendar() {
            var chart = this.$echarts.init(document.getElementById('calendar'));
            console.log('paint',this.data)
            var option = {
    title: {
        top: 5,
        left: 'left',//'center',
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

    calendar: [
    {
        range: '2014',//['2011-01-01', '2011-12-31'],//'2011',
        cellSize: ['auto', 15],
        left: 70,
        right: 30,
    },
    {
        top: 230,
        range: '2015',
        cellSize: ['auto', 15],
        left: 70,
        right: 30,
    },
    {
        top: 400,
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
    }, {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 1,
        data: this.data},
        {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 2,
        data: this.data
    }]

};

            chart.setOption(option);
        }
    },

    mounted() {
       this.$axios.get('/usage')
            .then((response) => {
                this.data = processData(response.data);
                                this.paintCalendar();
            })
    }


}
</script>