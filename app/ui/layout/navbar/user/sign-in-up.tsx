import { clearAllGoalieToken } from '@/lib/model/save-jwt'
import {  useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './style.module.css';
import {  UserIcon} from '@heroicons/react/24/outline';

export default function page() {
  const { push } = useRouter()

    const logoutHandle = () => {
        clearAllGoalieToken();
        push('/signin');
  };
    return (
      <div className="flex items-center  cursor-pointer text-mango-yellow">
            <Link
              className="flex items-center p-1 hover:text-mango-yellow hover:text-mango-yellow/70   font-[400]"
              href="/signin"
            >
              Đăng nhập
            </Link>
            <div className="border-r border-mango-yellow/40 h-[0.8125rem]"></div>
            <Link
              className="flex  items-center p-1 hover:text-mango-yellow hover:text-mango-yellow/70  font-[400]"
              href="/signup/infor"
            >
              Đăng ký
            </Link>
      </div>
    );
  }
  