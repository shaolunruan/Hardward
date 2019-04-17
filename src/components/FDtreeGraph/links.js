//构造link数组
import * as d3 from 'd3';

module.exports = function(Json){

    // let exist = new Array();
    
    //添加origin节点的link
    let data0 = new Array();
    // var obj0  = new Object();
    // obj0.source = 0;
    // obj0.target = 'origin';
    
    // data0.push(obj0);
    // for(let i in Json){
    //     if(exist.indexOf(Json[i].job_name) == -1){
    //         exist.push(Json[i].job_name)
    //         let a = new Object();
    //         a.source = 'origin';
    //         a.target = Json[i].job_name;
    
    //         data0.push(a)
    
    //     }
    // }
    
    
    
    let data1 = new Array();
    
    for(let i in Json){
        let job = Json[i].job_name;
        let task = Json[i].task_name;
        let a = new Object();
        a.source = job;
        a.target = task;
    
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
    
    //以下把links根据映射表来映射
    var exist = new Array();
    
    var index = new Array()
    
    // for(let i in list){
        // let field = 'inst_name';
    //在开头插入一个源节点origin
    // var origin = 'origin'
    // index.unshift('origin')
    // index.unshift(0)
    
    //////////////////////////////
    for(let j in Json){
        if(exist.indexOf(Json[j].inst_name )== -1){
            index.push(Json[j].inst_name);//小改改;
            exist.push(Json[j].inst_name);
        }
    }
    // }
    
    
    for(let j in Json){
        if(exist.indexOf(Json[j].task_name )== -1){
            index.push(Json[j].task_name);//小改改;
            exist.push(Json[j].task_name);
        }
    }
    
    
    
    for(let j in Json){
        if(exist.indexOf(Json[j].job_name )== -1){
            index.push(Json[j].job_name);//小改改;
            exist.push(Json[j].job_name);
        }
    }
    
    //以下根据index数组构造映射表
    // import * as d3 from 'd3';

        var map = d3.range(index.length).map(function(i){
        return{
            tom :i,
            jerry:index[i]
        }
    })

    for(let i=0;i<dlinks.length;i++){
        for(let j=0;j<map.length;j++){
            if(dlinks[i].source == map[j].jerry){
                dlinks[i].source = map[j].tom;
            }else{
    
            }
    
            if(dlinks[i].target == map[j].jerry){
                dlinks[i].target = map[j].tom;
            }else{
                
            }
        }
    }
    
    
    console.log(map);
    console.log(dlinks);
    
    return dlinks;
    
    }