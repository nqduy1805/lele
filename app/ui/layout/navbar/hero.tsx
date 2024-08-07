export default function Hero() {
    return (
    <div className="flex flex-col justify-end items-center w-full min-h-[60vh] mb-[3vw] relative">
        <div className="relative flex flex-col justify-center items-start max-w-none z-10 ml-auto mr-auto">
            <div className="relative flex flex-col justify-center items-start w-full pt-[3vw] pl-[3vw] pr-[3vw] top-[30px]">
                <h1 className="z-5 text-light-onyx-gray relative text-center mt-5 mb-0 text-[15rem] font-bold leading-none">vitale</h1>
                <div data-w-id="b239d87a-e7f3-6f97-7ae3-98ea72b8738a"  className="font-thin  bg-mango-yellow text-light-onyx-gray min-h-[80px] text-center w-full relative pt-[30px] pb-[20px] mt-[-20px] m-h-[80px] text-[2rem] leading-[150%] ">organic food you can trust.</div>
            </div>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-blue-500">
            <img className="object-cover object-center w-full h-full" src="https://cdn.prod.website-files.com/665078b0642719caa9abb098/66587d0f2ecbfebd5526fa3c_hero-section-home-1.webp" alt="Bowls of organic salads placed on a white table" sizes="100vw"></img>
        </div>
    </div>
    );
  }
  