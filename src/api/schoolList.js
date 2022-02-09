import request from '../request/request'

export const searchSchool = (data) => {
  return request({
      url: '/school/list',
      method: 'get',
      params: data
  })
}