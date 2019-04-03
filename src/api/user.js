import axios from '@/libs/api.request'

/**
 * 登录
 * @param username 用户名
 * @param password 密码
 */
export const login = ({ username, password }) => {
  const data = {
    username,
    password
  }
  return axios.request({
    url: '/authorize/login',
    data,
    method: 'post'
  })
}

/**
 * 获取当前登录用户信息
 */
export const getUserInfo = () => {
  return axios.request({
    url: '/authorize/me',
    method: 'get'
  })
}

/**
 * 退出系统
 * @param token
 */
export const logout = (token) => {
  return axios.request({
    url: '/authorize/login-out',
    method: 'get'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'http://localhost:8090/message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'http://localhost:8090/message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'http://localhost:8090/message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'http://localhost:8090/message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'http://localhost:8090/message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'http://localhost:8090/message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}

/**
 * 获取用户菜单
 */
export const listUserMenus = () => {
  return axios.request({
    url: 'http://localhost:8090/get_user_menus',
    method: 'get'
  })
}
