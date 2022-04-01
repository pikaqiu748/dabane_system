import axios from "axios";
/*近三年小学市州大班额数据查询*/
export function GetprimaryDa2020(){
  return axios.get(
    '/zxxs/xs/jbxx/merge/1/55/65/area'
  ).catch((err)=>{
    console.log(err)
  })

}
export function GetprimaryDa2019(){
  return axios.get(
    '/xx/all/2/0/1/9/1/55/65/area'
  ).catch((err)=>{
    console.log(err)
  })
}
export function GetprimaryDa2018(){
  return axios.get(
    '/xx/all/2/0/1/8/1/55/65/area'
  ).catch((err)=>{
    console.log(err)
  })
}
/*近三年初中市州大班额数据查询 */
export function GetmiddleDa2020(){
  return axios.get(
    '/zxxs/xs/jbxx/merge/2/55/65/area'
  ).catch((err)=>{
    console.log(err)
  })

}
export function GetmiddleDa2019(){
  return axios.get(
    '/xx/all/2/0/1/9/2/55/65/area'
  ).catch((err)=>{
    console.log(err)
  })
}
export function GetmiddleDa2018(){
  return axios.get(
    '/xx/all/2/0/1/8/2/55/65/area'
  ).catch((err)=>{
    console.log(err)
  })
}
/*近三年超大班额查询，小学+初中 */
export function Getprimarych2020(){
  return axios.get(
    '/zxxs/xs/jbxx/merge/1/65/200/area'
  ).catch((err)=>{
    console.log(err)
  })

}
export function Getprimarych2019(){
  return axios.get(
    '/xx/all/2/0/1/9/1/65/200/area'
  ).catch((err)=>{
    console.log(err)
  })
}
export function Getprimarych2018(){
  return axios.get(
    '/xx/all/2/0/1/8/1/65/200/area'
  ).catch((err)=>{
    console.log(err)
  })
}
export function Getmiddlech2020(){
  return axios.get(
    '/zxxs/xs/jbxx/merge/2/65/200/area'
  ).catch((err)=>{
    console.log(err)
  })

}
export function Getmiddlech2019(){
  return axios.get(
    '/xx/all/2/0/1/9/2/65/200/area'
  ).catch((err)=>{
    console.log(err)
  })
}
export function Getmiddlech2018(){
  return axios.get(
    '/xx/all/2/0/1/8/2/65/200/area'
  ).catch((err)=>{
    console.log(err)
  })
}