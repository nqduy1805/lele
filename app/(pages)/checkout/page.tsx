import Order  from '@/app/ui/checkout/order';
import Infor  from '@/app/ui/checkout/customer-infor';

export default async function Page() {
  return (
    <main>
        <div className=" z-10 border border-dark-beige rounded-xl flex flex-col mt-[10vh] mb-[3vw] pb-[3vw] pl-[3vw] pr-[3vw] relative  mx-auto max-w-[940px]">
            <div className="flex flex-col justify-center items-start w-full p-[3vw] relative">
                <h1 className="font-[700] text-left text-[8rem] leading-[120%]">Gần xong rồi...</h1>
                <p className="font-[400]  mt-2.5 mb-5 text-[1.25rem]">Vui lòng nhập một vài thông tin chi tiết để xác nhận đơn hàng của bạn..</p>
            </div>
            <div className="  flex  items-start   max-w-[940px] ">
              <Infor/>
              <Order/>
            </div>
        </div>
        
    </main>
  );
}