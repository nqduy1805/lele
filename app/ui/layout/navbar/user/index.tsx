import Infor  from '@/app/ui/layout/navbar/user/infor';
import SignInUp  from '@/app/ui/layout/navbar/user/sign-in-up';

export default function page({authen}:{authen:boolean}) {

    return (
    <>
        {authen && <Infor />}
        {!authen && <SignInUp />}
    </>

    );
  }
  