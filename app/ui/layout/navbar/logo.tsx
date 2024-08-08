
import Image from 'next/image';

export default function Logo({ screen }: { screen: string }) {
    let screenClass: string = "";
  if(screen == 'lg'){
      screenClass = "hidden sm:hidden lg:flex";
    }else{
      screenClass = "sm:flex lg:hidden";

    }
    return (
          <a href="#" title="" className={` ${screenClass}  item-center  pt-5 pb-5 z-5`}>
            <Image
              src="/nav/vitale-logo.png"
              width={30}
              height={30}
              alt="logo"
            />
          </a>
    );
  }
  