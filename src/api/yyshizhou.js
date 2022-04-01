import axios from "axios";
/*--------------linebarmix1,2,3,4-----------------------*/
export function GetprimaryDa(){
  return axios.get(
    '/zxxs/xs/jbxx/merge/1/55/65/area'
  ).catch(err =>{
    console.log(err)
  })
}
export function GetprimaryCh(){
  return axios.get(
    '/zxxs/xs/jbxx/merge/1/65/200/area'
  ).catch(err =>{
    console.log(err)
  })
}
export function GetmiddleDa(){
  return axios.get(
    '/zxxs/xs/jbxx/merge/2/55/65/area'
  ).catch(err =>{
    console.log(err)
  })
}
export function GetmiddleCh(){
  return axios.get(
    '/zxxs/xs/jbxx/merge/2/65/200/area'
  ).catch(err =>{
    console.log(err)
  })
}
/*-----------获取2019bar,line数据-----------------*/ 
export function GetprimaryDa19(){
  return axios.get(
    '/xx/all/2/0/1/9/1/55/65/area'
  ).catch(err =>{
    console.log(err)
  })
}
export function GetmiddleDa19(){
  return axios.get(
    '/xx/all/2/0/1/9/2/55/65/area'
  ).catch(err =>{
    console.log(err)
  })
}