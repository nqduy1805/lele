import Link from 'next/link';
import Image from 'next/image';


export default async function page() {
  return (
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[45px] grid-cols-2  py-[3vw] px-[3vw]     border-b border-dark-beige">
           <Image
                src='/product/organic-quinoa-pasta.webp'
                alt="logo"
                layout="responsive"
                width={600}
                height={600} 
                className="object-cover max-h-[80vh] rounded-[15px] sticky top-[75px] "
            />
            <div>
                <h1 className="text-[6rem] mb-[10px] text-left text-onyx-gray leading-[100%] font-[700]">Organic Quinoa Pasta</h1>
                <p className="my-[20px]">Organic quinoa pasta, gluten-free and delicious, perfect for nutritious and satisfying meals.</p>
                <div>
                    <div className="h-[1px] bg-dark-beige"></div>
                    <h3 className="text-caribbean-blue mt-[20px] mb-[10px] text-[1.5rem] font-[400] leading-[110%]">nutrition facts</h3>
                    <p className="flex flex-col">
                        <span>Serving Size: 2 oz (57g) (dry)</span>
                        <span>Calories: 200 Total Fat: 3g </span>
                        <span>Carbohydrates: 35g </span>
                        <span>Fiber: 2g</span>
                        <span>Sugar: 1g</span>
                        <span>Protein: 8g</span> 
                    </p>
                    <div className="h-[1px] bg-dark-beige"></div>
                </div>
                <div>
                    <form>
                        <h3  className="text-caribbean-blue mt-[20px] mb-[10px] text-[1.5rem] font-[400] leading-[110%]">price</h3>
                        <div className="mb-[10px]">
                            <div>
                                <input className="bg-[#fafafa] boder boder-[#ddd] rounded-[3px] w-[45px] h-[30px]" type="number" pattern="^[0-9]+$"   min="1" value={1}/>
                                <label className="text-grey leading-[120%] ml-[10px]" >Quantity</label>
                            </div>
                            <span className="mr-[5px] text-[12px] leading-[150%] line-through">
                                $ 5.99 USD
                            </span>
                            <span className="text-onyx-gray font-[400] mr-[5px] leading-[120%]">
                                $ 5.00 USD
                            </span>
                            <span className="text-gray  leading-[120%]">per 12 oz</span>
                        </div>
                        <div><input  className="min-w-[200px] bg-mango-yellow border border-mango-yellow border-[2px]   text-center p-[10px] leading-[1] cursor-pointer text-[#fff] rounded-[5px] w-full" type="submit" value="add to cart"/></div>
                    </form>
                </div>
            </div>
        </div>
  );
}