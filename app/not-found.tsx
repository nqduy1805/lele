import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main >
      <div className="flex justify-center p-[5vw]">
        <div className="flex text-center max-w-[700px] p-[5vw] flex-col">
          <div className="mb-[2vw]">
            <h2 className="mb-[10px] text-[3rem] md:text-[4rem] font-[400] leading-[100%] text-onyx-gray">Ối! chúng tôi không thể tìm thấy trang đó</h2>
            <p className="font-[400] ">Trang bạn đang tìm kiếm có thể đã được di chuyển. Nhấp vào nút bên dưới để quay lại trang chủ!</p>
          </div>
          <Link
            className="rounded-[5px] bg-mango-yellow text-light-beige font-[400]  py-[5px] md:py-[10px] hover:bg-[#414040] hover:text-[#f4ede0] "
            href="/"
            >
            Xem sản phẩm
            </Link>
        </div>
      </div>
      
    </main>
  );
}