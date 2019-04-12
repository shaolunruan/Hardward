<template>
    <div>
        <pre>{{content}}</pre>
    </div>
</template>

<script>


export default {
    data:function(){
        return{
            content:''
        }
    },

    created(){
        this.$axios.get('/usage')
        .then((response)=>{
            this.content = response.data;
            console.log(this.content);
        })

    },
    methods:{

    }
}
</script>

<style>
    
</style>