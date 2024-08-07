export default function Card() {
    return (
      <div className="self-center">
        <a className="flex font-normal p-5" role="button" aria-haspopup="dialog" aria-label="Open empty cart" data-node-type="commerce-cart-open-link" href="#">
          <img className="h-[25px] " width="25" height="25" alt="" src="https://cdn.prod.website-files.com/665078b0642719caa9abb098/6656e0755241efbf9140347e_cart-icon.png" loading="lazy"/>
          <div data-wf-bindings="%5B%7B%  22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
          className="bg-mango-yellow rounded-[9px] h-[18px] leading-[18px] min-w-[18px] text-center text-light-beige font-medium text-[11px] ml-[5px]">0</div>
        </a>
      </div>
    );
  }
  