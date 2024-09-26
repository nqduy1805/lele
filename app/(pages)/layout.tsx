import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Navbar  from '@/app/ui/layout/navbar/index';
import { oswald } from '@/app/ui/fonts';
import Hero  from '@/app/ui/layout/navbar/hero';
import Footer  from '@/app/ui/layout/footer/index';
import { Providers } from "@/lib/redux/Providers";
import SaveRecentVisitPage  from '@/components/SaveRecentVisitPage';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en">
    <body className={`${oswald.className}   text-base bg-light-beige font-light text-onyx-gray`}>
    <SaveRecentVisitPage/>
      <Providers>
        <Navbar />
        <Hero/>
        <main>
          {children}
        </main>
        <Footer/>
      </Providers>
    </body>
  </html>
  );
}