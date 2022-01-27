import request from '../request/request'

// 获取院校信息
export const getSchoolInfo = id => {
  return request({
      url: '/school/detail',
      method: 'get',
      params: { id }
  })
}

// 获取专业列表
export const getSchoolMajorList = query => {
  return request({
      url: '/schoolmajor/list',
      method: 'get',
      params: query
  })
}

// 获取公告列表
export const getNoticeList = query => {
  return request({
      url: '/notice/list',
      method: 'get',
      params: query
  })
}