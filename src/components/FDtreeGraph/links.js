//构造link数组

module.exports = function(Json){

	let exist = new Array();

//添加origin节点
	let data0 = new Array();
	for(let i in Json){
		if(exist.indexOf(Json[i].job_name) == -1){
			exist.push(Json[i].job_name)
			let a = new Object();
			a.source = 'origin';
			a.target = Json[i].job_name;

			data0.push(a)

		}
	}



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


// function pass(a){
// 	return typeof a != 'undifined'
// }



    var links0 = JSON.stringify(data);
    var links = JSON.parse(links0);

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