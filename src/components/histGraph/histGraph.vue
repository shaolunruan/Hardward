<template>
  <div>
    <transition id="loading-faade">
      <div v-show="notdone" class="loading">loading...</div>
    </transition>
    <div id="histGraph" style="width:1000px;height:600px"></div>
    <!-- {{data}} -->
  </div>
</template>
<script>
import processData from "./processData.js";

export default {
  data: function() {
    return {
      data: {},
      notdone: true
    };
  },

  methods: {
    paintCalendar() {
      let chart = this.$echarts.init(document.getElementById("histGraph"));

      var gain = 0.9;
      var gap = 0;
      var myColor = ["#e63810", "#ff6b00", "#e3b61f", "#13b5b1"];
      var myBgColor = [
        "rgba(230,56,16,0.2)",
        "rgba(255,107,0,0.2)",
        "rgba(227,182,31,0.2)",
        "rgba(19,181,177,0.2)"
      ];
      //柱子数据
      var data = this.data;
      console.log(data);

      var option = {
        // backgroundColor: "rgba(0,0,0,0.8)",
        // grid: [
        //   {
        //     left: "3%",
        //     top: "10%",
        //     right: "2%",
        //     bottom: "5%",
        //     containLabel: true
        //   },
        //   {
        //     left: "3%",
        //     top: "10%",
        //     right: "2%",
        //     bottom: "5%",
        //     containLabel: true
        //   }
        // ],
        xAxis: [
          {
            // show: false,
            // gridIndex: 0,
            type: "category",
        
            axisLabel: {
              textStyle: {
                color: function(param, index) {
                  return myColor[index];
                },
                fontSize: 13 * gain
              }
            }
          },
          {
            // show: false,
            // gridIndex: 1,
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(160,160,160,0.3)"
              }
            },
            axisLabel: {
              textStyle: {
                color: function(param, index) {
                  return myColor[index];
                },
                fontSize: 13 * gain
              }
            }
            // data: ["01", "02", "03", "04", "05"]
          }
        ],
        yAxis: [
          {
            // gridIndex: 0,
            type: "value",
            name: "单位：件",
            max: 25
          },
          {
            // gridIndex: 0,
            type: "value",
            name: "单位：件",
            max: 100,
            min: 90
          }
        ],
        series: [
          {
            type: "bar",
            xAxisIndex: 1,
            itemStyle: {
              normal: {
                show: true,
                color: function(params) {
                  var num = myBgColor.length;
                  return myBgColor[params.dataIndex % num];
                },
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: "#333"
              }
            },
            label: {
              normal: {
                show: true,
                formatter: function(params) {
                  var stuNum = 0;
                  data.name.forEach(function(value, index, array) {
                    if (params.dataIndex == index) {
                      stuNum = value;
                    }
                  });
                  return stuNum;
                },
                position: "bottom",
                textStyle: {
                  color: function(params) {
                    var num = myBgColor.length;
                    return myBgColor[params.dataIndex % num];
                  },
                  fontSize: 25 * gain
                }
              }
            },
            barWidth: "25%",
            data: [100, 100, 100, 100]
          },
          {
            type: "bar",
            itemStyle: {
              normal: {
                show: true,
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: "#333"
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            barWidth: "25%",
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [data.data[0], data.data[1], data.data[2], data.data[3]]
          },
          {
            type: "bar",
            itemStyle: {
              normal: {
                show: true,
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: "#333"
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            barWidth: "25%",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [data.data[4]]
          }
        ]
      };
      chart.setOption(option);
    }
  },

  mounted() {
    this.$axios.get("/histGraph").then(response => {
      this.notdone = false;
      //   this.data = processData(response.data);
      //请求完成数据后渲染视图

      let res = response.data;
      this.data.data = [
        res.cpu_util_percent,
        res.disk_io_percent,
        res.net_in,
        res.net_out,
        res.mem_util_percent
      ];
      this.data.name = [
        "cpu_util_percent",
        "disk_io_percent",
        "net_in",
        "net_out",
        "mem_util_percent"
      ];
      this.paintCalendar();
    });
  }
};
</script>

<style>
.loading {
  font-size: 50px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  opacity: 0.5;
  padding-left: 300px;
  padding-top: 50px;
  width: 1000px;
  height: 600px;
}

/* 后期添加渐入渐出动画 */
.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>