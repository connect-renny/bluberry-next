import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "@/styles/scss/styles.scss";
import "aos/dist/aos.css";

import PreLoader from "./components/PreLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer.push({
        event: "page_view",
        page: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>
          Digital marketing services United States | Digital marketing company New York
        </title>
        <meta
          name="keywords"
          content="web design companies USA, Social media promotions USA, web design USA, software development company USA, website design services USA, website design USA, web design in USA"
        />
        <meta
          name="description"
          content="Best Digital Marketing Company in New York, USA. Our tailored Digital Marketing Services provide innovative solutions for your brand. Contact us to learn more about Digital marketing services that can help your business grow."
        />
        <meta
          name="google-site-verification"
          content="ZUMEhYk3r7dlqr_OGlgRc4ipEvbxX-oYxg8Di-dF-vk"
        />
      </Head>

      <PreLoader loading={isLoading} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
