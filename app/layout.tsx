import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "UmagineTN 2025",
  description: "Embark on a journey of Transformation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[]; 
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); 
                  var f=d.getElementsByTagName(s)[0], 
                  j=d.createElement(s), 
                  dl=l!='dataLayer'?'&l='+l:''; 
                  j.async=true; 
                  j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl; 
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','AW-16454344405');
              `,
          }}
          defer
        />

        <Script
          src="https://cdn.lightwidget.com/widgets/lightwidget.js"
          strategy="lazyOnload"
        />

        <link
          rel="preload"
          href="/fonts/Fontspring-DEMO-neometricalt-black.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MyraidPro-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-myraidpro">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-16454344405"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
