import { instance } from "./index.js";


// 添加用户
export function registerUser(){
  return instance.post('/register/reg')
}
// ---------------------2020--------------------------------
// zhuzhaung
export function getBigShiZhouClssType () {
  return instance.get('/zxxs/xs/jbxx/merge/55/65/bjall')
}
// zhuzhaung01
export function getSuperShiZhouClssType () {
  return instance.get('/zxxs/xs/jbxx/merge/65/200/bjall')
}
// zhexian
// zhexian01


// zhuzhuang03
export function getSuperAllClassType () {
  return instance.get('/zxxs/xs/jbxx/merge/65/200/bj')
}

// zhuzhuang04
export function getBigAllClassType () {
  return instance.get('/zxxs/xs/jbxx/merge/55/65/bj')
}

export function getSuperAllClassType2019 () {
  return instance.get('/xx/all/2/0/1/9/65/200/bj')
}

// zhuzhuang04
export function getBigAllClassType2019 () {
  return instance.get('/xx/all/2/0/1/9/55/65/bj')
}

export function getSuperAllClassType2018 () {
  return instance.get('/xx/all/2/0/1/8/65/200/bj')
}

// zhuzhuang04
export function getBigAllClassType2018 () {
  return instance.get('/xx/all/2/0/1/8/55/65/bj')
}


// ------------------------------2019-------------------------------
export function getBigShiZhouClassType2019 () {
  return instance.get('/xx/all/2/0/1/9/55/65/bjall')
}
export function getSuperShiZhouClassType2019 () {
  return instance.get('/xx/all/2/0/1/9/65/200/bjall')
}

// -------------------------------2018--------------------------
export function getBigShiZhouClassType2018 () {
  return instance.get('/xx/all/2/0/1/8/55/65/bjall')
}
export function getSuperShiZhouClassType2018 () {
  return instance.get('/xx/all/2/0/1/8/65/200/bjall')
}

//-------------------------------2018办学类型--------------------------------
export function getBigSchool2018 () {
  return instance.get('/xx/all/2/0/1/8/55/65/bxlx')
}
export function getSuperBigSchool2018 () {
  return instance.get('/xx/all/2/0/1/8/65/200/bxlx')
}

export function getBigSchoolAll2018 () {
  return instance.get('/xx/all/2/0/1/8/55/65/bxlxall')
}
export function getSuperBigSchoolAll2018 () {
  return instance.get('/xx/all/2/0/1/8/65/200/bxlxall')
}

//-------------------------------2019办学类型--------------------------------
export function getBigSchool2019 () {
  return instance.get('/xx/all/2/0/1/9/55/65/bxlx')
}
export function getSuperBigSchool2019 () {
  return instance.get('/xx/all/2/0/1/9/65/200/bxlx')
}

export function getBigSchoolAll2019 () {
  return instance.get('/xx/all/2/0/1/8/55/65/bxlxall')
}
export function getSuperBigSchoolAll2019 () {
  return instance.get('/xx/all/2/0/1/8/65/200/bxlxall')
}

//-------------------------------2020办学类型--------------------------------
export function getBigSchool2020 () {
  return instance.get('/zxxs/xs/jbxx/merge/55/65/bxlx')
}
export function getSuperBigSchool2020 () {
  return instance.get('/zxxs/xs/jbxx/merge/65/200/bxlx')
}

export function getBigSchoolAll2020 () {
  return instance.get('/zxxs/xs/jbxx/merge/55/65/bxlxall')
}
export function getSuperBigSchoolAll2020 () {
  return instance.get('/zxxs/xs/jbxx/merge/65/200/bxlxall')
}

//-------------------------------2018年级类型--------------------------------
export function getBigGrade2018(){
   return instance.get('/xx/all/2/0/1/8/55/65/nj')
}
export function getSuperBigGrade2018(){
  return instance.get('/xx/all/2/0/1/8/65/200/nj')
}

export function getBigGradeAll2018(){
  return instance.get('/xx/all/2/0/1/8/55/65/njall')
}
export function getSuperBigGradeAll2018(){
  return instance.get('/xx/all/2/0/1/8/65/200/njall')
}

//-------------------------------2019年级类型--------------------------------
export function getBigGrade2019(){
  return instance.get('/xx/all/2/0/1/9/55/65/nj')
}
export function getSuperBigGrade2019(){
 return instance.get('/xx/all/2/0/1/9/65/200/nj')
}

export function getBigGradeAll2019(){
 return instance.get('/xx/all/2/0/1/9/55/65/njall')
}
export function getSuperBigGradeAll2019(){
 return instance.get('/xx/all/2/0/1/9/65/200/njall')
}

//-------------------------------2020年级类型--------------------------------
export function getBigGrade2020(){
  return instance.get('/zxxs/xs/jbxx/merge/55/65/nj')
}
export function getSuperBigGrade2020(){
  return instance.get('/zxxs/xs/jbxx/merge/65/200/nj')
}
export function getBigGradeAll2020(){
  return instance.get('/zxxs/xs/jbxx/merge/55/65/njall')
}
export function getSuperBigGradeAll2020(){
  return instance.get('/zxxs/xs/jbxx/merge/65/200/njall')
}


//-------------------------------所有年份 小学大 桃子--------------------------------
export function getToschoolallyears(){
  return instance.get('/zxxs/xs/jbxx/merge/1/55/65/rxnfall')
}
//-------------------------------所有年份 小学超大 桃子--------------------------------
export function getToschoolallyears2(){
  return instance.get('/zxxs/xs/jbxx/merge/1/65/200/rxnfall')
}
//-------------------------------所有年份 初中大 桃子--------------------------------
export function getToschoolallyears3(){
  return instance.get('/zxxs/xs/jbxx/merge/2/55/65/rxnfall')
}
//-------------------------------所有年份 初中超大 桃子--------------------------------
export function getToschoolallyears4(){
  return instance.get('/zxxs/xs/jbxx/merge/2/65/200/rxnfall')
}