import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastProvider } from "../components/ToastMessage/ToastContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Teste Front-End - BNP</title>
      </Head>

      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </>
  );
}
