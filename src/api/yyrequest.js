import Cookies from "js-cookie"
import axios from 'axios'


export function FirstRequest(config){
  const instance = axios.create({
    baseURL:'http://47.101.36.174:7109',
    timeout:5000
  })
  instance.interceptors.request.use(config =>{
    if(config.url!='/login'){
      config.headers['token']=Cookies.get('token')
      config.headers['userId']=Cookies.get('userId')
      return config
    }
    console.log(config)
  })
  return instance(config)

  
}
