//构造link数组
import * as d3 from 'd3';

module.exports = function(Json){

    // let exist = new Array();
    
    //添加origin节点的link
    let data0 = new Array();

    
    
    let data1 = new Array();
    
    for(let i in Json){
        let job = Json[i].job_name;
        let task = Json[i].task_name;
        let a = new Object();
        a.source = job;
        a.target = task;
        a.value = 25;
    
        data1.push(a);
    
    
    }
    
        var data2 = data0.concat(data1)
    
    let data3 = new Array();
    for(let i in Json){
        let task = Json[i].task_name;
        let instance = Json[i].inst_name;
        let a = new Object();
        a.source = task;
        a.target = instance;
        a.value = 0.25
    
        data3.push(a);
    }
    var data = data2.concat(data3)
    
    
    
    var links0 = JSON.stringify(data);
    var links = JSON.parse(links0);
    
    //对links去重，赋值给dlinks
    var source = new Array();	
    var target = new Array();
    
    var dlinks = new Array();
    
    for(let k = 0;k<links.length;k++){
    
    if((source.indexOf(links[k].source) > -1)&(target.indexOf(links[k].target) > -1)){
    
    }else{
        source.push(links[k].source);
        target.push(links[k].target);
        dlinks.push(links[k])
    
    }
    }
    


    
    return dlinks;
    
    }