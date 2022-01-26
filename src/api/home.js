import request from '../request/request';

export const searchSchool = schoolName => {
  return request({
      url: '/school/search',
      method: 'get',
      params: { schoolName }
  });
};