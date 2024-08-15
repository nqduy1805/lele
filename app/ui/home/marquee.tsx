import styles from './style.module.css';

const marquees = [
    {text: '"top-notch ingredients"',authorText:"Emily S. - Los Angeles, CA"},
    {text: 'healthy and hassle-free',authorText:"Emily S. - Los Angeles, CA"},
    {text: '"game-changer for organic foodies!"',authorText:"Emily S. - Los Angeles, CA"},
    {text: '"always fresh and tasty"',authorText:"Emily S. - Los Angeles, CA"},
    {text: '"everyone needs to try this!"',authorText:"Emily S. - Los Angeles, CA"},
    {text: '"my go-to place for grocery"',authorText:"Emily S. - Los Angeles, CA"},
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
  