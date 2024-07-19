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
  title: "School of Tommorrow | Pune, August 5-7 | Innovate, Collaborate and Transform",
  description: "Schools of Tomorrow aims to invest in School Leaders - the conductors who make India’s schools run",
  alternates: {
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'School of Tommorrow | Pune, August 5-7 | Innovate, Collaborate and Transform',
    description: 'Schools of Tomorrow aims to invest in School Leaders - the conductors who make India’s schools run',
    images: '/meta-img.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="alternate" hreflang="en-US" href="/en-US" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}
        <meta property="og:image" content="/meta-img.png" />
        <meta property="twitter:image" content="/meta-img.png" />
      </head>
      <body className={`${PPEdNewRegular.variable} ${PPEdNewUltrabold.variable} ${PPEdNewUltralight.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
