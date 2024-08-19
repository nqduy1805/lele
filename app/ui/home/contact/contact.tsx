'use client';

export default function page() {
    return (
        <div className="bg-caribbean-blue p-[3vw] flex flex-col rounded-[10px]  justify-center" >
            <div className="text-center text-[2rem] text-light-beige mb-[20px] leading-[110%]">want to learn more about sustainable  lifestyle choices and delicious organic recipes?</div>
            <p className="text-center text-[2rem] text-light-beige mb-[20px] leading-[110%]">subscribe to our newsletter</p>
            <form className='flex justify-center flex-col'>
                <input className="focus:outline-none mb-[10px] rounded-[5px] border border-gray-300" maxLength={255} name="email" data-name="Email" placeholder="enter your email here..." type="email" id="email" required />
                <input className="font-[400] p-[10px] border-2 border-mango-yellow bg-mango-yellow text-light-beige text-center rounded-[5px] flex flex-col items-center" type="submit" data-wait="Please wait..."  value="count me in!" />
            </form>
       </div>
    );
  }
  