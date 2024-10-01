
import Image from 'next/image';

export default function Logo({ screen }: { screen: string }) {
    let screenClass: string = "";
  if(screen == 'lg'){
      screenClass = "hidden sm:hidden lg:flex";
    }else{
      screenClass = "sm:flex lg:hidden";

    }
    return (
          <a href="#" title="" className={` ${screenClass}  item-center py-[10px]`}>
            <Image
              src="/nav/logo.png"
              width={50}
              height={50}
              alt="logo"
              loading="lazy"
            />
          </a>
    );
  }
  