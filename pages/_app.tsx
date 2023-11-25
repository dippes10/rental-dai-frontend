// pages/_app.tsx

import { AppProps } from 'next/app';
import Header from '../components/header'; // Make sure the import is correct
import { Header as HeaderData } from '../constants'; // Import your Header data
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
