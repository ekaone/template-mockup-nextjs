import { AppProps } from "next/app";
import Head from "next/head";
import "../assets/styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Eka Prasetia"
          href="https://ekapm.dev/api/blog.xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
