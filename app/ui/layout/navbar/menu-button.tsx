import Image from 'next/image';
import {  Bars3Icon} from '@heroicons/react/24/outline';

export default function MenuButton() {
    return (
      <div className="sm:flex lg:hidden self-center relative w-[25px] text-mango-yellow">
        <Bars3Icon />

      </div>
    );
  }
  