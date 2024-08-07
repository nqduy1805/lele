import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Navbar  from '@/app/ui/layout/navbar/index';
import { oswald } from '@/app/ui/fonts';
import Hero  from '@/app/ui/layout/navbar/hero';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en">
    <body className={`${oswald.className}  lowercase`}>
        <Navbar />
        <Hero/>
        <main>
          {children}
        </main>
    </body>
  </html>
  );
}