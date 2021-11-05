import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Front-End Starter Pack</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
