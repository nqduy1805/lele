
import { Metadata } from 'next';
import Detail from '@/app/ui/admin/orders/detail';

export const metadata: Metadata = {
  title: 'orders',
};

export default async function Page({ params }: { params: { id: string } }) {
 
  
  return (
    <div >
     <Detail orderId={params.id}/>
    </div> 
  );
}
