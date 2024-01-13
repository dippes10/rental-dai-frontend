// pages/_app.tsx

import { AppProps } from 'next/app';
import '../styles/globals.scss'; // Import your global styles here
import 'mapbox-gl/dist/mapbox-gl.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} />
    <Footer/>
    </>
  );
} 

export default MyApp;
