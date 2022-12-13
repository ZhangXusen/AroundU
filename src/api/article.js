import request from '@/utils/request'
//请求文章列表页


export function fetchList(query) {
  return request({
    url: '',
    method: 'get',
    params: query
  })
}
export function fetchArticle(id) {
  return request({
    url: '',
    method: 'get',
    params: { id }
  })
}

