
import Link from 'next/link';
import ProductsTop  from '@/app/ui/product-list/top';

export default  function Page() {
  return (
    <main>
      <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[0] gap-y-[0]  lg:grid-cols-2">
        <div className="h-screen flex items-center justify-center">
          <div className="flex-none basis-[58%] lg:max-w-[58]">
            <h3 className="text-[2rem] font-[500] leading-[1.2] mb-[1rem]">Login to <strong>Colorlib</strong></h3>
            <p className="text-[1rem] mb-[1.5rem] text-[#b3b3b3] "> Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            <form>
              <div className="mb-[1rem]">
                <label className=" text-[1rem] mb-[1rem] inline-block font-[400]">Username</label>
                <input className="focus:outline-none focus:ring-0  text-[1rem]  border-none shadow-sm rounded h-[54px] bg-white block w-full px-3 py-1.5   leading-6 " maxLength={5000}  name="email" data-name="Email" placeholder="Your-email@gmail.com" type="text"  required />
              </div>
              <div className="mb-[1rem]">
                <label className=" text-[1rem] mb-[1rem] inline-block font-[400]">Password</label>
                <input className="focus:outline-none focus:ring-0  text-[1rem]  border-none shadow-sm rounded h-[54px] bg-white block w-full px-3 py-1.5 text-base  leading-6 " maxLength={5000}  name="email" data-name="Email" placeholder="Your Password" type="text"  required />
              </div>
              <div className=" mb-[3rem] ">
                <label className="flex justify-between">
                  <div>
                    <input className="text-[#fb771a] rounded-[4px] mr-[8px]" maxLength={5000}  name="email"  type="checkbox" checked />
                    <span className="text-[#888] text-[14px] font-[400]">Remember me</span>
                  </div>
                  <span className="text-[#888] text-[14px] font-[400]">Forgot Password</span>
                </label>
              </div>
              <input className="rounded-[0.25rem] border border-transparent w-full h-[54px] px-[30px] cursor-pointer text-white bg-[#fb771a] border-[#fb771a] hover:text-white hover:bg-[#eb6304] hover:border-[#de5e04]" type="submit"/>
            </form>
          </div>
        </div>
        <div className="row-start-1 lg:col-start-2 h-[200px] lg:h-[100%] bg-cover bg-center"style={{ backgroundImage: `url(/login/signin.webp)`}}>
        </div>
        
      </div>
    </main>
  );
}