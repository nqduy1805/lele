import Logo  from '@/app/ui/layout/navbar/logo';
import Menu  from '@/app/ui/layout/navbar/menu';
import Card  from '@/app/ui/layout/navbar/card';

export default function Navbar() {
  return (
<div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="z-50 bg-light-beige relative">
  <div className="max-w-full mx-auto">
    <div className="flex justify-between w-full pl-[3vw] pr-[3vw]">
        <Logo/>
        {/* <div  aria-label="menu" role="button" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false" ><div></div></div> */}
        <Menu/>
        <Card/>
    </div>
  </div>
</div>
  );
}
