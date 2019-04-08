<template>
<div>


    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">machine list</h3>
            </div>
            <div class="panel-body">
                <div class="pre-scrollable" style=" height:300px; overflow:auto">
                    <table class="table table-hover table-striped" id="table">
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in server_event" :key="item.machineID">
                                <td>
                                    {{item.machineID}}
                                    <div style="float:right" v-if="sign(item)">警告</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>


                <!-- 以下放置一个容器，该容器里可以装三个小的水球图 -->
                

                  <div id="liquidfill-chart" style="height:300px"></div>

                


    </div>
</div>
</template>

<script>

const ERR_OK = 0;

import echartsLiquidFill from "echarts-liquidfill"

export default {

    data: function () {
        return {
            server_event: []
        };
    },
    methods: {
        sign(item) {
            if (item.machineID % 3 == 0) {
                return true;
            } else {
                return false;
            }
        },

        liquidFill(){
          var chart = this.$echarts.init(document.getElementById('liquidfill-chart'));


    chart.setOption({
                    series:[{
                        type:'liquidFill',
                        data:[0.9,0.5,0.4,0.3]
                    }]
                });
        }
    },
    created() {
        this.$http.get("/api/server_event").then(response => {
            response = response.body;
            if (response.errno === ERR_OK) {
                this.server_event = response.data;
            }
        });
    },
    mounted(){
        this.liquidFill();
    }
};
</script>

<style>
#table {
    width: 80%;
    margin: 0 auto;
}

@media (min-width: 1200px) {
    .container {
        max-width: 800px;
    }
}

.panel-body {
    padding: 0;
}
</style>
