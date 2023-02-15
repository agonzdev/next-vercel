import { NextPage } from 'next';
import type { AppProps } from 'next/app'

import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return getLayout(<Component {...pageProps} />)
}
