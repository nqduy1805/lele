import Image from 'next/image';
import styles from './style.module.css';

const links = [
    {name:"lele shop",href:"/shop"},
    {name:"shop",href:"/category"},
  ];
export default function Hero() {
    // bg-[#e1dcc4cc] 
    return (
    <div className="bg-beige flex flex-col justify-center lg:justify-end items-center w-full md:mb-[3vw] relative min-h-[40vh] md:min-h-[60vh] ">
        <div className="relative flex flex-col justify-center items-start max-w-none z-10 ml-auto mr-auto">
            <div className="relative flex flex-col justify-center items-start w-full  pl-[3vw] pr-[3vw] pt-[0] lg:pt-[3vw] top-[0px] lg:top-[30px]">
                <h1 className={`${styles.animateFromLeft} animate-slide-in z-5 text-light-onyx-gray relative text-center mt-5 mb-0 text-[6rem] md:text-[8rem] lg:text-[15rem] font-bold leading-none w-full`}>Cô Màu</h1>
                <div className={`${styles.animateFromRight} font-thin  bg-mango-yellow text-light-onyx-gray min-h-[80px] text-center w-full relative pr-[30px] pl-[30px] pt-[30px] pb-[20px] mt-[-20px] m-h-[80px] text-xl md:text-[2rem] leading-[150%]`}>Sea food Phú Yên</div>
            </div>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-blue-500">
            <Image className="object-cover object-center w-full h-full" src="/nav/hero-section-home-1.webp" alt="Bowls of organic salads placed on a white table" sizes="100vw" layout="fill"/>
            <div className="bg-[#c0d5debf] absolute inset-0"></div> 
        </div>
    </div>
    );
  }
  