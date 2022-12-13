import request from '@/utils/request'
// 搜索
export function searchUser(name) {
  return request({
    url: '/',
    method: 'get',
    params: {
      name
    }
  })
}

export function GetWordList() {
  return request({
    url: '/scroll', //http://127.0.0.1:4523/mock/1014620/scroll
    method: 'get'
  })
}
export function GetPageList() {
  return request({
    url: '/paper',
    method: 'get'
  })
}
export function GetAuthor() {
  return request({
    url: '/author',
    method: 'get',
    // params: id
  })
}
export function transactionList(query) {
  return request({
    url: '',
    method: 'get',
    params: query
  })
}