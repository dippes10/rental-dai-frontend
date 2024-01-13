// pages/_app.tsx

import { AppProps } from 'next/app';
import '../styles/globals.scss'; // Import your global styles here
import 'mapbox-gl/dist/mapbox-gl.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from '../components/footer';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
    <Component {...pageProps} />
    <Footer/>
    </>
  );
} 

export default MyApp;
