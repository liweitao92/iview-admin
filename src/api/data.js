import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: 'http://localhost:8090/get_table_data',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'http://localhost:8090/get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: 'http://localhost:8090/error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return axios.request({
    url: 'http://localhost:8090/save_error_logger',
    data: info,
    method: 'post'
  })
}

export const uploadImg = formData => {
  return axios.request({
    url: 'http://localhost:8090/image/upload',
    data: formData
  })
}

export const getOrgData = () => {
  return axios.request({
    url: 'http://localhost:8090/get_org_data',
    method: 'get'
  })
}

export const getTreeSelectData = () => {
  return axios.request({
    url: 'http://localhost:8090/get_tree_select_data',
    method: 'get'
  })
}
