import {  Bars3Icon} from '@heroicons/react/24/outline';
interface MenuButtonProps {
  onClick: () => void;
}
export default function MenuButton({ onClick }: MenuButtonProps) {
    return (
      <div className="sm:flex lg:hidden self-center relative w-[25px] text-mango-yellow cursor-pointer" onClick={onClick}>
        <Bars3Icon />
      </div>
    );
  }
  