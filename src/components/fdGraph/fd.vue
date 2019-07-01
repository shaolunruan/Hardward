<template>
    <div class="t">
        <svg width="711" height="500"></svg>

        <!-- 测试bootstrap -->
    <!-- <hr>
    <button class="btn btn-primary">确定</button>
    <button class="btn btn-success">使用</button>
    <button class="btn btn-danger">注意</button>

    <hr>
    <router-view/> -->
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
        showData(a,b){
//之前使用箭头函数有报错了，改为一般写法又正确了……this的指向问题还是不明确
let A0 = this.$store.state.warningArray

//实现异常数组
let A = new Array();
for(let a in A0){
    if(A0[a].warning == 1){
         A.push(A0[a].inst_id)

    }
}



            let nodes = nodesProcess(a)
            let links = linksProcess(a);
            // console.log(typeof nodes);
            console.log(A0);
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
        .force("charge", d3.forceManyBody().strength(-5))
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
            .selectAll("g")
            .data(nodes)
            .enter().append('g')

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
            .attr("fill", (d)=>{
                //先不纠结forEach了，以下是实现节点的颜色渲染的有效手段
                if(d.group == 1){
                    if(A.some(item=>{return item == d.id})){
                        return color(7)
                    }else return color(d.group)
                }else{
                    return color(d.group)
                }


            })
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
            )
            //以下给d3元素添加了鼠标点击事件
            .on('click',(d)=>{
                console.log(d.id);
            })

//想加标签显示节点的相关系数，失败。。以后一定好好学d3

// let labels = node.append('text')
//                 .text(d=>{
//                     return d.id
//                 })
       node.append("title")
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
                    return d.x = Math.max(6,Math.min(width - 6, d.x));
                })
                .attr("cy", function(d) {
                    return d.y = Math.max(6,Math.min(height - 6, d.y));
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
    text {
  font-family: sans-serif;
  font-size: 10px;
}
    .t {
        background-color: #EFEBE1;
    }

</style>