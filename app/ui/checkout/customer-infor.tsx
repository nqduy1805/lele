
import styles from './style.module.css';

export default function page() {
    return (
                <div className={`${styles.infor} sticky  top-[3vw]`}>
                    <form className="bg-beige border border-dark-beige rounded-lg mb-5 w-full">
                        <div className="bg-[#fff0] border-none border  border-[#e6e6e6] flex justify-between items-baseline p-[4px] px-[20px]">
                            <h3 className="text-caribbean-blue mt-5 mb-2.5 text-[1.5rem] font-normal leading-[110%]">
                            Thông tin giao hàng
                            </h3>
                        </div>
                        <fieldset className="p-[20px]">
                            <label className="mb-[5px] mb-1.25 font-[400]  block">Số điện thoại<span className="text-[#f87666]">*</span></label>
                            <input className="focus:outline-none focus:border-transparent outline-none appearance-none bg-[#fafafa] border border-[#ddd] rounded-sm w-full h-[38px] mb-0 p-[8px] px-[12px] leading-[20px] mb-[16x]    block" maxLength={5000}  name="email" data-name="Email" placeholder="Nhập số điện thoại" type="text"  required />
                            <label className="mb-[5px] mb-1.25 font-[400]  block">Địa chỉ<span className="text-[#f87666]">*</span></label>
                            <input className="focus:outline-none focus:border-transparent outline-noneappearance-none bg-[#fafafa] border border-[#ddd] rounded-sm w-full h-[38px] mb-0 p-[8px] px-[12px] leading-[20px] block" maxLength={5000}  name="email" data-name="Email" placeholder="Nhập địa chỉ" type="text"  required />
                        </fieldset>
                    </form>
                </div>
    );
  }
  