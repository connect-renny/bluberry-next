import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerCarousel from './components/BannerCarousel';
import IndustriesSlider from './components/IndustriesSlider';
import ClientSlider from './components/ClientSlider';
import Blog from './components/Blog';
import IncludeContact from './components/IncludeContact';

import { FiArrowDownRight } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';

import Marquee from 'react-fast-marquee';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <BannerCarousel />

      <section
        className="who-we-sec pt-4 pt-lg-5 pt-xl-7 pb-4 pb-lg-4 pb-xl-5"
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
                  <h3>Where creativity meets strategy, magic happens. </h3>
                </div>
                <h4>
                  Welcome to BluBerry Labs. We are a full-service digital media
                  agency providing top-notch services to help businesses thrive
                  in the online world.
                </h4>
                <p>
                  We believe in the power of human connections and the art of
                  storytelling. Our team of passionate experts is dedicated to
                  understanding your unique goals and challenges. We&lsquo;re
                  not here to provide cookie-cutter solutions; we&lsquo;re here
                  to be your trusted partner, guiding you through the
                  ever-evolving digital landscape.
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
                  <h6>How We Works</h6>
                  <h3>Elevating brands through exceptional design.</h3>
                </div>
                <p>
                  The company prides itself on its ability to understand its
                  clients&lsquo; unique needs and objectives, and to create
                  customized solutions that meet those needs. We have a strong
                  reputation for delivering high-quality work on time and within
                  budget.
                </p>
                <p>
                  The company prides itself on its ability to understand its
                  clients&lsquo; unique needs and objectives, and to create
                  customized solutions that meet those needs. We have a strong
                  reputation for delivering high-quality work on time and within
                  budget.
                </p>
                <Link className="btn btn-shine btn-explore" href="#">
                  <span className="btn-label">Explore</span>
                  <span className="btn-icon">
                    <FiArrowRight />
                  </span>
                </Link>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div
                className="how-we-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <img src="images/we-works-img.png" alt="Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="facts-sec py-4 py-lg-5 py-xl-6">
        <Container fluid="xxl">
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
                      <img src="images/facts-icon-01.png" alt="Icon" />
                      <img
                        src="images/facts-icon-01.png"
                        className="hover"
                        alt="Icon"
                      />
                    </i>
                  </div>
                  <div className="facts-it-body">
                    <h4>500+</h4>
                    <p>projects</p>
                  </div>
                </div>
                <div className="facts-item">
                  <div className="facts-icon">
                    <i>
                      <img src="images/facts-icon-02.png" alt="Icon" />
                      <img
                        src="images/facts-icon-02.png"
                        className="hover"
                        alt="Icon"
                      />
                    </i>
                  </div>
                  <div className="facts-it-body">
                    <h4>200+</h4>
                    <p>happy clients</p>
                  </div>
                </div>
                <div className="facts-item">
                  <div className="facts-icon">
                    <i>
                      <img src="images/facts-icon-03.png" alt="Icon" />
                      <img
                        src="images/facts-icon-03.png"
                        className="hover"
                        alt="Icon"
                      />
                    </i>
                  </div>
                  <div className="facts-it-body">
                    <h4>400+</h4>
                    <p>active clients</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
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
                <h3>Services we&lsquo;re offering to customer</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} xs={12}>
              <Link href="#" className="service-item">
                <div className="service-icon">
                  <img src="images/service-icon-01.png" alt="Icon" />
                </div>
                <div className="service-body">
                  <h4>Social Media</h4>
                  <p>
                    BluBerry Labs specializes in managing and optimizing social
                    media channels for businesses and individuals.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Link href="#" className="service-item">
                <div className="service-icon">
                  <img src="images/service-icon-02.png" alt="Icon" />
                </div>
                <div className="service-body">
                  <h4>Content</h4>
                  <p>
                    BluBerry Labs offers a variety of services, including
                    website design and development, mobile app development...
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Link href="#" className="service-item">
                <div className="service-icon">
                  <img src="images/service-icon-03.png" alt="Icon" />
                </div>
                <div className="service-body">
                  <h4>SEO</h4>
                  <p>
                    BluBerry Labs is a specialized agency that provides SEO
                    services to businesses looking to improve their online
                    visibility and ranking.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Link href="#" className="service-item">
                <div className="service-icon">
                  <img src="images/service-icon-04.png" alt="Icon" />
                </div>
                <div className="service-body">
                  <h4>Branding</h4>
                  <p>
                    We have a team of branding experts who can create logos,
                    taglines, messaging, and other visual and verbal elements
                    that represent a brand.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Link href="#" className="service-item">
                <div className="service-icon">
                  <img src="images/service-icon-05.png" alt="Icon" />
                </div>
                <div className="service-body">
                  <h4>Website Design</h4>
                  <p>
                    BluBerry Labs is a firm that specializes in designing and
                    developing websites for businesses and individuals.
                  </p>
                </div>
              </Link>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Link href="#" className="service-item">
                <div className="service-icon">
                  <img src="images/service-icon-06.png" alt="Icon" />
                </div>
                <div className="service-body">
                  <h4>App Development</h4>
                  <p>
                    BluBerry Labs offers a variety of services, including
                    website design and development, mobile app development...
                  </p>
                </div>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="service-footer">
                <Link className="btn btn-shine btn-explore" href="#">
                  <span className="btn-label">Load All Services</span>
                  <span className="btn-icon">
                    <FiArrowRight />
                  </span>
                </Link>
              </div>
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
              <div className="txt-item">BluBerry Lab.</div>
              <div className="txt-item">BluBerry Lab.</div>
              <div className="txt-item">BluBerry Lab.</div>
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
            <Col xs={6} px="0">
              <Link className="feature-item" href="#">
                <figure>
                  <img src="images/portfolio-thumb-lg-01.jpg" alt="Image" />
                </figure>
                <div className="fe-overlay"></div>
                <div className="fe-arrow">
                  <FiArrowDownRight />
                </div>
              </Link>
            </Col>
            <Col xs={6}>
              <Row className="gx-0">
                <Col xs={6}>
                  <Link className="feature-item" href="#">
                    <figure>
                      <img src="images/portfolio-thumb-sm-01.jpg" alt="Image" />
                    </figure>
                    <div className="fe-overlay"></div>
                    <div className="fe-arrow">
                      <FiArrowDownRight />
                    </div>
                  </Link>
                </Col>
                <Col xs={6}>
                  <Link className="feature-item" href="#">
                    <figure>
                      <img src="images/portfolio-thumb-sm-02.jpg" alt="Image" />
                    </figure>
                    <div className="fe-overlay"></div>
                    <div className="fe-arrow">
                      <FiArrowDownRight />
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row className="gx-0">
                <Col xs={6} className="xxx ccc">
                  <Link className="feature-item" href="#">
                    <figure>
                      <img src="images/portfolio-thumb-sm-03.jpg" alt="Image" />
                    </figure>
                    <div className="fe-overlay"></div>
                    <div className="fe-arrow">
                      <FiArrowDownRight />
                    </div>
                  </Link>
                </Col>
                <Col xs={6}>
                  <Link className="feature-item" href="#">
                    <figure>
                      <img src="images/portfolio-thumb-sm-04.jpg" alt="Image" />
                    </figure>
                    <div className="fe-overlay"></div>
                    <div className="fe-arrow">
                      <FiArrowDownRight />
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Link className="feature-item" href="#">
                <figure>
                  <img src="images/portfolio-thumb-lg-02.jpg" alt="Image" />
                </figure>
                <div className="fe-overlay"></div>
                <div className="fe-arrow">
                  <FiArrowDownRight />
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="industries-sec pt-4 pt-lg-5 pt-xl-7 pb-4 pb-lg-4 pb-xl-5"
        data-aos="fadeIn"
      >
        <Container fluid="xxl">
          <Row>
            <Col lg={6} xs={12}>
              <div
                className="section-hd"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h6>Industries</h6>
                <h3>Solving challenges in every industry, every day.</h3>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="industries-intro"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <p>
                  Our experience allows us to understand the specificities of
                  your industry and develop an strategy that matches your needs.
                  No matter your industry, Bluberry Labs has helped businesses
                  like yours with IT solutions.
                </p>
                <Link className="btn btn-shine btn-explore" href="#">
                  <span className="btn-label">Explore</span>
                  <span className="btn-icon">
                    <FiArrowRight />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <IndustriesSlider />
            </Col>
          </Row>
        </Container>
      </section>

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
                <img src="images/customer-img.png" alt="Image" />
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
                  <h3>Clients we&lsquo;ve worked with</h3>
                </div>
                <p>
                  We are inspired. Our clientele is growing day by day. We are
                  proud to associate with a great bunch of customers across
                  different verticals and of different sizes.
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
