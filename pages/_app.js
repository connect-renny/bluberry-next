import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/scss/styles.scss';
import 'aos/dist/aos.css';

import PreLoader from './components/PreLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App({ Component, pageProps }) {
  // Preloader
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  // AOS animation
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
    <>
      <Head>
        <title>BluBerry</title>
        <meta
          name="keywords"
          content="web design companies USA, Social media promotions USA, web design USA, software development company USA, website design services USA, website design USA, web design in USA"
        />
        <meta
          name="description"
          content="Bluberry is a premier Digital Marketing Agency in USA that specializes in strategizing your digital presence to scale your business. Get In Touch Today!"
        />
      </Head>

      <PreLoader loading={isLoading} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
