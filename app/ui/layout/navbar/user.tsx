import { clearAllGoalieToken } from '@/lib/model/save-jwt'
import {  useRouter } from 'next/navigation';
import Link from 'next/link';

export default function page() {
  const { push } = useRouter()

    const logoutHandle = () => {
        clearAllGoalieToken();
        push('/signin');
  };
    return (
      <div className="flex flex-col relative self-center group ">
        {/* <!-- User Info --> */}
        <div className="flex items-center  cursor-pointer">
          <img className="w-6 h-6 rounded-full" src="https://via.placeholder.com/150" alt="User Avatar" />
          <div className="hidden md:block">
            <p className=" font-[400] text-mango-yellow">Tên Người Dùng</p>
          </div>
        </div>

        {/* <!-- Menu Items --> */}
        <div className="flex flex-col absolute bg-white right-[0px] top-[120%] invisible group-hover:visible w-[141px] rounded-[2px] overflow-hidden" >
          <a href="#" className="flex items-center p-1 mb-1 hover:text-mango-yellow hover:bg-gray-100 font-[400]">
            <span className="ml-3">Hồ sơ của tôi</span>
          </a>
          <a href="#" className="flex items-center p-1 mb-1 hover:text-mango-yellow hover:bg-gray-100 font-[400]">
            <span className="ml-3">Đơn hàng</span>
          </a>
          <a href="#" className="flex items-center p-1 mb-1 hover:text-mango-yellow hover:bg-gray-100 font-[400]">
            <span className="ml-3">Ví của tôi</span>
          </a>
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
  