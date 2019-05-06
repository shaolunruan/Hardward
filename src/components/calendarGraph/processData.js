module.exports = function(Json){

    function getDate (datestr) {
        let temp = datestr.split("-");
        if (temp[1] === '01') {
            temp[0] = parseInt(temp[0],10) - 1;
            temp[1] = '12';
        } else {
            temp[1] = parseInt(temp[1],10) - 1;
        }
        //new Date()的月份入参实际都是当前值-1
        let date = new Date(temp[0], temp[1], temp[2]);
        return date;
    }
    let dateArr = [];
    function getDiffDate (start, end) {
        let startTime = getDate(start);
        let endTime = getDate(end);
        
        let counter = 0;
        while ((endTime.getTime() - startTime.getTime()) > 0) {
            let year = startTime.getFullYear();
            let month = startTime.getMonth().toString().length === 1 ? "0" + (parseInt(startTime.getMonth().toString(),10) + 1) : (startTime.getMonth() + 1);
            let day = startTime.getDate().toString().length === 1 ? "0" + startTime.getDate() : startTime.getDate();
            dateArr.push(year + "-" + month + "-" + day);
            startTime.setDate(startTime.getDate() + 1);
            counter= counter+1;
        }
        // console.log(counter);
        return dateArr
        
    }
    //最后一天不输出，闰年366天
    getDiffDate('2016-1-1','2017-1-1')

    //删去010月的改为10
    for(let i = 0;i<366;i++){
        let a = dateArr[i].split('-');
        if(a[1] == '010'){
            a[1]=10;
        }
        let b = a.join('-');
        dateArr[i] = b;
    }
/////////////////////////////////////////dateArr

    //编辑算法，求出异常域，d表示一条数据
    function warningValue(d){
        // sum1 = int(one_line[2]) * 107 / 165 + int(one_line[3]) * 71 / 165 + int(one_line[8]) * 152 / 165
        let value0 = d.cpu_util_percent*(107/165)+d.mem_util_percent*(71 / 165)+d.disk_io_percent*(152 / 165);
        //算法后期弥补，可能得出的结果会不合理
        return value0;

    }

    //按以上算法算出前366个值，放进Array里

    let value = new Array()
    for(let i = 0;i<366;i++){
        value[i] = warningValue(Json[i]);
    }
    
//////////////////////////////////////////////value

    //构建二维数组，第一维用以上生成的日期，第二位用数据接口的数据
    let data = new Array();
    for(let i = 0;i<366;i++){
        data[i] = new Array();
            data[i][0] = dateArr[i];
            data[i][1] = value[i];
    }
    
    //明天修改一下前台取数据的算法

    return data;
}