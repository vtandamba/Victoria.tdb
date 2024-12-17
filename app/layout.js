import localFont from "next/font/local";
import "./styles/globals.scss";
import fav from '../public/favicon.ico'

 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const bold_caladea =  localFont({
  src: "./fonts/caladea-bold-webfont.woff",
  src: "./fonts/caladea-bold-webfont.woff2",
  variable: "--font-caladea",
  weight: "100 900",
});

const reg_caladea =  localFont({
  src: "./fonts/caladea-regular-webfont.woff",
  src: "./fonts/caladea-regular-webfont.woff2",
  variable: "--font-caladea",
  weight: "100 900",
});

 

const ita_caladea =  localFont({
  src: "./fonts/caladea-italic-webfont.woff",
  src: "./fonts/caladea-italic-webfont.woff",
  variable: "--font-caladea",
  weight: "100 900",
});
export const metadata = {
  title: "Victoria's Portfolio",
  description: "Welcome to Victoria's creative portfolio – showcasing passion, expertise, and projects crafted with care and dedication.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en"  className="scroll-smooth">
      <head>
        {/* Lien vers le favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body
        className={`${reg_caladea.variable} ${ita_caladea.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
