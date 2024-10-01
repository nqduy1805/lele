'use client';

export default function page() {
  
    return (
        <div className="border border-dark-beige rounded-[10px] p-[3vw] rounded-[10px]" >
            <div className="font-[400] text-caribbean-blue text-[1.5rem]  mt-[20px] mb-[10px] leading-[110%]">Chúng tôi rất muốn nghe từ bạn! </div>
            <form className='flex justify-center flex-col pt-[30px]'>
                <input className="focus:outline-none mb-[10px] rounded-[5px] border border-gray-300" maxLength={5000}  name="email" data-name="Email" placeholder="Vui lòng nhập tên của bạn" type="text"  required />
                <input className="focus:outline-none mb-[10px] rounded-[5px] border border-gray-300" maxLength={5000}  name="email" data-name="Email" placeholder="Vui lòng nhập email của bạn" type="email" required />
                <textarea className="focus:outline-none mb-[10px] rounded-[5px] border border-gray-300" maxLength={5000} name="email" data-name="Email" placeholder="Vui lòng nhập message của bạn"required />
                <input className="leading-[1] font-[400] p-[10px] border-2 border-mango-yellow bg-mango-yellow text-light-beige text-center rounded-[5px] flex flex-col items-center" type="submit" data-wait="Vui lòng đợi..."  value="Gửi ý kiến!" />
            </form>
       </div>
    );
  }
  