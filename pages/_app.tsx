// pages/_app.tsx

import { AppProps } from 'next/app';
// import Header from '../components/header';
import '../styles/global.scss'; // Import your global styles here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
