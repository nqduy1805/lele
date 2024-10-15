import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {  getGoalieRefreshToken,getGoalieToken} from '@/lib/model/save-jwt'
export function checkAuthen(): boolean {
    const token = getGoalieToken();
    const refreshToken = getGoalieRefreshToken();
    return !!(refreshToken && token);
}
import { clearAllGoalieToken } from '@/lib/model/save-jwt'
export function checkProtectPage() {
  const publicPages = ['/signin', '/signup','/signup/infor'];

  const pathname = usePathname()
  const { push } = useRouter()
  const onAuth = (pathname: string) => {

    const isInsidePublicPages = publicPages.some(p => p === pathname)
    const authen = checkAuthen();
    if (!authen && !isInsidePublicPages) {
      clearAllGoalieToken();
      return push('/signin')
    }

    if ( authen && isInsidePublicPages) {
      return push('/home')
    }
  }

  useEffect(() => {
     onAuth(pathname)
  }, [pathname])
}
