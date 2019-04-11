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

    mounted(){
        this.axios.get('/result')
        .then((response)=>{
            this.content = response.data;
        })

    }
}
</script>

<style>
    
</style>