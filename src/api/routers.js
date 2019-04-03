import axios from '@/libs/api.request'

export const getRouterReq = (access) => {
  return axios.request({
    url: 'http://localhost:8090/get_router',
    params: {
      access
    },
    method: 'get'
  })
}
