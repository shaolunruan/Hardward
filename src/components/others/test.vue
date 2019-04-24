<template>
<div>
    {{data}}
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
        this.data = this.$store.state.counter
        // this.$store.commit('increment');
        // console.log(this.$store.state.counter);
    }
  }
</script>