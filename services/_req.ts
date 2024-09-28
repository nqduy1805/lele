import axios from 'axios'
import {  getGoalieRefreshToken,getGoalieToken,saveGoalieToken,saveGoalieRefreshToken} from '@/lib/model/save-jwt'
import { error } from 'console'
import { clearAllGoalieToken } from '@/lib/model/save-jwt'


const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BE_GATEWAY || ''
  })
  
  instance.interceptors.request.use(async (config)=>{
    if(config?.url && (config?.url?.indexOf('/signin') >= 0 )){
      return  config;
    }
    const authorization = getGoalieToken();
    config.headers.setAuthorization(authorization)
    return  config;
  },error=>{
    return Promise.reject(error)
  })
  instance.interceptors.response.use(
    async (response)=> {
     const config=response.config;
     if(config?.url &&  (config?.url?.indexOf('/signin') >= 0 || config?.url?.indexOf('/refreshtoken') >= 0) ){
        return  response;
     }
     const {status,message}  = response.data;
     if(status && status ==401){
       if(message && message=="Unauthorized"){
          const refreshToken = getGoalieRefreshToken() as string;
          if(!refreshToken){

            window.location.href = '/signin';
          }
          const {headers} = await getRefreshToken(refreshToken);
          const authorization = headers.authorization
          if (authorization ) {
            saveGoalieToken(authorization)
            saveGoalieRefreshToken(headers.refreshtoken)
            config.headers.setAuthorization(authorization)
            return instance(config);
          }else{
            // clearAllGoalieToken();
            // window.location.href = '/signin'
          }
       }
     }
     return response
   },
    (error)=> {
     
     return Promise.reject(error)
   }
 )
 async function getRefreshToken(refreshToken:string){
  return (await instance.post('/api/auth/refreshtoken',{
     refreshToken
  }))
 }
  
  export const req = instance
  export const httpGet = req.get
  export const httpPost = req.post
  export const httpPut = req.put
  export const httpDel = req.delete
  export const httpPatch = req.patch

  

