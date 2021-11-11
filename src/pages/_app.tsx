import Head from "next/head";
import "tailwindcss/tailwind.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Head>
        <title>Front-End Starter Pack</title>
      </Head>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
