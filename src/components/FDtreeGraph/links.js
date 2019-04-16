//构造link数组

module.exports = function(Json){

    let data1 = new Array();
    for(let i in Json){
        let job = Json[i].job_name;
        let task = Json[i].task_name;
        let a = new Object();
        a.source = job;
        a.target = task;
        data1.push(a);
    }

    let data2 = new Array();
    for(let i in Json){
        let task = Json[i].task_name;
        let instance = Json[i].inst_name;
        let a = new Object();
        a.source = task;
        a.target = instance;
        data2.push(a);
    }
    var data = data1.concat(data2)
    var links0 = JSON.stringify(data);
    var links = JSON.parse(links0);

    return links;

}