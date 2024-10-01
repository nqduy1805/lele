import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Navbar  from '@/app/ui/layout/navbar/index';
import { roboto } from '@/app/ui/fonts';
import Hero  from '@/app/ui/layout/navbar/hero';
import Footer  from '@/app/ui/layout/footer/index';
import { Providers } from "@/lib/redux/Providers";
import SaveRecentVisitPage  from '@/components/SaveRecentVisitPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS của Toastify

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en">
    <body className={`${roboto.className}   text-base bg-light-beige font-light text-onyx-gray`}>
    <SaveRecentVisitPage/>
      <Providers>
        <Navbar />
        <Hero/>
        <main>
          {children}
        </main>
        <ToastContainer  position="top-right"  // Vị trí toast
          autoClose={2000}      // Tự động đóng sau 5 giây
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
        <Footer/>
      </Providers>
    </body>
  </html>
  );
}