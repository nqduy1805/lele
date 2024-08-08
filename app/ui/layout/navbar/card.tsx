import Image from 'next/image';

export default function Card() {
    return (
      <div className="self-center">
        <a className="flex font-normal p-5" role="button" aria-haspopup="dialog" aria-label="Open empty cart" data-node-type="commerce-cart-open-link" href="#">
            <Image
              className="h-[25px] "
              src="/nav/cart-icon.png"
              width={25}
              height={25}
              alt="card"
              loading="lazy"
            />
          <div className="bg-mango-yellow rounded-[9px] h-[18px] leading-[18px] min-w-[18px] text-center text-light-beige font-medium text-[11px] ml-[5px]">0</div>
        </a>
      </div>
    );
  }
  