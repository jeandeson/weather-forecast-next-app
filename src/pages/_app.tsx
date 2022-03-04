import Global from "../styles/globals";
import GlobalContext from "../contexts";

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Global />
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
