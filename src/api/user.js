//登录接口
//注册

import request from "../utils/request";


export const login = data => {
    return request({
        url: '',  ///sys/login  ScienceAuthor/
        method: 'POST',
        data
    })
}

export const getUserInfo = (token) => {
    return request({
        url: '/user',
        method: 'GET',
        params: {
            token
        }
    })
}

// export function logout() {
//     return request({
//         url: '',
//         method: 'post'
//     })
// }