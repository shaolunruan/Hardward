<!-- 此组件的作用是展示某个node的具体细节信息，暂时定有如下四个：event_type,capacity:CPU,capacity:memory,capacity:disk -->
<!-- 点击左侧的某个node，之后传值给右侧的该组建，生成具体的属性信息 -->

<template>
  <div class="property">
    <!-- 此select选择框和数组做了双向绑定，将选择的值直接返回给数组select -->
    

    <div class="panel panel-primary container">
              <div class="panel-heading">
                    <h3 class="panel-title">Machine-Info</h3>
              </div>
              <div class="panel-body">
                <select
      name
      id="input"
      class="form-control"
      required="required"
      v-model="selected"
      placeholder="请选择machine编号"
    >
      <!-- 单选select没有placeholder -->
      <option :value="item" v-for="item in server_event" :key="item.machineID">{{item.machineID}}</option>
    </select>

    <div class="row">
        <div class="col-md-6" style="margin:8px auto">
            <p>You selected:{{selected.machineID}}</p>
        </div>
    </div>

    <!-- <div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go!</button>
      </span>
      <input type="text" class="form-control" placeholder="Search for..." v-model="selected.mechineID">
    </div>
  </div>
    </div>-->

    <!-- <div class="line">
      <span
        id="event_type"
        class="son"
        style="float:left"
      ></span>
      <span id="capacity_CPU" class="son" style="float:right">capacity_CPU:{{selected.capacity_CPU}}</span>
    </div> -->


    <div class="row">
        <div class="col-md-6">
            event_type:{{selected.event_type}}
        </div>
        <div class="col-md-6">
            capacity_CPU:{{selected.capacity_CPU}}
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            capacity_memory:{{selected.capacity_memory | numFilter}}
        </div>
        <div class="col-md-6">
            capacity_disk:{{selected.capacity_disk}}
        </div>
    </div>


    <!-- <br>
    <div class="line">
      <span
        id="capacity_memory"
        class="son"
        style="float:left"
      >capacity_memory:{{selected.capacity_memory | numFilter}}</span>
      <span
        id="capacity_disk"
        class="son"
        style="float:right"
      >capacity_disk:{{selected.capacity_disk}}</span>
    </div> -->
              </div>
        </div>
  </div>
</template>

<script>
const ERR_OK = 0;

export default {
  data: function() {
    return {
      //    server_event:[ {"timestamp": "0", "machineID": "1148", "event_type": "add", "event-detail": "", "capacity_CPU": "64", "capacity_memory": "0.6900059534594777", "capacity_disk": "1"},
      //     {"timestamp": "0", "machineID": "1148", "event_type": "add", "event-detail": "", "capacity_CPU": "64", "capacity_memory": "0.6900059534594777", "capacity_disk": "1"},
      //     {"timestamp": "0", "machineID": "1204", "event_type": "add", "event-detail": "", "capacity_CPU": "36", "capacity_memory": "0.6900059534594777", "capacity_disk": "1"},
      //     {"timestamp": "0", "machineID": "7845", "event_type": "minus", "event-detail": "", "capacity_CPU": "85", "capacity_memory": "0.6900059534594777", "capacity_disk": "1"},
      //     {"timestamp": "0", "machineID": "1396", "event_type": "add", "event-detail": "", "capacity_CPU": "15", "capacity_memory": "0.6900059534594777", "capacity_disk": "1"},
      //     {"timestamp": "0", "machineID": "1574", "event_type": "add", "event-detail": "", "capacity_CPU": "89", "capacity_memory": "0.6900059534594777", "capacity_disk": "1"},
      //     {"timestamp": "0", "machineID": "1526", "event_type": "add", "event-detail": "", "capacity_CPU": "75", "capacity_memory": "0.6900059534594777", "capacity_disk": "1"}]

      //     ,
      selected: {},

      server_event: [],

      selectedOption: {}
    };
  },

  created() {
    this.$http.get("/api/server_event").then(response => {
      response = response.body;
      if (response.errno === ERR_OK) {
        (this.server_event = response.data)
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
  }
};
</script>

<style>
.property {
  width: 600px;
  font-size: 20px;
}

.son {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

.line {
  width: 100%;
}

@media (min-width: 1200px) {
    .container{
        max-width: 800px;
    }
}
</style>