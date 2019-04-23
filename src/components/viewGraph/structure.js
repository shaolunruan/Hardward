//处理api获取的数据，传给组件，
//[["2000-06-05",116],["2000-06-06",129],["2000-06-07",135]]

module.exports = function(d){

    var data = new Array();
    for(let i in d){
        // console.log(data.length)
        let a = new Array();
        a[0] = d[i]._id;
        a[1] = d[i].warning;
        data.push(a);
    };

    // console.log(data);
    return data;
}