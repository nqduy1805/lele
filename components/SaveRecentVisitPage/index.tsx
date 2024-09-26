'use client';


import { setRecentVist } from '@/lib/model/local-cache'
import { useDebounce } from '@/hooks/useDebounce'
import { usePathname } from 'next/navigation';

export default function SaveRecentVisitPage() {
  const pathname = usePathname();
  useDebounce(() => {
      setRecentVist('1',pathname)
  }, [pathname])
  return <></>
}
