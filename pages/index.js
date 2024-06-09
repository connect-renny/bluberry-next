import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import BannerCarousel from "./components/BannerCarousel";
import IndustriesSection from "./components/IndustriesSection";
import ClientSlider from "./components/ClientSlider";
import Blog from "./components/Blog";
import IncludeContact from "./components/IncludeContact";

import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { BiCaretRightCircle } from "react-icons/bi";

import Marquee from "react-fast-marquee";
import Link from "next/link";

import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

import LightGallery from "lightgallery/react";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lg-thumbnail.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Home() {
  const [counterOn, setCounterOn] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://thebblabs.com" />
        
      </Head>

      <div className={`sticky-container ${isActive ? "active" : ""}`}>
        <div className="sticky-cover">
          <div className="st-contact">
            <p>New York, USA</p>
            <h4>+1 (347) 882-8281</h4>
            {/* <h4>team@bblabs.com</h4> */}
          </div>
          <div className="st-contact">
            <p>Dubai, UAE</p>
            <h4>+971 55 787 6289</h4>
          </div>
          <div className="st-contact">
            <p>Oman</p>
            <h4>00968 - 93800148 / 94187820</h4>
          </div>
          <div className="st-contact">
            <p>Kerala, India</p>
            <h4>+91 90618 81111</h4>
          </div>
          <div className="st-contact">
            <h4>hello@bblabs.com</h4>
          </div>
        </div>
        <Link
          href="#"
          className={`btn-contact ${isOpen ? "open" : ""}`}
          onClick={handleClick}
        >
          <span className="nav-icon">
            <BiCaretRightCircle />
          </span>
          <span className="nav-label">Contact</span>
        </Link>
      </div>

      <BannerCarousel />
      <section
        className="who-we-sec pt-4 pt-lg-5 pb-4 pb-lg-4 pb-xl-5"
        data-aos="fadeIn"
      >
        <Container fluid="xxl">
          <Row className="">
            <Col xs="12">
              <div
                className="who-we-cover"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="section-hd">
                  <h6>Who we are</h6>
                  <h3>Welcome to BluBerry Labs.</h3>
                </div>
                <p>
                  We are a full-service digital marketing agency from the heart of
                  New York,USA with offices in various parts of the world. As you
                  navigate through the ever-evolving digital landscape, we are
                  here to guide you with an entire portfolio of futuristic
                  services.
                </p>
                <p>
                  We believe in the power of human connections, the art of
                  storytelling, and the science of data-backed strategies. And
                  using these, we craft digital experiences for your brand that
                  will change the way the world sees you.
                </p>
                <p>
                  Our bespoke digital marketing service solutions, infused with color, creativity, and
                  collaboration, are as unique as you are.
                </p>
                <p>
                  Be future-ready and future-proof. Come, let&apos;s partner.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="how-we-sec pt-4 pt-lg-4 pt-xl-5" data-aos="fadeIn">
        <Container fluid>
          <Row className="">
            <Col xs="12" lg="6">
              <div
                className="how-we-cover"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="section-hd">
                  <h6>How We Work</h6>
                  <h3>Elevating brands through exceptional design.</h3>
                </div>
                <p>
                  We work on the maxim that content dictates action. Every
                  service we offer is, therefore, underlined by strong focus on
                  content that informs, influences, and inspires.As a leading Digital 
                  marketing company in New York, we understand the power of 
                  content in driving results and shaping brand perception.
                </p>
                <p>
                  We seek to be partners, understanding your needs, aspirations,
                  and goals. Our work thus reflects our collaborative approach.
                  We dig deep into your psyche and arrive at a streamlined
                  strategy across the team before we embark on a project. Each
                  piece of work whether it is a logo or website or advertisement
                  or design is part of a comprehensive and unified plan of
                  action, tailored to deliver impactful Digital marketing 
                  solutions across the USA.
                </p>
                {/* <Link className="btn btn-shine btn-explore" href="#">
                  <span className="btn-label">Explore</span>
                  <span className="btn-icon">
                    <FiArrowRight />
                  </span>
                </Link> */}
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div
                className="how-we-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/we-works-img.png"
                  alt="Image"
                  layout="intrinsic"
                  width={940}
                  height={755}
                />
                <div className="particles-cover">
                  <div className="particle particle-01">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 45 45"
                      className="particle-svg"
                    >
                      <path d="M29.8 22L40.4 32.6 33.4 39.7 22.8 29.1 12.1 39.7 5.1 32.6 15.7 22 5.1 11.4 12.1 4.3 22.8 14.9 33.4 4.3 40.4 11.4z" />
                    </svg>
                  </div>
                  <div className="particle particle-02">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="particle-svg"
                    >
                      <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
                    </svg>
                  </div>
                  <div className="particle particle-03">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="particle-svg"
                    >
                      <circle cx={16} cy={16} r={13.1} />
                    </svg>
                  </div>
                  <div className="particle particle-04">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      className="particle-svg"
                    >
                      <g transform="translate(0.000000,101.000000) scale(0.100000,-0.100000)">
                        <path
                          d="M105.5,859.5c-27.3-7.9-61.1-18-74-23c-21.5-9.3-23-11.5-13.6-23.7c10.1-12.9,10.8-12.9,56,2.2
		c25.1,8.6,66.1,18,90.5,20.1c53.2,5,50.3,9.3,53.9-104.9c2.9-71.1,3.6-75.4,22.3-91.2c11.5-9.3,25.1-17.2,30.9-17.2
		c6.5,0,45.3,11.5,86.2,25.9c40.9,14.4,79.7,23.7,85.5,21.5c8.6-2.9,10.8-19.4,11.5-77.6c0.7-89.1,4.3-104.2,29.5-122.8
		c23-17.2,40.9-14.4,136.5,20.8c44.5,16.5,57.5,18.7,64.6,11.5c5.7-5.7,8.6-35.2,9.3-91.9c0.7-81.9,0.7-84,20.1-100.6
		c26.6-23,40.9-21.5,122.8,7.9c37.4,13.6,73.3,23,79,20.8c16.5-6.5,26.6-44.5,30.9-119.2c4.3-69,4.3-70.4,22.3-70.4h18l-4.3,64.6
		c-11.5,160.2-35.2,181-155.9,136.5c-65.4-24.4-89.8-26.6-96.3-10.1c-2.2,6.5-4.3,43.8-4.3,82.6c0,68.2-6.5,97-24.4,108.5
		c-16.5,11.5-63.2,5-115.7-15.8c-61.1-24.4-86.2-27.3-92.7-10.1c-2.2,6.5-4.3,43.8-4.3,82.6c0,68.2-6.5,97-24.4,108.5
		c-16.5,11.5-62.5,5-119.2-15.8c-32.3-11.5-64.6-21.5-71.8-21.5c-18,0-20.8,13.6-23,106.3c-2.2,71.8-2.9,75.4-22.3,91.9
		C204.6,876.8,175.9,877.5,105.5,859.5z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="facts-sec py-4 py-lg-5 py-xl-7">
        <Container fluid="xxl">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <Row>
              <Col xs="12">
                <div
                  className="section-hd facts-sec-hd"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h6>Key facts</h6>
                  <h3>Reasons why we are best at what we do</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <div
                  className="facts-cover"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <div className="facts-item">
                    <div className="facts-icon">
                      <i>
                        <Image
                          src="/images/facts-icon-01.png"
                          alt="Icon"
                          layout="intrinsic"
                          width={90}
                          height={90}
                        />
                        <Image
                          className="hover"
                          src="/images/facts-icon-01.png"
                          alt="Icon"
                          layout="intrinsic"
                          width={90}
                          height={90}
                        />
                      </i>
                    </div>
                    <div className="facts-it-body">
                      <h4>
                        {counterOn && (
                          <CountUp start={0} end={500} duration={2} delay={0} />
                        )}
                        +
                      </h4>
                      <p>Completed Projects</p>
                    </div>
                  </div>
                  <div className="facts-item">
                    <div className="facts-icon">
                      <i>
                        <Image
                          src="/images/facts-icon-03.png"
                          alt="Icon"
                          layout="intrinsic"
                          width={90}
                          height={90}
                        />
                        <Image
                          className="hover"
                          src="/images/facts-icon-03.png"
                          alt="Icon"
                          layout="intrinsic"
                          width={90}
                          height={90}
                        />
                      </i>
                    </div>
                    <div className="facts-it-body">
                      <h4>
                        {counterOn && (
                          <CountUp start={0} end={100} duration={2} delay={0} />
                        )}
                        +
                      </h4>
                      <p>Creative Websites</p>
                    </div>
                  </div>
                  <div className="facts-item">
                    <div className="facts-icon">
                      <i>
                        <Image
                          src="/images/facts-icon-02.png"
                          alt="Icon"
                          layout="intrinsic"
                          width={90}
                          height={90}
                        />
                        <Image
                          className="hover"
                          src="/images/facts-icon-02.png"
                          alt="Icon"
                          layout="intrinsic"
                          width={90}
                          height={90}
                        />
                      </i>
                    </div>
                    <div className="facts-it-body">
                      <h4>
                        {counterOn && (
                          <CountUp start={0} end={250} duration={2} delay={0} />
                        )}
                        +
                      </h4>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </ScrollTrigger>
        </Container>
      </section>
      <section
        className="service-sec pt-4 pt-lg-5 pt-xl-6 pb-4 pb-lg-5"
        data-aos="fadeIn"
      >
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="section-hd service-sec-hd"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h6>What We Do</h6>
                <h3>Services we offer</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} xs={12}>
              <Link href="/Branding" className="service-item">
                <div className="service-icon">
                  <img src="/images/service-icon-04.png" alt="Icon" />
                  <img
                    className="hover"
                    src="/images/service-icon-hover-04.png"
                    alt="Icon"
                  />
                </div>
                <div className="service-body">
                  <h4>Branding</h4>
                  <p>
                    Our branding services transcend aesthetics and delve into
                    strategic craftsmanship. We create compelling brand stories
                    honed to reflect your core values.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Link href="/Creative-Design" className="service-item">
                <div className="service-icon">
                  <img src="/images/service-icon-05.png" alt="Icon" />
                  <img
                    className="hover"
                    src="/images/service-icon-hover-05.png"
                    alt="Icon"
                  />
                </div>
                <div className="service-body">
                  <h4>Creative Design</h4>
                  <p>
                    Our visual storytelling transforms ideas into captivating
                    realities. We convey your brand&apos;s message through
                    engaging and effective digital media.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Link href="/Content" className="service-item">
                <div className="service-icon">
                  <img src="/images/service-icon-02.png" alt="Icon" />
                  <img
                    className="hover"
                    src="/images/service-icon-hover-02.png"
                    alt="Icon"
                  />
                </div>
                <div className="service-body">
                  <h4>Content</h4>
                  <p>
                    We weave stories through words and visuals - stories that
                    inspire, educate, entertain, and drive action, and positions
                    your brand as a voice of trust.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Link href="/Website-Design-Development" className="service-item">
                <div className="service-icon">
                  <img src="/images/service-icon-05.png" alt="Icon" />
                  <img
                    className="hover"
                    src="/images/service-icon-hover-05.png"
                    alt="Icon"
                  />
                </div>
                <div className="service-body">
                  <h4>Website Design & Development</h4>
                  <p>
                    Go full throttle with our custom-designed websites that
                    embody the essence of your brand and backed by intuitive
                    navigation, fast loading times, and responsive layouts.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Link href="/App-Development" className="service-item">
                <div className="service-icon">
                  <img src="/images/service-icon-06.png" alt="Icon" />
                  <img
                    className="hover"
                    src="/images/service-icon-hover-06.png"
                    alt="Icon"
                  />
                </div>
                <div className="service-body">
                  <h4>App Development</h4>
                  <p>
                    We create intuitive, secure, and scalable applications built
                    for iOS, Android, and the web with a strong focus on user
                    experience (UX) and user interface (UI) design.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Link href="/Social-Media" className="service-item">
                <div className="service-icon">
                  <img src="/images/service-icon-01.png" alt="Icon" />
                  <img
                    className="hover"
                    src="/images/service-icon-hover-01.png"
                    alt="Icon"
                  />
                </div>
                <div className="service-body">
                  <h4>Social Media</h4>
                  <p>
                    Partner with us to harness the power of internet. Our social
                    media marketing and management (SMM) services will enable
                    you to build a loyal community of followers and drive
                    engagement.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Link href="/SEO" className="service-item">
                <div className="service-icon">
                  <img src="/images/service-icon-03.png" alt="Icon" />
                  <img
                    className="hover"
                    src="/images/service-icon-hover-03.png"
                    alt="Icon"
                  />
                </div>
                <div className="service-body">
                  <h4>SEO</h4>
                  <p>
                    We combine cutting-edge techniques, industry best practices,
                    and a deep understanding of search engine algorithms to
                    optimize every aspect of your digital presence.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Link href="/Paid-Ads" className="service-item">
                <div className="service-icon">
                  <img src="/images/service-icon-06.png" alt="Icon" />
                  <img
                    className="hover"
                    src="/images/service-icon-hover-06.png"
                    alt="Icon"
                  />
                </div>
                <div className="service-body">
                  <h4>Paid Ads</h4>
                  <p>
                    We bring to you amplified reach with measurable impact.
                    Through strategic campaigns and data-driven insights, we
                    help you drive targeted traffic and achieve tangible
                    results.
                  </p>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="marquee-sec" data-aos="fadeIn">
        <Container fluid>
          <div
            className="txt-scroll"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <Marquee pauseOnHover="true">
              <div className="txt-item">BluBerry Labs.</div>
              <div className="txt-item">BluBerry Labs.</div>
              <div className="txt-item">BluBerry Labs.</div>
            </Marquee>
          </div>
        </Container>
      </section>

      <section className="feature-sec pt-4 pt-lg-5 pt-xl-5" data-aos="fadeIn">
        <Container fluid className="px-0">
          <Row>
            <Col xs={12}>
              <div className="section-hd text-center">
                <h6>Featured Projects</h6>
                <h3>Our case studies</h3>
              </div>
            </Col>
          </Row>
          <Row className="gx-0">
            <Col md={6} xs={12} px="0">
              <Link className="feature-item" href="/Case-Studies-Aydi">
                <figure>
                  <img src="/images/portfolio-thumb-lg-01.jpg" alt="Image" />
                </figure>
                <div className="fe-overlay"></div>
                <div className="fe-arrow">
                  <FiArrowDownRight />
                </div>
              </Link>
            </Col>
            <Col md={3} xs={6}>
              <Link className="feature-item" href="/Case-Studies-Irish">
                <figure>
                  <img src="/images/portfolio-thumb-sm-01.jpg" alt="Image" />
                </figure>
                <div className="fe-overlay"></div>
                <div className="fe-arrow">
                  <FiArrowDownRight />
                </div>
              </Link>
            </Col>
            <Col md={3} xs={6}>
              <Link className="feature-item" href="">
                <figure>
                  <img src="/images/portfolio-thumb-sm-02.jpg" alt="Image" />
                </figure>
                <div className="fe-overlay"></div>
                <div className="fe-arrow">
                  <FiArrowDownRight />
                </div>
              </Link>
            </Col>
            <Col md={3} xs={12}>
              <Link className="feature-item" href="/Case-Studies-10x">
                <figure>
                  <img src="/images/portfolio-thumb-sm-03.jpg" alt="Image" />
                </figure>
                <div className="fe-overlay"></div>
                <div className="fe-arrow">
                  <FiArrowDownRight />
                </div>
              </Link>
            </Col>
            <Col md={3} xs={6}>
              <Link className="feature-item" href="">
                <figure>
                  <img src="/images/portfolio-thumb-sm-04.jpg" alt="Image" />
                </figure>
                <div className="fe-overlay"></div>
                <div className="fe-arrow">
                  <FiArrowDownRight />
                </div>
              </Link>
            </Col>
            <Col xs={6}>
              <Link className="feature-item" href="/Case-Studies-Maaza">
                <figure>
                  <img src="/images/portfolio-thumb-lg-02.jpg" alt="Image" />
                </figure>
                <div className="fe-overlay"></div>
                <div className="fe-arrow">
                  <FiArrowDownRight />
                </div>
              </Link>
            </Col>
          </Row>
          {/* <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            selector="a"
          ></LightGallery> */}
        </Container>
      </section>

      <IndustriesSection />

      <section className="client-sec py-4 py-lg-5 py-xl-6" data-aos="fadeIn">
        <Container fluid>
          <Row className="">
            <Col lg={6} xs={12}>
              <div
                className="client-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <img src="/images/customer-img.png" alt="Image" />
                <div className="particles-cover">
                  <div className="particle particle-01">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 45 45"
                      className="particle-svg"
                    >
                      <path d="M29.8 22L40.4 32.6 33.4 39.7 22.8 29.1 12.1 39.7 5.1 32.6 15.7 22 5.1 11.4 12.1 4.3 22.8 14.9 33.4 4.3 40.4 11.4z" />
                    </svg>
                  </div>
                  <div className="particle particle-02">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="particle-svg"
                    >
                      <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
                    </svg>
                  </div>
                  <div className="particle particle-03">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="particle-svg"
                    >
                      <circle cx={16} cy={16} r={13.1} />
                    </svg>
                  </div>
                  <div className="particle particle-04">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      className="particle-svg"
                    >
                      <g transform="translate(0.000000,101.000000) scale(0.100000,-0.100000)">
                        <path
                          d="M105.5,859.5c-27.3-7.9-61.1-18-74-23c-21.5-9.3-23-11.5-13.6-23.7c10.1-12.9,10.8-12.9,56,2.2
		c25.1,8.6,66.1,18,90.5,20.1c53.2,5,50.3,9.3,53.9-104.9c2.9-71.1,3.6-75.4,22.3-91.2c11.5-9.3,25.1-17.2,30.9-17.2
		c6.5,0,45.3,11.5,86.2,25.9c40.9,14.4,79.7,23.7,85.5,21.5c8.6-2.9,10.8-19.4,11.5-77.6c0.7-89.1,4.3-104.2,29.5-122.8
		c23-17.2,40.9-14.4,136.5,20.8c44.5,16.5,57.5,18.7,64.6,11.5c5.7-5.7,8.6-35.2,9.3-91.9c0.7-81.9,0.7-84,20.1-100.6
		c26.6-23,40.9-21.5,122.8,7.9c37.4,13.6,73.3,23,79,20.8c16.5-6.5,26.6-44.5,30.9-119.2c4.3-69,4.3-70.4,22.3-70.4h18l-4.3,64.6
		c-11.5,160.2-35.2,181-155.9,136.5c-65.4-24.4-89.8-26.6-96.3-10.1c-2.2,6.5-4.3,43.8-4.3,82.6c0,68.2-6.5,97-24.4,108.5
		c-16.5,11.5-63.2,5-115.7-15.8c-61.1-24.4-86.2-27.3-92.7-10.1c-2.2,6.5-4.3,43.8-4.3,82.6c0,68.2-6.5,97-24.4,108.5
		c-16.5,11.5-62.5,5-119.2-15.8c-32.3-11.5-64.6-21.5-71.8-21.5c-18,0-20.8,13.6-23,106.3c-2.2,71.8-2.9,75.4-22.3,91.9
		C204.6,876.8,175.9,877.5,105.5,859.5z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="customer-cover"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="section-hd">
                  <h6>Customers</h6>
                  <h3>Clients we have helped</h3>
                </div>
                <p>
                  From small startups to established enterprises, we partner
                  with businesses of all sizes and sectors, each with their
                  unique dreams and aspirations.
                </p>
                <div className="client-carousel">
                  <ClientSlider />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Blog />
      <IncludeContact />
    </>
  );
}
