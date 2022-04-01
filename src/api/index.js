import request from '../utils/request';
import axios from 'axios'
import Cookies from 'js-cookie';

export const fetchData = query => {
  return request({
    url: './table.json',
    method: 'get',
    params: query
  });
};


export const instance = axios.create({
  baseURL: 'http://47.101.36.174:7109',
  timeout: 30000
})


instance.interceptors.request.use((config) => {
  if (config.url !== '/login') {
    config.headers['token'] = Cookies.get('token')
    config.headers['userId']=Cookies.get("userId")
    return config;
  }
   console.log(config)
}, (err) => {
  console.log(err)
})

export default instance