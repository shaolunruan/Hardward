//1.构造nodes数组

module.exports = function(Json){

var exist = new Array();

var index = new Array()

// for(let i in list){
	// let field = 'inst_name';
for(let j in Json){
	if(exist.indexOf(Json[j].inst_name )== -1){
		index.push(Json[j].inst_name);//小改改;
		exist.push(Json[j].inst_name);
	}
}
// }

// for(let i in list){
	// let field = 'inst_name';
for(let j in Json){
	if(exist.indexOf(Json[j].task_name )== -1){
		index.push(Json[j].task_name);//小改改;
		exist.push(Json[j].task_name);
	}
}
// }


// for(let i in list){
	// let field = 'inst_name';
for(let j in Json){
	if(exist.indexOf(Json[j].job_name )== -1){
		index.push(Json[j].job_name);//小改改;
		exist.push(Json[j].job_name);
	}
}
// }

var data = new Array()
for(let a in index){
	let object = new Object()
	object.index = index[a]
	data.push(object)
}
var nodes0 = JSON.stringify(data)
var nodes = JSON.parse(nodes0)

return nodes;

}