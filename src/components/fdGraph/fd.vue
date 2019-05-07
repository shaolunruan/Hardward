<template>
    <div>
        <svg width="1800" height="1000"></svg>
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
         let svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    let color = d3.scaleOrdinal(d3.schemeCategory10);

    let simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) {
            return d.id;
        }).distance((d)=>{
            return d.value == 0.25 ? 70:10;}
        ))
        .force("charge", d3.forceManyBody().strength(-5))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
        .force("center", d3.forceCenter(width / 2, height / 2));



        let link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter()
            .append("line")
            .attr("stroke-width", function(d) {
                return Math.sqrt(d.value);
            });

        //不应用函数也可以实现，先暂时放在这
        let jobLength = function(d){
            let counter = []
            if(d.value = 25){
                counter++;
                if(counter == 1)return 1;
                else return 30;
            }
        }

        let node = svg.append("g")
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


        // let nodes = nodesProcess(response.data)
        // let links = linksProcess(response.data);
        
   this.d3()

    },

    computed: {
        showData(){
            return this.$store.state.data
        },
        // showArray(){
        //     return this.$store.state.warningArray
        // }
    },

    watch: {
        showData:(a,b)=>{
//             let A0 = [{ inst_id: 'ins_179496727', warning: 0 },
//   { inst_id: 'ins_179496555', warning: 0 },
//   { inst_id: 'ins_179497163', warning: 1 },
//   { inst_id: 'ins_179496644', warning: 0 },
//   { inst_id: 'ins_1125780835', warning: 1 },
//   { inst_id: 'ins_1044422027', warning: 1 },
//   { inst_id: 'ins_1125780332', warning: 1 },
//   { inst_id: 'ins_963082914', warning: 1 },
//   { inst_id: 'ins_607396039', warning: 0 },
//   { inst_id: 'ins_158138781', warning: 1 },
//   { inst_id: 'ins_526059442', warning: 1 },
//   { inst_id: 'ins_963083148', warning: 1 },
//   { inst_id: 'ins_963082770', warning: 1 },
//   { inst_id: 'ins_1207125142', warning: 0 },
//   { inst_id: 'ins_1288444191', warning: 1 },
//   { inst_id: 'ins_607396190', warning: 1 },
//   { inst_id: 'ins_158139141', warning: 1 },
//   { inst_id: 'ins_1288444340', warning: 1 },
//   { inst_id: 'ins_363391645', warning: 0 },
//   { inst_id: 'ins_1207125307', warning: 1 },
//   { inst_id: 'ins_781466291', warning: 1 },
//   { inst_id: 'ins_963082690', warning: 0 },
//   { inst_id: 'ins_1125780979', warning: 0 },
//   { inst_id: 'ins_781466535', warning: 0 },
//   { inst_id: 'ins_1207125621', warning: 0 },
//   { inst_id: 'ins_526059529', warning: 0 },
//   { inst_id: 'ins_444744775', warning: 0 },
//   { inst_id: 'ins_1044421742', warning: 1 },
//   { inst_id: 'ins_1044422548', warning: 1 },
//   { inst_id: 'ins_1125781233', warning: 0 },
//   { inst_id: 'ins_583108602', warning: 1 },
//   { inst_id: 'ins_382938061', warning: 1 },
//   { inst_id: 'ins_301585709', warning: 0 },
//   { inst_id: 'ins_685374840', warning: 0 },
//   { inst_id: 'ins_301585112', warning: 1 },
//   { inst_id: 'ins_1325101806', warning: 1 },
//   { inst_id: 'ins_464288533', warning: 0 },
//   { inst_id: 'ins_685374452', warning: 1 },
//   { inst_id: 'ins_382937806', warning: 1 },
//   { inst_id: 'ins_685374161', warning: 0 },
//   { inst_id: 'ins_301586053', warning: 1 },
//   { inst_id: 'ins_1325095920', warning: 1 },
//   { inst_id: 'ins_583107547', warning: 0 },
//   { inst_id: 'ins_685374930', warning: 1 },
//   { inst_id: 'ins_464287846', warning: 1 },
//   { inst_id: 'ins_1125614399', warning: 1 },
//   { inst_id: 'ins_1325090742', warning: 1 },
//   { inst_id: 'ins_861633179', warning: 0 },
//   { inst_id: 'ins_583108381', warning: 0 },
//   { inst_id: 'ins_583108522', warning: 1 },
//   { inst_id: 'ins_382937474', warning: 1 },
//   { inst_id: 'ins_1125614242', warning: 1 },
//   { inst_id: 'ins_1325092556', warning: 1 },
//   { inst_id: 'ins_464287922', warning: 0 },
//   { inst_id: 'ins_382938146', warning: 0 },
//   { inst_id: 'ins_301586220', warning: 1 },
//   { inst_id: 'ins_382937897', warning: 0 },
//   { inst_id: 'ins_382938311', warning: 0 },
//   { inst_id: 'ins_685374349', warning: 1 },
//   { inst_id: 'ins_1325088418', warning: 1 },
//   { inst_id: 'ins_1041854054', warning: 1 },
//   { inst_id: 'ins_464288099', warning: 0 },
//   { inst_id: 'ins_685373916', warning: 0 },
//   { inst_id: 'ins_301585869', warning: 1 }]
let A0 = this.$store.state.warningArray

//实现异常数组
let A = new Array();
for(let a in A0){
    A.push(A0[a].inst_id)
}
            let nodes = nodesProcess(a)
            let links = linksProcess(a);
            console.log(typeof nodes);
            console.log(nodes);


        //删除画布内的所有元素 更新视图
        d3.select('svg')
            .selectAll('*')
            .remove();

        let svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    let color = d3.scaleOrdinal(d3.schemeCategory10);

    let simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) {
            return d.id;
        }).distance((d)=>{
            return d.value == 0.25 ? 70:10;}
        ))
        .force("charge", d3.forceManyBody().strength(-15))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
        .force("center", d3.forceCenter(width / 2, height / 2));



        let link = svg.append("g")
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
        let jobLength = function(d){
            let counter = []
            if(d.value = 25){
                counter++;
                if(counter == 1)return 1;
                else return 30;
            }
        }

        let node = svg.append("g")
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
            // .attr("fill", function(d) {
            //     return color(d.group);
            // })
            .attr("fill", function(d) {
                return color(d.group);
            })
            .attr("fill", (d)=>{
                //先不纠结forEach了，以下是实现节点的颜色渲染的有效手段
                if(d.group == 1){
                    if(A.some(item=>{return item == d.id})){
                        return color(7)
                    }else return color(d.group)
                }else{
                    return color(d.group)
                }


                // if(d.group==3){
                //     return color(7)
                // }
                // else{
                //     return color(1)
                // }
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