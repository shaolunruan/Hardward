module.exports = function (Json,barScale,barMax) {
    let data = []
    data.label = [
        Json.cpu_util_percent,
        Json.disk_io_percent,
        Json.net_in,
        Json.net_out,
        Json.mem_util_percent
    ]
    data.name = [
        "cpu_util_percent",
        "disk_io_percent",
        "net_in",
        "net_out",
        "mem_util_percent"
    ]
    data.data = []
    for(let i=0;i<data.label.length;i++){
        console.log(data.label[i],barScale)
        data.data.push(data.label[i]*(barMax/barScale[i]))
    }
    return data;
}