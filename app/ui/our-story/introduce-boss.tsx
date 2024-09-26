'use client';
import Image from 'next/image';

export default function page() {
  
    return (
      <div className="border-b border-[1px] border-solid border-dark-beige">
        <div className="p-[3vw] pb-[0] text-center text-[4rem] font-[400] leading-[100%]">to the ones who made it all happen</div>
        <div className="p-[3vw] flex justify-center items-center">
            <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] grid-cols-2 ">
                <div className="">
                <div className="relative lg:min-w-[402px]">
                    <Image
                            src="/boss/found2.webp"
                            alt="logo"
                            width={402} 
                            height={402}
                            className="w-full h-auto"
                        />
                        <div className="absolute bg-light-green z-[-1] rounded-t-[15px] h-[70%]  top-auto right-0 bottom-0 left-0"></div>
                    </div>
                    <h3 className="text-caribbean-blue text-center text-[1.5rem] font-[400] mt-[20px] mb-[10bx] leading-[110%]">
                        amma
                    </h3>
                </div>
                <div className="">

                    <div className="relative lg:min-w-[402px]">
                        <Image
                            src="/boss/found1.webp"
                            alt="logo"
                            width={402} 
                            height={402}
                            className="w-full h-auto"
                        />
                        <div className="absolute bg-dark-beige z-[-1] rounded-t-[15px] h-[70%]  top-auto right-0 bottom-0 left-0"></div>
                    </div>
                    <h3 className="text-caribbean-blue text-center text-[1.5rem] font-[400] mt-[20px] mb-[10bx] leading-[110%]">
                        papu
                    </h3>
                </div>
            </div>
        </div>
      </div>
    );
  }
  