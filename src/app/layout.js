
import { Marcellus, Lexend_Deca } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

export const metadata = {
  title: "iAdept Marketing",
  description: "iAdept Marketing offers intelligent solutions for condition monitoring and predictive maintenance to reduce downtime in industries and increase equipment reliability.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${lexendDeca.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager - HEAD */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TT6XZRTX');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager - BODY */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TT6XZRTX"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager */}

        {children}
      </body>
    </html>
  );
}
