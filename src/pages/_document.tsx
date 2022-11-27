import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head>        
        <meta
          name="title"
          content="Marcin | My Developer Portfolio"
        />
        <meta
          name="description"
          content="I write awesome code! I've been coding, designing and build products for over a decade. I enjoying working in Typescript based technologies sand contribute to Open Source on Github"
        />
        <meta
          name="keywords"
          content="Programming, Code, Design, NextJS, ReactJS, Developer, Portfolio, Resume, NodeJS, Taiwan, Taipei, Taipei.dev"
        />
        <meta
          name="author"
          content="Marcin K Cebula (https://marcincebula.com)"
        />
        <meta name="reply-to" content="support@taipei.dev" />
        <meta name="date" content="Nov. 20, 2022" />

        <meta name="robots" content="all" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="white" />

        <link rel="icon" sizes="192x192" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/favicon.ico" color="#0f172a" />

        <meta
          property="og:title"
          content="Marcin | My Developer Portfolio"
        />
        <meta
          property="og:site_name"
          content="Marcin | My Developer Portfolio"
        />
        <meta property="og:url" content="https://marcincebula.vercel.app/" />
        <meta
          property="og:description"
          content="I write awesome code! I've been coding, designing and build products for over a decade. I enjoying working in Typescript based technologies sand contribute to Open Source on Github"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://marcincebula.vercel.app/SEOPhoto.png"
        />

        <meta property="og:locale" content="en_US" />
        <meta name="og:latitude" content="25.04409" />
        <meta name="og:longitude" content="121.53221" />
        <meta name="og:locality" content="Zhongzheng District, Taipei City" />
        <meta name="og:region" content="Taipei" />
        <meta name="og:postal-code" content="100" />
        <meta name="og:country-name" content="Taiwan" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://taipei.dev/" />
        <meta
          name="twitter:description"
          content="I write awesome code! I've been coding, designing and build products for over a decade. I enjoying working in Typescript based technologies sand contribute to Open Source on Github"
        />
        <meta
          name="twitter:title"
          content="Marcin | My Developer Portfolio"
        />
        <meta
          name="twitter:image"
          content="https://marcincebula.vercel.app/SEOPhoto.png"
        />

        {/* Swap Default Font Here */}
        {/* TODO: Testing Fonts */}
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Mulish:200,300,400,500,600,700&display=swap"
        /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
