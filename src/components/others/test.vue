<template>
<div>
<input type="button" value='带你玩' @click="get">
</div>
</template>

<script>


  export default {
    data () {
      return {
        data:''
      }
    },

    mounted(){

      // this.$axios({
      //   method:'get',
      //   url:'/meta',
      //   params:{
      //     id:12345
      //   }
      // })
      // var a = '123';
      // console.log(`hhhh ${a}`);
      // this.$axios.get('/meta?id=123')
      //   .then(res=>{
      //     console.log('成功');
      //   })

    },

    computed:{
      show(){
        return this.$store.state.counter
      }
    },

    methods:{
      get(){
        this.$store.commit('increment')
      }
    },

    watch: {
      show:(a,b)=>{
        console.log(`修改后为${a}`);
        console.log(`修改后为${b}`);
      }
    },
  }
</script>