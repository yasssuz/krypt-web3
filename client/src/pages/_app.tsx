import type { AppProps } from "next/app";
import "../config/tailwind.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
