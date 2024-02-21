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
        <title>Digital marketing services USA | Digital marketing company New York</title>
        <meta
          name="keywords"
          content="web design companies USA, Social media promotions USA, web design USA, software development company USA, website design services USA, website design USA, web design in USA"
        />
        <meta
          name="description"
          content="Unlock the potential of your online presence with BBLabs, a leading Digital Marketing Company in New York, USA. Our tailored Digital Marketing Services provide innovative solutions to elevate your brand. Choose BBLabs for effective and results-driven Digital Marketing Solutions that propel your business forward in the competitive digital landscape."
        />
        <meta name="google-site-verification" content="ZUMEhYk3r7dlqr_OGlgRc4ipEvbxX-oYxg8Di-dF-vk" />
      </Head>

      <PreLoader loading={isLoading} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
