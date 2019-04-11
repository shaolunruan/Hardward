
<template>
  <div class="panel panel-primary container">
    <div class="panel-heading">
      <h3 class="panel-title">time select</h3>
    </div>
    <div class="panel-body">
      <div style="width: 600px">
        <!-- 项目中需要修改 -->
        <select class="form-control" v-model="timeStamp">
          <!-- 将选择框在div父元素中居中显示 -->
          <option :value="item.timestamp" v-for="item in server_event" :key="item.timestamp">{{item.timestamp}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
const ERR_OK = 0;

export default {
  data: function() {
    return {
      server_event: []
    };
  },

  created() {
    this.$http.get("/api/server_event").then(response => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.server_event = response.data;
      }
    });
  }
};
</script>

<style>
@media (min-width: 1200px) {
  .container {
    max-width: 800px;
  }
}
</style>