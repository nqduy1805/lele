'use client';

export default function page() {
  
    return (
        <div className="border border-dark-beige rounded-[10px] p-[3vw] rounded-[10px]" >
            <div className="font-[400] text-caribbean-blue text-[1.5rem]  mt-[20px] mb-[10px] leading-[110%]">we’d love to hear from you! </div>
            <form className='flex justify-center flex-col pt-[30px]'>
                <input className="focus:outline-none mb-[10px] rounded-[5px] border border-gray-300" maxLength={5000}  name="email" data-name="Email" placeholder="please enter your name" type="text"  required />
                <input className="focus:outline-none mb-[10px] rounded-[5px] border border-gray-300" maxLength={5000}  name="email" data-name="Email" placeholder="please enter your email" type="email" required />
                <textarea className="focus:outline-none mb-[10px] rounded-[5px] border border-gray-300" maxLength={5000} name="email" data-name="Email" placeholder="please enter your message"required />
                <input className="leading-[1] font-[400] p-[10px] border-2 border-mango-yellow bg-mango-yellow text-light-beige text-center rounded-[5px] flex flex-col items-center" type="submit" data-wait="Please wait..."  value="say hi!" />
            </form>
       </div>
    );
  }
  