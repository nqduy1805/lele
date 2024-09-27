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


export default function page() {
      checkProtectPage();
      const { push } = useRouter()
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user =  {
          email:username,
          password:password,
          provider:'google'
        };
        
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
              addProductToCart(cart);
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
        
      };
    return (
        <form  onSubmit={handleSubmit}>
            {error && (
                <>
                    <p className="text-[1rem] mb-[1.5rem] text-[#b3b3b3] text-red-500">
                        <ExclamationCircleIcon className="h-5 w-5 inline-block" /> {error}
                    </p>
                </>
            )}
              <div className="mb-[1rem]">
                <label className=" text-[1rem] mb-[1rem] inline-block font-[400]">Tên đăng nhập</label>
                <input className="focus:outline-none focus:ring-0  text-[1rem]  border-none shadow-sm rounded h-[54px] bg-white block w-full px-3 py-1.5   leading-6 " maxLength={5000}  value={username} onChange={(e) => setUsername(e.target.value)} name="email" data-name="Email" placeholder="Your-email@gmail.com" type="text"  required />
              </div>
              <div className="mb-[1rem]">
                <label className=" text-[1rem] mb-[1rem] inline-block font-[400]">Mật khẩu</label>
                <input className="focus:outline-none focus:ring-0  text-[1rem]  border-none shadow-sm rounded h-[54px] bg-white block w-full px-3 py-1.5 text-base  leading-6 " maxLength={5000}  value={password} onChange={(e) => setPassword(e.target.value)} name="password" data-name="password" placeholder="Your Password" type="password"  required />
              </div>
              <div className="mb-[1rem]">
                <label className=" text-[1rem] mb-[1rem] inline-block font-[400]">Xác nhận mật khẩu</label>
                <input className="focus:outline-none focus:ring-0  text-[1rem]  border-none shadow-sm rounded h-[54px] bg-white block w-full px-3 py-1.5 text-base  leading-6 " maxLength={5000}  value={password} onChange={(e) => setPassword(e.target.value)} name="password" data-name="password" placeholder="Your Password" type="password"  required />
              </div>
              
                <button className="rounded-[0.25rem] border border-transparent w-full h-[54px] px-[30px] cursor-pointer text-white bg-[#fb771a] border-[#fb771a] hover:text-white hover:bg-[#eb6304] hover:border-[#de5e04]" >
                    Đăng ký 
                </button>
          </form>
    );
  }
  