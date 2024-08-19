'use client';

import styles from './style.module.css';

const marquees = [
    {text: '"Thành phần thượng hạng"',authorText:"Cô Màu"},
    {text: '"Khỏe mạnh và trải nghiệm"',authorText:"Cô Màu"},
    {text: '"Sản phẩm đánh bắt trực tiếp!"',authorText:"Cô Màu"},
    {text: '"Luôn tươi và thơm ngon"',authorText:"Cô Màu"},
    {text: '"Mọi người cần phải thử cái này!"',authorText:"Cô Màu"},
    {text: '"Hãy mua sản phẩm của Cô Màu Phú Yên"',authorText:"Cô Màu"},
  ];
export default function Marquee() {

    return (
        <div className={`  bg-mango-yellow py-[2vw] overflow-hidden `}>
            <div className={`${styles.marquee} relative flex items-center justify-start  gap-x-[7vw]`}>

                {marquees.map((marquee, idx) => {
                    return (
                        <div key={idx} className="pl-[10px] pr-[10px] flex flex-col items-center whitespace-nowrap">
                            <div className="text-[35px] md:text-[45px] font-[400] leading-[120%]">{marquee.text}</div>
                            <div className="text-light-beige ">{marquee.authorText}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
  }
  