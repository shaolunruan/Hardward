<template>
    <div>
        <svg width="1000" height="1000"></svg>
    </div>
</template>

<script>
import * as d3 from 'd3';

import nodesProcess from './nodes.js'
import linksProcess from './links.js'

import {nodes} from './data0.js'
import {links} from './data0.js'

export default {
data() {
    return {
        data:[]
    }
},

methods: {
    d3(){
         var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) {
            return d.id;
        }).distance((d)=>{
            return d.value == 0.25 ? 70:10;}
        ))
        .force("charge", d3.forceManyBody().strength(-15))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
        .force("center", d3.forceCenter(width / 2, height / 2));



        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter()
            .append("line")
            .attr("stroke-width", function(d) {
                return Math.sqrt(d.value);
            });

        //不应用函数也可以实现，先暂时放在这
        var jobLength = function(d){
            let counter = []
            if(d.value = 25){
                counter++;
                if(counter == 1)return 1;
                else return 30;
            }
        }

        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(nodes)
            .enter()
            .append("circle")
            .attr("r", (d)=>{
                switch(d.group){
                    case 3:
                        return 8
                        break;
                    case 2:
                        return 5
                        break;
                    case 1:
                        return 3
                        break;
                    default:
                        return 3;
                }
            })
            .attr("fill", function(d) {
                return color(d.group);
            })
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
            )

        node.append("title")
            .text(function(d) {
                return d.id;
            })

        node.append("text")
            .text(function(d) {
                return d.id;
            })

        simulation
            .nodes(nodes)
            .on("tick", ticked)

        simulation
            .force("link")
            .links(links)

        function ticked() {
            link
                .attr("x1", function(d) {
                    return d.source.x;
                })
                .attr("y1", function(d) {
                    return d.source.y;
                })
                .attr("x2", function(d) {
                    return d.target.x;
                })
                .attr("y2", function(d) {
                    return d.target.y;
                })

            node
                .attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                })
        }
        		function dragstarted(d) {
	  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
	  d.fx = d.x;
	  d.fy = d.y;
		}

	function dragged(d) {
	  d.fx = d3.event.x;
	  d.fy = d3.event.y;
		}

	function dragended(d) {
	  if (!d3.event.active) simulation.alphaTarget(0);
	  d.fx = null;
	  d.fy = null;
                }

    }
},

mounted() {


        // var nodes = nodesProcess(response.data)
        // var links = linksProcess(response.data);
        
   this.d3()

    },

    computed: {
        showData(){
            return this.$store.state.data
        }
    },

    watch: {
        showData:(a,b)=>{
            var nodes = nodesProcess(a)
            var links = linksProcess(a);

            console.log(nodes);
            console.log(links);

        //删除画布内的所有元素 更新视图
        d3.select('svg')
            .selectAll('*')
            .remove();

        var svg = d3.select("svg")  ,
        width = +svg.attr("width"),
        height = +svg.attr("height");

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) {
            return d.id;
        }).distance((d)=>{
            return d.value == 0.25 ? 70:10;}
        ))
        .force("charge", d3.forceManyBody().strength(-15))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
        .force("center", d3.forceCenter(width / 2, height / 2));



        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .exit().remove()
            .data(links)
            .enter()
            .append("line")
            .attr("stroke-width", function(d) {
                return Math.sqrt(d.value);
            });

        //不应用函数也可以实现，先暂时放在这
        var jobLength = function(d){
            let counter = []
            if(d.value = 25){
                counter++;
                if(counter == 1)return 1;
                else return 30;
            }
        }

        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .exit().remove()
            .data(nodes)
            .enter()
            .append("circle")
            .attr("r", (d)=>{
                switch(d.group){
                    case 3:
                        return 8
                        break;
                    case 2:
                        return 5
                        break;
                    case 1:
                        return 3
                        break;
                    default:
                        return 3;
                }
            })
            .attr("fill", function(d) {
                return color(d.group);
            })
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
            )

        node.append("title")
            .text(function(d) {
                return d.id;
            })

        node.append("text")
            .text(function(d) {
                return d.id;
            })

        simulation
            .nodes(nodes)
            .on("tick", ticked)

        simulation
            .force("link")
            .links(links)

        function ticked() {
            link
                .attr("x1", function(d) {
                    return d.source.x;
                })
                .attr("y1", function(d) {
                    return d.source.y;
                })
                .attr("x2", function(d) {
                    return d.target.x;
                })
                .attr("y2", function(d) {
                    return d.target.y;
                })

            node
                .attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                })
        }
        		function dragstarted(d) {
	  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
	  d.fx = d.x;
	  d.fy = d.y;
		}

	function dragged(d) {
	  d.fx = d3.event.x;
	  d.fy = d3.event.y;
		}

	function dragended(d) {
	  if (!d3.event.active) simulation.alphaTarget(0);
	  d.fx = null;
	  d.fy = null;
                }


        }
    },
    }

</script>

<style>
    .links line {
        stroke: #999;
        stroke-opacity: 0.6;
    }

    .nodes circle {
        stroke: #fff;
        stroke-width: 0.5px;
    }
</style>