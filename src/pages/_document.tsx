import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head>        
        <meta
          name="title"
          content="Free Software Engineering Bootcamp in Taipei, Taiwan"
        />
        <meta
          name="description"
          content="Join our free Code & Design events and learn Javascript, Typescript, ReactJS, NextJS, Figma, HTML, CSS and more every Wednesday here in Taipei, Taiwan"
        />
        <meta
          name="keywords"
          content="bootcamp, taipei, startuper, figma, frontend, backend, startup, free, free bootcamp, learn to code, programming tutorials, learn programming, web development, learn web development, typescript, nextjs, vue, vuejs, programming, dev, ux ui, react, react js, ruby, aws academy, codeacademy, freecodecamp, javascript, c++, c#, js, coding, hello world, application programming interface, js node"
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
          content="Free Software Engineering Bootcamp in Taipei, Taiwan"
        />
        <meta
          property="og:site_name"
          content="Taipei.dev | Free Software Engineering Bootcamp in Taipei, Taiwan"
        />
        <meta property="og:url" content="https://taipei.dev/" />
        <meta
          property="og:description"
          content="Join our free Code & Design events and learn Javascript, Typescript, ReactJS, NextJS, Figma, HTML, CSS and more every Wednesday here in Taipei, Taiwan"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://taipei.dev/taipei-dev-og-photo-size-best.jpg"
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
          content="Join our free Code & Design events and learn Javascript, Typescript, ReactJS, NextJS, Figma, HTML, CSS and more each Wednesday here in Taipei, Taiwan"
        />
        <meta
          name="twitter:title"
          content="Free Software Engineering Bootcamp in Taipei, Taiwan"
        />
        <meta
          name="twitter:image"
          content="https://taipei.dev/taipei-dev-og-photo-size-best.jpg"
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
          href="https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap"
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
