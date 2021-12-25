import type { AppProps } from 'next/app'
import '../../styles/global.scss';

import { AppCtxProvider } from '../context';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <AppCtxProvider>
        <Header />
        <Component {...pageProps} />
      </AppCtxProvider>
    </>
  );
}

export default MyApp
