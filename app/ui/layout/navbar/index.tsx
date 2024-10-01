'use client';

import Logo  from '@/app/ui/layout/navbar/logo';
import Menu  from '@/app/ui/layout/navbar/menu';
import Card  from '@/app/ui/layout/navbar/cart';
import MenuButton  from '@/app/ui/layout/navbar/menu-button';
import Menu2  from '@/app/ui/layout/navbar/menu2';
import { useState } from 'react';


export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
<div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="z-50 bg-light-beige relative" >
  <div className="max-w-full mx-auto">
    <div className="flex justify-between w-full pl-[3vw] pr-[3vw]">
        <Logo screen="lg"/>
        <MenuButton onClick={toggleMenu} />
        <Menu/>
        <Logo screen="sm"/>
        <Card/>
    </div>
    {isMenuVisible && <Menu2 toggleMenu={toggleMenu}/>}
  </div>
</div>
  );
}
