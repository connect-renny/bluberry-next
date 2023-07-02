import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import BannerCarousel from "./components/BannerCarousel";
import IndustriesSection from "./components/IndustriesSection";
import ClientSlider from "./components/ClientSlider";
import Blog from "./components/Blog";
import IncludeContact from "./components/IncludeContact";

import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

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
  return (
    <>
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
                <h4>
                  We are a full-service digital media agency from the heart of
                  New York. As you navigate through the ever-evolving digital
                  landscape, we are here to guide you with an entire portfolio
                  of futuristic services.
                </h4>
                <p>
                  We believe in the power of human connections, the art of
                  storytelling, and the science of data-backed strategies. And
                  using these, we craft digital experiences for your brand that
                  will change the way the world sees you.
                </p>
                <p>
                  Our bespoke solutions, infused with color, creativity, and
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
                  content that informs, influences, and inspires.
                </p>
                <p>
                  We seek to be partners, understanding your needs, aspirations,
                  and goals. Our work thus reflects our collaborative approach.
                  We dig deep into your psyche and arrive at a streamlined
                  strategy across the team before we embark on a project. Each
                  piece of work whether it is a logo or website or advertisement
                  or design is part of a comprehensive and unified plan of
                  action.
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
                  <h3>Reasons why we are the best</h3>
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
                      <p>no of Projects</p>
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
                      <p>Websites</p>
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
              <Link href="/Graphic-Design" className="service-item">
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
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            selector="a"
          >
            <Row className="gx-0">
              <Col md={6} xs={12} px="0">
                <Link
                  className="feature-item"
                  href="/images/portfolio-thumb-lg-01.jpg"
                >
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
                <Link
                  className="feature-item"
                  href="/images/portfolio-thumb-sm-01.jpg"
                >
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
                <Link
                  className="feature-item"
                  href="/images/portfolio-thumb-sm-02.jpg"
                >
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
                <Link
                  className="feature-item"
                  href="/images/portfolio-thumb-sm-03.jpg"
                >
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
                <Link
                  className="feature-item"
                  href="/images/portfolio-thumb-sm-04.jpg"
                >
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
                <Link
                  className="feature-item"
                  href="/images/portfolio-thumb-lg-02.jpg"
                >
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
          </LightGallery>
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
