import '@/app/ui/global.css';
import { roboto } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en">
    <body className={`${roboto.className}   text-base bg-[#f6f7fc] font-light text-onyx-gray`}>
        <main>
          {children}
        </main>
    </body>
  </html>
  );
}