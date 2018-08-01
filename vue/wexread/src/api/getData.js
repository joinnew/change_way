import { URL } from './config'
import fly from '@/utils/fly'

// axios默认是模块化加载，其中部分用了window之类的api,小程序不支持

// Uncaught (in promise) TypeError: XMLHttpRequest is not a constructo

export const searchWords = () => new Promise((resolve, reject) => {
  fly.get( URL.searchWords ).then(res => {
    resolve(res)
  })
})

export function hotRecom () {
  return new Promise( (resolve, reject) => {
    fly.get( URL.hotRecom )
      .then(res => {
        resolve(res)
      })
  })
}

export function special () {
  return new Promise( (resolve, reject) => {
    fly.get( URL.special ) 
      .then(res => {
        resolve(res)
      })
  })
}

export function commentList () {
  return new Promise( (resolve, reject) => {
    fly.get( URL.commentList ) 
      .then(res => {
        resolve(res)
      })
  })
}
