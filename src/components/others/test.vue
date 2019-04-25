<template>
<div>
    {{data}}
</div>
</template>

<script>


  export default {
    data () {
      return {
        data:[]
      }
    },
beforeMount(){
console.log(this.$store.getters.data);;
// this.data = this.$store.state.data;
// console.log(this.$store.state.data);
}
//     mounted(){
// this.$store.dispatch('getData');
// this.data = this.$store.state.data;
//     }
  }
</script>