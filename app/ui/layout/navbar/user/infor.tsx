import { clearAllGoalieToken } from '@/lib/model/save-jwt'
import {  useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './style.module.css';
import {  UserIcon} from '@heroicons/react/24/outline';
import {  useAppSelector } from "@/lib/redux/hooks";
import Image from 'next/image';

export default function page() {
  const { push } = useRouter()
  const { user } = useAppSelector((state) => state.user);

    const logoutHandle = () => {
        clearAllGoalieToken();
        push('/signin');
  };
    return (
      <div className={`${styles.user} flex flex-col relative self-center group`}>
        {/* <!-- User Info --> */}
        <div className="flex items-center  cursor-pointer text-mango-yellow">
          <div className="w-[25px] mr-[4px]">
          {!user?.avatar && <UserIcon />}

            {user?.avatar && <Image
                  src={user?.avatar ?? "/"}
                  alt={user?.name ?? "noname"}
                  width={80}
                  height={80}
                  className=" rounded-full"
                />
            }

          </div>
          <div className="hidden md:block ml-[2px]">
            <p className=" font-[400] ">{user?.name}</p>
          </div>
        </div> 
        

        {/* <!-- Menu Items --> */}
        <div className={`${styles.userItem} flex flex-col absolute bg-white right-[0px] top-[120%]  w-[141px] rounded-[2px] `} >
          <Link
            className="flex items-center p-1 hover:text-mango-yellow hover:bg-gray-100 font-[400]"
            href="/signin"
          >
            <span className="ml-3">Hồ sơ của tôi</span>
            </Link>
          <Link
            className="flex items-center p-1 hover:text-mango-yellow hover:bg-gray-100 font-[400]"
            href="/signin"
          >
            <span className="ml-3">Đơn hàng</span>
          </Link>
          <Link
            className="flex items-center p-1 hover:text-red-500 hover:bg-red-100 font-[400]"
            href="/signin"
            onClick={logoutHandle}
          >
            <span className="ml-3">Đăng xuất</span>
          </Link>
        </div>
      </div>
    );
  }
  