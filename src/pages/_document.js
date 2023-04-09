import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Yajat Gulati - Developer</title>
        <meta
          name="description"
          content="18-year-old CS and Business student building software applications using new technologies. Currently open for exciting internships for the summer of 2023."
        />
        <meta
          name="keywords"
          content="software, developer, web development, AI, OpenAI, NextJS, TailwindCSS, Supabase, ReactJS, love letter, book club"
        ></meta>
      </Head>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6L79FHE18Q"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-6L79FHE18Q');
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
