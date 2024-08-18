'use client';
import { useState } from 'react';
import clsx from 'clsx';

export default function Question({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className=" mb-[10px] " >
            <div className=" mb-[10px]" >
                <div className="relative text-onyx-gray flex justify-between items-center p-[5px] pl-[20px] pr-[10px]  border border-dark-beige rounded-[10px] cursor-pointer " onClick={toggleMenu}>
                    <p className={clsx(
                      "font-[400]",{
                        'text-mango-yellow': isVisible,
                        'text-[rgb(65,64,64)]':!isVisible
                      },
                    )}>{question}</p>
                    <div className={clsx(
                      " relative w-[35px] h-[35px] flex justify-center items-center transition-transform duration-[800ms] ",{
                        'rotate-45 ': isVisible,
                      })} >
                        <div className="w-[60%] h-[2px]  bg-mango-yellow" ></div>
                        <div className="w-[2px] h-[60%] absolute bg-mango-yellow" ></div>
                    </div>
                </div>
                <div className={clsx(
                      "pl-[20px] overflow-hidden transition-max-height duration-[1s]",{
                        'max-h-0  ' : !isVisible,
                        'max-h-48' : isVisible,
                      },
                    )} >
                    <p>
                        {answer}
                    </p>
                </div>
            </div>
       </div>
    );
  }
  