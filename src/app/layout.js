/* eslint-disable react/no-unescaped-entities */
import './globals.css'
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: 'Welcome to Copico systems - Your Ultimate Destination for Computer Solutions and Services',
  description: `At Copico systems, we're more than just a computer and peripherals shop – we're your dedicated partner in all things tech-related. With a passion for innovation and a commitment to excellence, we offer a comprehensive range of products and services to cater to your computer needs.`,
}

export default function RootLayout({ children }) {
  const description = `At Copico systems, we're more than just a computer and peripherals shop – we're your dedicated partner in all things tech-related. With a passion for innovation and a commitment to excellence, we offer a comprehensive range of products and services to cater to your computer needs.`
  const title = 'Welcome to Copico systems - Your Ultimate Destination for Computer Solutions and Services';
  return (
    <html lang="en">
      <head>
        <title data-react-helmet="true">{title}</title>
        <meta data-react-helmet="true" name="description" content={description} />
        <meta data-react-helmet="true" name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/logo.png"></link>
        <meta data-react-helmet="true" property="og:url" content={`https://www.copicosystems.com`} />
        <meta data-react-helmet="true" property="og:title" content={title} />
        <meta data-react-helmet="true" property="og:description" content={description} />
        <meta data-react-helmet="true" property="og:image" content={`https://img1.wsimg.com/isteam/ip/b6642cd2-9072-42e8-b193-ccbebae4292e/blob.png`} />
        <meta data-react-helmet="true" property="twitter:url" content={`https://www.copicosystems.com`} />
        <meta data-react-helmet="true" property="twitter:title" content={title} />
        <meta data-react-helmet="true" property="twitter:description" content={description} />
        <meta data-react-helmet="true" property="twitter:image" content={`https://img1.wsimg.com/isteam/ip/b6642cd2-9072-42e8-b193-ccbebae4292e/blob.png`} />
        <link rel="shortcut icon" type="image/png" href="/logo.png" />
        <link rel="canonical" href='https://www.copicosystems.com' />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11322209896" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'AW-11322209896');
          `}
        </Script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6021591618681649"
          crossorigin="anonymous"></script>
        <Script type="text/javascript" id="google-translate">
          {`function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element')
}`}
        </Script>
        <Script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></Script>
      </head>
      <body>

        {children}<Analytics />
</body>
    </html>
  )
}
