<template>
    <div>
        <canvas width="960" height="960"></canvas>
    </div>
</template>

<script>

import * as d3 from 'd3';

        let nodes = d3.range(1000).map(function(i) {
        return {
            index: i
        }
        })

        let links = d3.range(nodes.length - 1).map(function(i) {
        return {
            source: Math.floor(Math.sqrt(i)),
            target: i + 1
        }
        })

export default {
    data(){
        return{

        }   
    },

    created(){
       
    },

    mounted(){

        
var simulation = d3.forceSimulation(this.nodes)
    .force("charge", d3.forceManyBody())
    .force("link", d3.forceLink(this.links).distance(20).strength(1))
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .on("tick", this.ticked);

var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;

d3.select(canvas)
    .call(
        d3.drag()
        .container(canvas)
        .subject(this.dragsubject)
        .on("start", this.dragstarted)
        .on("drag", this.dragged)
        .on("end", this.dragended));


},

    methods:{
ticked() {
  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);

  context.beginPath();
  links.forEach(this.drawLink);
  context.strokeStyle = "#aaa";
  context.stroke();

  context.beginPath();
  nodes.forEach(this.drawNode);
  context.fill();
  context.strokeStyle = "#fff";
  context.stroke();

  context.restore();
},

dragsubject() {
  return simulation.find(d3.event.x - width / 2, d3.event.y - height / 2);
},

dragstarted() {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d3.event.subject.fx = d3.event.subject.x;
  d3.event.subject.fy = d3.event.subject.y;
},

dragged() {
  d3.event.subject.fx = d3.event.x;
  d3.event.subject.fy = d3.event.y;
},

dragended() {
  if (!d3.event.active) simulation.alphaTarget(0);
  d3.event.subject.fx = null;
  d3.event.subject.fy = null;
},

drawNode(d) {
    context.moveTo(d.x + 3, d.y);
  context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
},

drawLink(d) {
   context.moveTo(d.source.x, d.source.y);
  context.lineTo(d.target.x, d.target.y);}


        
    }
}
</script>
