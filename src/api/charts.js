import request from "../utils/request";

// 所有图表数据请求

export function getChartsData (){
    return request({
        url:"/table",
        method: "GET",
    })
}