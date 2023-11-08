// pages/_app.tsx

import { AppProps } from 'next/app';
import Header from '../components/header'; // Make sure the import is correct
import { Header as HeaderData } from '../constants'; // Import your Header data
import '../styles/globals.scss'; // Import your global styles here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header HeaderNav={HeaderData.HeaderNav} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
