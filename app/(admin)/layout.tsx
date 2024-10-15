import '@/app/ui/global.css';
import { oswald } from '@/app/ui/fonts';
import { roboto } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en">
    <body className={`${roboto.className}   text-base bg-light-beige font-light text-onyx-gray`}>
        <main>
          {children}
        </main>
    </body>
  </html>
  );
}