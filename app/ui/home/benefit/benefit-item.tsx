'use client';
import { useState } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';

interface Benefit {
  stt: string;
  title: string;
  descript: string;
}
export default function benefitItem({
  benefit,
}: {
  benefit: Benefit;
}) {

    const [isVisible, setIsVisible] = useState(false);
    const toggleBenefit = () => {
        setIsVisible(!isVisible);
    };

    return (
      <div className="flex flex-col items-center justify-center " onClick={toggleBenefit}>
        <div className="z-6 flex flex-col items-center justify-center h-[200px] relative cursor-pointer" >
            <div className="text-[#bcd4e587] text-[250px] font-[700] absolute leading-[80%]">{benefit.stt}</div>
            <h3 className={clsx(
                      "text-center max-w-[150px] text-caribbean-blue text-[1.5rem] leading-[110%] font-[400] transition-all duration-[1.5s]",{
                        'translate-y-[-10px] opacity-0': !isVisible,
                        'translate-y-[-60px] opacity-1': isVisible,

                      },)}>{benefit.title}</h3>
            <div className="absolute top-1/2 left-1/2">
                <div className="w-[12px] h-[12px] bg-mango-yellow relative rounded-full">
                </div>
                <div className={`${styles.circle1} absolute w-[12px] h-[12px] bg-mango-yellow rounded-full translate-x-[-50%] translate-y-[-50%] inset-[50%_0_0_50%]`} >
                </div>
                <div className={`${styles.circle2} absolute w-[12px] h-[12px] bg-mango-yellow rounded-full translate-x-[-50%] translate-y-[-50%] inset-[50%_0_0_50%]`} >
                </div>
            </div>
        </div>
        <div className={clsx(
                      " transition-all duration-[1.5s] z-5",{
                        'translate-y-[-80px] opacity-0': !isVisible,
                        'translate-y-[-50px] opacity-1': isVisible,
                      },)}>
            <p className="text-center ">{benefit.descript}</p>
        </div>
    </div>
    );
  }
  