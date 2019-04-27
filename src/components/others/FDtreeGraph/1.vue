<template>
  <div>
    {{content}}
  </div>
</template>

<script>

import * as d3 from 'd3'
import { link } from 'fs';

let nodes = d3.range(1000).map(function(i) {
    return {
        index: i
    };
});

let links = d3.range(nodes.length - 1).map(function(i) {
    return {
        source: Math.floor(Math.sqrt(i)),
        target: i + 1
    };
});


export default {
  
  data(){
    return{
      content:''
    }
  },

  mounted(){
    
    this.content = links
  }

}
</script>