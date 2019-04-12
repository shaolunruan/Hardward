module.exports = function(Json){

    function getDate (datestr) {
        var temp = datestr.split("-");
        if (temp[1] === '01') {
            temp[0] = parseInt(temp[0],10) - 1;
            temp[1] = '12';
        } else {
            temp[1] = parseInt(temp[1],10) - 1;
        }
        //new Date()的月份入参实际都是当前值-1
        var date = new Date(temp[0], temp[1], temp[2]);
        return date;
    }
    
    function getDiffDate (start, end) {
        var startTime = getDate(start);
        var endTime = getDate(end);
        dateArr = [];
        var counter = 0;
        while ((endTime.getTime() - startTime.getTime()) > 0) {
            var year = startTime.getFullYear();
            var month = startTime.getMonth().toString().length === 1 ? "0" + (parseInt(startTime.getMonth().toString(),10) + 1) : (startTime.getMonth() + 1);
            var day = startTime.getDate().toString().length === 1 ? "0" + startTime.getDate() : startTime.getDate();
            dateArr.push(year + "-" + month + "-" + day);
            startTime.setDate(startTime.getDate() + 1);
            counter= counter+1;
        }
        console.log(counter);
        return(dateArr)
        
    }
    //s最后一天不输出，闰年366天
    getDiffDate('2016-1-1','2017-1-1')

    //编辑算法，求出异常域

    //按以上算法算出前366个值，放进Array里
    
    //构建二维数组，第一维用以上生成的日期，第二位用数据接口的数据
    var data = new Array();
    for(var i = 0;i<367;i++){
        data[i] = new Array();
            data[i][0] = dateArr[i];
            data[i][1] = 0;
    }
    
    console.log(data);
}