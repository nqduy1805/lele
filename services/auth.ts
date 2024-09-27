import { httpDel, httpGet, httpPost, httpPut } from './_req'
import {userSigin} from '@/lib/definitions/auth';
  

export const signin = (user:userSigin) => {
  return httpPost(`/api/auth/signin`,user)
}
  

export const signup = (mobile:string) => {
  return httpPost(`/api/auth/signup`,{inter:'signup',mobile})
}



