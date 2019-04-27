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
        task.children.push(instance);
        };
        job.children.push(task)
    };
    data.push(job)
    }

return data;
}