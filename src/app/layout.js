import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import "./globals.css";


const PPEdNewRegular = localFont({
  src:'../../public/font/PPEditorialNew-Regular.woff2',
  weight: '400',
  variable: '--font-ed-reg'
})
const PPEdNewUltrabold = localFont({
  src:'../../public/font/PPEditorialNew-Ultrabold.woff2',
  weight: '800',
  variable: '--font-ed-ub'
})
const PPEdNewUltralight = localFont({
  src:'../../public/font/PPEditorialNew-Ultralight.woff2',
  weight: '300',
  variable: '--font-ed-ul'
})

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '300', '400', '500', '600', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: "School of tomorrow",
  description: "Welcome to School of tomorrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${PPEdNewRegular.variable} ${PPEdNewUltrabold.variable} ${PPEdNewUltralight.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
