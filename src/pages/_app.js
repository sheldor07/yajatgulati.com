import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yajat Gulati - Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="18-year-old CS and Business student building software applications using new technologies. Currently open for exciting internships for the summer of 2023."
        />
        <meta
          name="keywords"
          content="software, developer, web development, AI, OpenAI, NextJS, TailwindCSS, Supabase, ReactJS, love letter, book club"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6L79FHE18Q"
      ></Script>
      <Script id="google-analytics">
        {`

          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6L79FHE18Q');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
