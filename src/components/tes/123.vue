<template>
<div>
<sunburst :data='this.data' style="width:1000px;height:1000px">

  <!-- Add behaviors -->
  <template slot-scope="{ nodes, actions }">
    <highlightOnHover :nodes="nodes" :actions="actions" />
    <zoomOnClick :nodes="nodes" :actions="actions" />
  </template>

  <!-- Add information to be displayed on top the graph -->
  <nodeInfoDisplayer slot="top" slot-scope="{ nodes }" :current="nodes.mouseOver" :root="nodes.root" description="of visits begin with this sequence of pages" />

  <!-- Add bottom legend -->
  <breadcrumbTrail slot="legend" slot-scope="{ nodes, colorGetter, width }" :current="nodes.mouseOver" :root="nodes.root" :colorGetter="colorGetter" :from="nodes.clicked" :width="width" />

</sunburst> 
</div>
</template>

<script>

import linksProcess from './links.js';
import structure from './structure.js'
import * as d3 from 'd3';

import {
  breadcrumbTrail,
  highlightOnHover,
  nodeInfoDisplayer,
  sunburst,
  zoomOnClick
} from 'vue-d3-sunburst';
import "vue-d3-sunburst/dist/vue-d3-sunburst.css";

export default {
  components: {
    breadcrumbTrail,
    highlightOnHover,
    nodeInfoDisplayer,
    sunburst,
    zoomOnClick
  },
  data() {
    return { 
        data:[]
    }
  },
  mounted(){
      this.$axios.get('/result')
      .then(response=>{
                          var links = linksProcess(response.data);

console.log(links);
var root = d3.stratify()
    .id(d=>{return d.target})
    .parentId(d=>{return d.source})
    (links)

var d = root.ancestors()[0].children;;

       this.data = structure(d);
      })
  }
}
</script>