import request from '../request/request'

export const searchSchool = (schoolName, pageNum, pageSize) => {
  return request({
      url: '/school/search',
      method: 'get',
      params: { schoolName, pageNum, pageSize }
  })
}