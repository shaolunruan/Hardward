<template>
    <div>
        {{content}}
    </div>
</template>

<script>

import * as d3 from 'd3';

export default {
    
    data(){
        return{
            nodes:[],
            links:[],
            content:''
        }
    },

    mounted(){

        this.nodes = d3.range(1000).map(function(i) {
        return {
            index: i
        }
        });

        this.links = d3.range(this.nodes.length - 1).map(function(i) {
        return {
            source: Math.floor(Math.sqrt(i)),
            target: i + 1
        }
        })

        this.content = this.links

    }
}
</script>