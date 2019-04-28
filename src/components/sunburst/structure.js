module.exports = function(d){
    let data = new Array();
    for(let i = 0;i<d.length;i++){
    let job = new Object();
    job.name = d[i].id;
    job.children = new Array();
    for(let j = 0;j<d[i].children.length;j++){
        let task = new Object();
        task.name = d[i].children[j].id;
        task.children = new Array();
        for(let k = 0;k<d[i].children[j].children.length;k++){
        let instance = new Object();
        instance.name = d[i].children[j].children[k].id;
        instance.value = 1;
        //下面构造inst最大显示角度
        instance.label = {
            minAngle:10//不知道为什么can't work
        };
        task.children.push(instance);
        };
        //下面构造task最大显示角度
        task.label = {
            minAngle:10
    };
        job.children.push(task)
    };
    //下面构造job最大显示角度
    job.label = {
        minAngle:20
    };
    data.push(job)
    }

return data;
}