import { httpDel, httpGet, httpPost, httpPut } from './_req'
import {userSigin,userSigup} from '@/lib/definitions/auth';
  

export const signin = (user:userSigin) => {
  return httpPost(`/api/auth/signin`,user)
}
  

export const signup = (user:userSigup) => {
  return httpPost(`/api/auth/signup`,{inter:'signup',user})
}



