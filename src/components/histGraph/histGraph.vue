<template>
  <div class="margin">
    <transition id="loading-faade">
      <div v-show="notdone" class="loading">loading...</div>
    </transition>
    <div id="histGraph" style="width:300px;height:300px"></div>
    <!-- {{data}} -->
  </div>
</template>
<script>
import processData from "./processData.js";

export default {
  data: function() {
    return {
      data: {},
      notdone: true,
      
      
    };
  },

  methods: {
    paintCalendar() {
      let chart = this.$echarts.init(document.getElementById("histGraph"));

      var gain = 0.9;
      var gap = 0;
      var myColor = ["#e63810", "#ff6b00", "#e3b61f", "#13b5b1","#68B0E8"];
      var myBgColor = [
        "rgba(230,56,16,0.2)",
        "rgba(255,107,0,0.2)",
        "rgba(227,182,31,0.2)",
        "rgba(19,181,177,0.2)",
        "rgba(104,176,232,0.2)"
      ];
      //柱子数据
      var data = this.data;
        
      var option = {
        backgroundColor: "#EFEBE1",
        grid: {
          left: "3%",
          top: "10%",
          right: "2%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            show: true,
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(160,160,160,0.0)"
              }
            },
            axisLabel: {
              textStyle: {
                color: function(param, index) {
                  return myColor[index];
                },
                fontSize: 13 * gain
              },
              rotate:-75
            },
            data: data.name
          },
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: []
          }
        ],
        yAxis: [
          {
            show:false,
            type: "value",
 
          },
          {
            // show:false,
            type: "value",
            name: "单位：件",
            nameGap: 35 + gap,
            nameTextStyle: {
              color: "#ffffff",
              fontSize: 16 * gain
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "rgba(160,160,160,0.3)"
              }
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,0.8)",
                fontSize: 14 * gain
              }
            }
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
                  data.barScale.forEach(function(value, index, array) {
                    if (params.dataIndex == index) {
                      stuNum = value;
                    }
                  });
                  return stuNum;
                },
                position: "top",
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
            data: new Array(data.data.length).fill(data.barMax)
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
                show: true,
                formatter: function(params) {
                  var stuNum = 0;
                  data.label.forEach(function(value, index, array) {
                    if (params.dataIndex == index) {
                      stuNum = value;
                    }
                  });
                  return stuNum;
                }
              }
            },
            barWidth: "25%",
            data: data.data
          }
        ]
      };
      chart.setOption(option);
    }
  },

  mounted() {
    this.$axios.get("/histGraph").then(response => {
      this.notdone = false;
      //每个bar的比例尺，将这些值映射到0-barMax
      let barScale = [100,20,50,30,100];
      //bar的最大值
      let barMax = 30
      let data = {}
      
      this.data = processData(response.data,barScale,barMax);
      this.data.barScale = [...barScale];
      this.data.barMax=barMax
      console.log(data)

      //请求完成数据后渲染视图


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

/* .margin{
  margin-top:20px
} */
</style>