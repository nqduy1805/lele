'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {ExclamationCircleIcon,} from '@heroicons/react/24/outline';
import { signin } from '@/services/auth';
import {checkProtectPage} from '@/lib/helper/checkAuthen';
import { getRecentVisit,getCartAffterLogin } from '@/lib/model/local-cache'
import { setFixLoading }  from '@/components/Loading'
import {  saveGoalieToken,saveGoalieRefreshToken} from '@/lib/model/save-jwt'
import { addProductToCart } from '@/services/cart';
import { signinWithGoogle ,signinWithFB} from '@/lib/model/firebase'
import Image from 'next/image';
import Link from 'next/link';

export interface ISignin {
  email: string
  password: string
  provider: 'GOOGLE' | 'EMAIL_PASSWORD'
}
export default function page() {
      checkProtectPage();
      const { push } = useRouter()
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitHandler({
          email:username,
          password:password,
          provider: 'EMAIL_PASSWORD'

        })
      };
      const signInWithGmail = async () => {
        try {
          const result = await signinWithGoogle()
          const { user } = result
          const idToken = await user.getIdToken()
          console.log(idToken);
          submitHandler({
            email: user.email || '',
            password: idToken,
            provider: 'GOOGLE'
          })
        } catch (error) {
          console.log(error)
        }
      }
      const signInWithFacebook = async () => {
        try {
          const result = await signinWithFB()
          const { user } = result
          const idToken = await user.getIdToken()
          console.log(idToken);
          console.log(user);

          submitHandler({
            email: user.email || '',
            password: idToken,
            provider: 'GOOGLE'
          })
        } catch (error) {
          console.log(error)
        }
      }
      const submitHandler = (user: ISignin) => {
        signin(user).then(res => {
          try {
            const {data} = res;

            if(data.status==200){
              const {headers} = res;
              const authorization = headers.authorization;
              if (authorization ) {
                saveGoalieToken(authorization)
                saveGoalieRefreshToken(headers.refreshtoken);
              }
              const recentVisit = getRecentVisit('1');
              setFixLoading(true, {
                title: 'Redirecting to main screen ...'
              })
              const cart = getCartAffterLogin();
              if(cart){
                addProductToCart(cart);
              }
              if (recentVisit) {
                push(recentVisit)
              } else {
                push('/home')
              }
              setTimeout(() => {
                setFixLoading(false)
              }, 1000)
            }else{
              setError(data.message)
            }

          } catch (error) {

          }
        })
        .catch(err => {
  
        })
        .finally(() => {
          // setLoading(false)
        });

      }
    return (
      <div>
        <form  onSubmit={handleSubmit}>
            {error && (
                <>
                    <p className="text-[1rem] mb-[1.5rem] text-[#b3b3b3] text-red-500">
                        <ExclamationCircleIcon className="h-5 w-5 inline-block" /> {error}
                    </p>
                </>
            )}
              <div className="mb-[1rem]">
                <label className=" text-[1rem] mb-[1rem] inline-block font-[400]">Username</label>
                <input className="focus:outline-none focus:ring-0  text-[1rem]  border-none shadow-sm rounded h-[54px] bg-   block w-full px-3 py-1.5   leading-6 " maxLength={5000}  value={username} onChange={(e) => setUsername(e.target.value)} name="email" data-name="Email" placeholder="Your-email@gmail.com" type="text"  required />
              </div>
              <div className="mb-[1rem]">
                <label className=" text-[1rem] mb-[1rem] inline-block font-[400]">Password</label>
                <input className="focus:outline-none focus:ring-0  text-[1rem]  border-none shadow-sm rounded h-[54px] bg-white block w-full px-3 py-1.5 text-base  leading-6 " maxLength={5000}  value={password} onChange={(e) => setPassword(e.target.value)} name="password" data-name="password" placeholder="Your Password" type="password"  required />
              </div>
              <div className=" mb-[1rem] ">
                <label className="flex justify-between">
                  <div>
                    {/* <input className="text-[#fb771a] rounded-[4px] mr-[8px]" maxLength={5000}  name="isRemember"  type="checkbox" checked /> */}
                    <span className="text-[#888] text-[14px] font-[400]">Remember me</span>
                  </div>
                  <span className="text-[#888] text-[14px] font-[400]">Forgot Password</span>
                </label>
              </div>
                <button className="rounded-[0.25rem] border border-transparent w-full h-[44px] px-[30px] cursor-pointer text-white bg-[#fb771a] border-[#fb771a] hover:text-white hover:bg-[#eb6304] hover:border-[#de5e04]" >
                    Log in 
                </button>
          </form>
              <div className="relative mt-2 pb-1 mt-[20px] mb-[10px]">
                <span className=" bg-[#f6f7fc] text-sm  dark:bg-gray-900/80 px-1 rounded-md absolute -top-[10px] left-1/2 -translate-x-1/2 z-10 text-gray-400">
                  HOẶC
                </span>
                <div className="absolute top-0 w-full border-b dark:border-gray-700"></div>
              </div>
              <div className="flex justify-content">
                <button 
                  className="font-[400] flex m-[5px]  border border-[rgba(0,0,0,0.26)] rounded-[2px] box-border text-[rgba(0,0,0,0.87)] text-[0.875rem] h-[40px] outline-none px-[2px] w-full flex items-center justify-center cursor-pointer normal-case"
                  onClick={signInWithFacebook}
                >
                <Image
                src="/fb.png"
                alt="logo"
                width={20} 
                height={20}
                className="w-[20px] h-[20px] mr-[8px]" 
                />
                  Facebook
                  </button>
                <button 
                  className="font-[400] flex m-[5px]  border border-[rgba(0,0,0,0.26)] rounded-[2px] box-border text-[rgba(0,0,0,0.87)] text-[0.875rem] h-[40px] outline-none px-[2px] w-full flex items-center justify-center cursor-pointer normal-case"
                  onClick={signInWithGmail}
                >
                <Image
                src="/google.png"
                alt="logo"
                width={20} 
                height={20}
                className="w-[20px] h-[20px] mr-[8px]" 
                />Google
                </button>
              </div>
              <div className="mb-[20px] mt-[20px] flex items-center justify-center w-full text-[rgba(0,0,0,0.26)] pr-[4px] whitespace-pre text-[1rem]">
                <span>Bạn mới biết đến CÔ MÀU? </span>
                <Link
                    href='/signup/infor'
                    className='text-[#ee4d2d] font-medium text-[0.875rem]"'
                  >
                  Đăng ký
                </Link>
                
              </div>
           
           
           </div>
    );
  }
  