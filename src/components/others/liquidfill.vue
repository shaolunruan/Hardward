<template>
    <div>
        <div class="panel panel-primary container">
            <div class="panel-heading">
                <h3 class="panel-title">Machine-Info</h3>
            </div>
            <div class="panel-body">
                <select name id="input" class="form-control" required="required" v-model="selected" placeholder="请选择machine编号">
                    <!-- 单选select没有placeholder -->
                    <option :value="item" v-for="item in server_event" :key="item.machineID">{{item.machineID}}</option>
                </select>

            </div>

            <div>
                <!-- 以下设置水球图样式 -->

                <div id="liquidfill-chart-1" style="height:500px;width:500px"></div>
                <div id="liquidfill-chart-2" style="height:500px;width:500px"></div>
                <div id="liquidfill-chart-3" style="height:500px;width:500px"></div>


            </div>

            {{selected}}
        </div>
    </div>
</template>

<script>
    const ERR_OK = 0;

    import echartsLiquidFill from "echarts-liquidfill"

    export default {

        data: function() {
            return {

                // 将如何给select设置默认选中项？
                selected: ['server_event[0]'],

                server_event: [],

                selectedOption: {}
            };
        },

        methods: {

            liquidFill01() {
                let chart = this.$echarts.init(document.getElementById('liquidfill-chart-1'));

                let option = {
                    series: [{
                        type: 'liquidFill',
                        data: [this.selected.capacity_CPU, 0.3, 0.4]

                    }]
                };

                chart.setOption(option);
            },
            liquidFill02() {
                let chart = this.$echarts.init(document.getElementById('liquidfill-chart-2'));

                let option = {
                    series: [{
                        type: 'liquidFill',
                        data: [this.selected.capacity_memory, 0.3, 0.4]

                    }]
                };

                chart.setOption(option);
            },
            liquidFill03() {
                let chart = this.$echarts.init(document.getElementById('liquidfill-chart-3'));

                let option = {
                    series: [{
                        type: 'liquidFill',
                        data: [this.selected.capacity_disk, 0.3, 0.4]

                    }]
                };

                chart.setOption(option);
            }
        },

        created() {
            this.$http.get("/api/server_event").then(response => {
                response = response.body;
                if(response.errno === ERR_OK) {
                    this.server_event = response.data
                }
            });

        },

        filters: {

            numFilter(value) {
                // 截取当前数据到小数点后两位

                let realVal = Number(value).toFixed(2);

                // num.toFixed(2)获取的是字符串

                return Number(realVal);
            }
        },

        mounted() {

            this.liquidFill01();
            this.liquidFill02();
            this.liquidFill03();


        },
        watch: {
            selected: function(val) {

                // 这是刷新第一幅水球图
                let chart01 = this.$echarts.init(document.getElementById('liquidfill-chart-1'));

                let valoption01 = {
                    series: [{
                        type: 'liquidFill',
                        // data: [val.capacity_CPU|numFilter, (val.capacity_CPU|numFilter) - 0.2, (val.capacity_CPU|numFilter) - 0.3],
                        data: [val.capacity_CPU, val.capacity_CPU - 0.2, val.capacity_CPU - 0.3],

                        itemStyle: {
                            opacity: 0.8
                        },
                        outline: {
                            borderDistance: 0,
                            itemStyle: {
                                borderWidth: 5,
                                borderColor: '#156ACF',
                                shadowBlur: 20,
                                shadowColor: 'rgba(255, 0, 0, 1)'
                            }
                        },
                        label: {
                            formatter: 'CPU\nValue: {c}',
                            fontSize: 28
                        }

                    }],
                    tooltip: {
                        show: true
                    }
                };

                chart01.setOption(valoption01)

                // 这是第二幅水球图

                let chart02 = this.$echarts.init(document.getElementById('liquidfill-chart-2'));

                let valoption02 = {
                    series: [{
                        type: 'liquidFill',
                        data: [{
                            name: 'memory',
                            value: val.capacity_memory
                        }, , val.capacity_memory - 0.2, val.capacity_memory - 0.3],
                        itemStyle: {
                            opacity: 0.8
                        },
                        outline: {
                            borderDistance: 0,
                            itemStyle: {
                                borderWidth: 5,
                                borderColor: '#156ACF',
                                shadowBlur: 20,
                                shadowColor: 'rgba(255, 0, 0, 1)'
                            }
                        },
                        label: {
                            formatter: '{b}\nValue: {c}',
                            fontSize: 28
                        }

                    }],
                    tooltip: {
                        show: true
                    }
                };

                chart02.setOption(valoption02)

                // 这是第三幅水球图

                let chart03 = this.$echarts.init(document.getElementById('liquidfill-chart-3'));

                let valoption03 = {
                    series: [{
                        type: 'liquidFill',
                        data: [val.capacity_disk, val.capacity_disk - 0.2, val.capacity_disk - 0.3],
                        itemStyle: {
                            opacity: 0.8
                        },
                        outline: {
                            borderDistance: 0,
                            itemStyle: {
                                borderWidth: 5,
                                borderColor: '#156ACF',
                                shadowBlur: 20,
                                shadowColor: 'rgba(255, 0, 0, 1)'
                            }
                        },
                        label: {
                            formatter: 'CPU\nValue: {c}',
                            fontSize: 28
                        }

                    }],
                    tooltip: {
                        show: true
                    }
                };

                chart03.setOption(valoption03)

            }
        }
    }
</script>

<style>
    @media (min-width: 1200px) {
        .container {
            max-width: 500px;
        }
    }
</style>