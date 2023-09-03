/* eslint-disable react/no-unescaped-entities */
import './globals.css'
import Head from 'next/head';
import Script from 'next/script';
export const metadata = {
  title: 'Welcome to Copico systems - Your Ultimate Destination for Computer Solutions and Services',
  description:  `At Copico systems, we're more than just a computer and peripherals shop – we're your dedicated partner in all things tech-related. With a passion for innovation and a commitment to excellence, we offer a comprehensive range of products and services to cater to your computer needs.`,
}
const baseSchema = {
  '@context': 'http://schema.org',
  name: 'Copicosystems.com',
  url: 'https://Copicosystems.com',
};
const webSchema = {
  ...baseSchema,
  '@type': 'WebSite',
};

const orgSchema = {
  ...baseSchema,
  '@type': 'Company',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9617874449',
      contactType: 'Customer Service',
    },
  ],
  logo: 'https://img1.wsimg.com/isteam/ip/b6642cd2-9072-42e8-b193-ccbebae4292e/blob.png',
  sameAs: [
    'https://www.facebook.com/copicosystems',
    'https://twitter.com/copicosystems',
    'https://www.linkedin.com/company/copicosystems',
  ],
};

export default function RootLayout({ children }) {
  const description = `At Copico systems, we're more than just a computer and peripherals shop – we're your dedicated partner in all things tech-related. With a passion for innovation and a commitment to excellence, we offer a comprehensive range of products and services to cater to your computer needs.`
  const title = 'Welcome to Copico systems - Your Ultimate Destination for Computer Solutions and Services';
  return (
    <html lang="en">
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
      <script type="application/ld+json">{JSON.stringify(webSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11322209896" />
<Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'AW-11322209896');
        `}
      </Script>

      <body>{children}</body>
    </html>
  )
}
