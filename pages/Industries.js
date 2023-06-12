import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import IncludeContact from './components/IncludeContact';
import { FiArrowRight } from 'react-icons/fi';

import Link from 'next/link';

import Slider from 'react-slick';

// slick carousel import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function About() {
  const [indSliderNav, setIndSliderNav] = useState(0);
  const [indSliderMain, setIndSliderMain] = useState(0);

  const indSliderNavRef = useRef();
  const indSliderMainRef = useRef();

  const handleSliderOneBeforeChange = (oldIndex, newIndex) => {
    setIndSliderMain(newIndex);
    indSliderNavRef.current.slickGoTo(newIndex);
  };

  const handleSliderTwoBeforeChange = (oldIndex, newIndex) => {
    setIndSliderNav(newIndex);
    indSliderMainRef.current.slickGoTo(newIndex);
  };

  const settings01 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    beforeChange: handleSliderTwoBeforeChange,
  };

  const settings02 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: handleSliderOneBeforeChange,
  };

  return (
    <>
      <section className="ins-slider-hd-sec">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="ins-slider-hd">
                <h6>verticals</h6>
                <h1>Industries</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="section-hd text-center">
                <h3>Every industry is different in its needs.</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ins-slider-img-sec">
        <Container fluid="xxl">
          <div className="ins-slider">
            <Image
              src="/images/ins-slider-industries.jpg"
              alt="Slider"
              layout="intrinsic"
              width={1320}
              height={350}
            />
          </div>
        </Container>
      </section>

      <section className="py-4 py-lg-5">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col xs={12}>
              <div className="industry-intro">
                <h4>
                  The challenges and opportunities too are unique to each
                  sector.
                </h4>
                <p>
                  BluBerry Labs understands this and offers customized care and
                  expertise across a variety of domains.
                </p>
                <p className="mb-0">
                  Whether you are just starting a business or trying to expand
                  one, wherever you may be on the growth journey, partner with
                  us to get an accelerated foothold into the digital world.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ind-tab-sec">
        <div className="ind-tab-nav">
          <Container fluid="xxl">
            <Row>
              <Col xs={12}>
                <Slider
                  className="slider slider-nav"
                  {...settings01}
                  ref={indSliderNavRef}
                >
                  <div className="nav-item">
                    <div className="nav-link">
                      E-commerce & <br />
                      Retail
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="nav-link">
                      Technology & <br />
                      Software
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="nav-link">
                      Hospitality & <br />
                      Tourism
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="nav-link">
                      Health & <br />
                      Wellness
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="nav-link">
                      Education & <br />
                      E-learning
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="nav-link">Real Estate</div>
                  </div>
                  <div className="nav-item">
                    <div className="nav-link">
                      Financial <br />
                      Services
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="nav-link">
                      Non-profit <br />
                      Organizations
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="nav-link">
                      Public <br />
                      Sector
                    </div>
                  </div>
                </Slider>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ind-tab-content  py-4 py-lg-5  py-xl-6">
          <Container>
            <Slider {...settings02} ref={indSliderMainRef}>
              <div>
                <div className="ind-tb-con">
                  <Row className="d-flex align-items-center">
                    <Col lg={6} xs={12}>
                      <div className="ind-tb-con">
                        <div className="ind-tb-hd">
                          <h5>01</h5>
                          <h4>
                            E-commerce & <br />
                            Retail:
                          </h4>
                        </div>
                        <p>
                          In the fast-paced world of online shopping, we
                          understand the importance of creating easy, intuitive
                          e-commerce experiences.
                        </p>
                        <p className="mb-0">
                          Whether you&lsquo;re a small boutique or a large-scale
                          retailer, we help you optimize your online store,
                          drive traffic, and enhance the customer journey,
                          ultimately boosting sales and fostering customer
                          loyalty.
                        </p>
                      </div>
                    </Col>
                    <Col lg={6} xs={12}>
                      <div className="ind-tb-img">
                        <Image
                          src="/images/ind-tab-img-01.jpg"
                          alt="Team"
                          layout="intrinsic"
                          width={625}
                          height={485}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="ind-tb-con">
                  <Row className="d-flex align-items-center">
                    <Col lg={6} xs={12}>
                      <div className="ind-tb-con">
                        <div className="ind-tb-hd">
                          <h5>02</h5>
                          <h4>
                            Technology & <br />
                            Software
                          </h4>
                        </div>
                        <p>
                          In the fast-paced world of online shopping, we
                          understand the importance of creating easy, intuitive
                          e-commerce experiences.
                        </p>
                        <p className="mb-0">
                          Whether you&lsquo;re a small boutique or a large-scale
                          retailer, we help you optimize your online store,
                          drive traffic, and enhance the customer journey,
                          ultimately boosting sales and fostering customer
                          loyalty.
                        </p>
                      </div>
                    </Col>
                    <Col lg={6} xs={12}>
                      <div className="team-img">
                        <Image
                          src="/images/ind-tab-img-01.jpg"
                          alt="Team"
                          layout="intrinsic"
                          width={625}
                          height={485}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="ind-tb-con">
                  <Row className="d-flex align-items-center">
                    <Col lg={6} xs={12}>
                      <div className="ind-tb-con">
                        <div className="ind-tb-hd">
                          <h5>03</h5>
                          <h4>
                            Hospitality & <br />
                            Tourism
                          </h4>
                        </div>
                        <p>
                          In the fast-paced world of online shopping, we
                          understand the importance of creating easy, intuitive
                          e-commerce experiences.
                        </p>
                        <p className="mb-0">
                          Whether you&lsquo;re a small boutique or a large-scale
                          retailer, we help you optimize your online store,
                          drive traffic, and enhance the customer journey,
                          ultimately boosting sales and fostering customer
                          loyalty.
                        </p>
                      </div>
                    </Col>
                    <Col lg={6} xs={12}>
                      <div className="team-img">
                        <Image
                          src="/images/ind-tab-img-01.jpg"
                          alt="Team"
                          layout="intrinsic"
                          width={625}
                          height={485}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="ind-tb-con">
                  <Row className="d-flex align-items-center">
                    <Col lg={6} xs={12}>
                      <div className="ind-tb-con">
                        <div className="ind-tb-hd">
                          <h5>04</h5>
                          <h4>
                            Health & <br />
                            Wellness
                          </h4>
                        </div>
                        <p>
                          In the fast-paced world of online shopping, we
                          understand the importance of creating easy, intuitive
                          e-commerce experiences.
                        </p>
                        <p className="mb-0">
                          Whether you&lsquo;re a small boutique or a large-scale
                          retailer, we help you optimize your online store,
                          drive traffic, and enhance the customer journey,
                          ultimately boosting sales and fostering customer
                          loyalty.
                        </p>
                      </div>
                    </Col>
                    <Col lg={6} xs={12}>
                      <div className="team-img">
                        <Image
                          src="/images/ind-tab-img-01.jpg"
                          alt="Team"
                          layout="intrinsic"
                          width={625}
                          height={485}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="ind-tb-con">
                  <Row className="d-flex align-items-center">
                    <Col lg={6} xs={12}>
                      <div className="ind-tb-con">
                        <div className="ind-tb-hd">
                          <h5>05</h5>
                          <h4>
                            Education & <br />
                            E-learning
                          </h4>
                        </div>
                        <p>
                          In the fast-paced world of online shopping, we
                          understand the importance of creating easy, intuitive
                          e-commerce experiences.
                        </p>
                        <p className="mb-0">
                          Whether you&lsquo;re a small boutique or a large-scale
                          retailer, we help you optimize your online store,
                          drive traffic, and enhance the customer journey,
                          ultimately boosting sales and fostering customer
                          loyalty.
                        </p>
                      </div>
                    </Col>
                    <Col lg={6} xs={12}>
                      <div className="team-img">
                        <Image
                          src="/images/ind-tab-img-01.jpg"
                          alt="Team"
                          layout="intrinsic"
                          width={625}
                          height={485}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="ind-tb-con">
                  <Row className="d-flex align-items-center">
                    <Col lg={6} xs={12}>
                      <div className="ind-tb-con">
                        <div className="ind-tb-hd">
                          <h5>06</h5>
                          <h4>Real Estate</h4>
                        </div>
                        <p>
                          In the fast-paced world of online shopping, we
                          understand the importance of creating easy, intuitive
                          e-commerce experiences.
                        </p>
                        <p className="mb-0">
                          Whether you&lsquo;re a small boutique or a large-scale
                          retailer, we help you optimize your online store,
                          drive traffic, and enhance the customer journey,
                          ultimately boosting sales and fostering customer
                          loyalty.
                        </p>
                      </div>
                    </Col>
                    <Col lg={6} xs={12}>
                      <div className="team-img">
                        <Image
                          src="/images/ind-tab-img-01.jpg"
                          alt="Team"
                          layout="intrinsic"
                          width={625}
                          height={485}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="ind-tb-con">
                  <Row className="d-flex align-items-center">
                    <Col lg={6} xs={12}>
                      <div className="ind-tb-con">
                        <div className="ind-tb-hd">
                          <h5>07</h5>
                          <h4>
                            Financial <br />
                            Services
                          </h4>
                        </div>
                        <p>
                          In the fast-paced world of online shopping, we
                          understand the importance of creating easy, intuitive
                          e-commerce experiences.
                        </p>
                        <p className="mb-0">
                          Whether you&lsquo;re a small boutique or a large-scale
                          retailer, we help you optimize your online store,
                          drive traffic, and enhance the customer journey,
                          ultimately boosting sales and fostering customer
                          loyalty.
                        </p>
                      </div>
                    </Col>
                    <Col lg={6} xs={12}>
                      <div className="team-img">
                        <Image
                          src="/images/ind-tab-img-01.jpg"
                          alt="Team"
                          layout="intrinsic"
                          width={625}
                          height={485}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="ind-tb-con">
                  <Row className="d-flex align-items-center">
                    <Col lg={6} xs={12}>
                      <div className="ind-tb-con">
                        <div className="ind-tb-hd">
                          <h5>08</h5>
                          <h4>
                            Non-profit <br />
                            Organizations
                          </h4>
                        </div>
                        <p>
                          In the fast-paced world of online shopping, we
                          understand the importance of creating easy, intuitive
                          e-commerce experiences.
                        </p>
                        <p className="mb-0">
                          Whether you&lsquo;re a small boutique or a large-scale
                          retailer, we help you optimize your online store,
                          drive traffic, and enhance the customer journey,
                          ultimately boosting sales and fostering customer
                          loyalty.
                        </p>
                      </div>
                    </Col>
                    <Col lg={6} xs={12}>
                      <div className="team-img">
                        <Image
                          src="/images/ind-tab-img-01.jpg"
                          alt="Team"
                          layout="intrinsic"
                          width={625}
                          height={485}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="ind-tb-con">
                  <Row className="d-flex align-items-center">
                    <Col lg={6} xs={12}>
                      <div className="ind-tb-con">
                        <div className="ind-tb-hd">
                          <h5>09</h5>
                          <h4>
                            Public <br />
                            Sector
                          </h4>
                        </div>
                        <p>
                          In the fast-paced world of online shopping, we
                          understand the importance of creating easy, intuitive
                          e-commerce experiences.
                        </p>
                        <p className="mb-0">
                          Whether you&lsquo;re a small boutique or a large-scale
                          retailer, we help you optimize your online store,
                          drive traffic, and enhance the customer journey,
                          ultimately boosting sales and fostering customer
                          loyalty.
                        </p>
                      </div>
                    </Col>
                    <Col lg={6} xs={12}>
                      <div className="team-img">
                        <Image
                          src="/images/ind-tab-img-01.jpg"
                          alt="Team"
                          layout="intrinsic"
                          width={625}
                          height={485}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Slider>
          </Container>
        </div>
      </section>

      <section className="py-4 py-lg-5 py-xl-6">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="ind-exa-serve">
                <h4>
                  These are just a few examples of the industries we serve.
                </h4>
                <p>
                  Regardless of your sector, we are committed to understanding
                  your unique challenges and tailoring our services to meet your
                  specific needs.
                </p>
                <p>
                  Our goal is to empower your brand with digital excellence and
                  drive success in the digital landscape.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ind-pro-sec py-4 py-lg-5 py-xl-7">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="ind-projects">
                <h3>
                  Check out our portfolio of projects that have transformed
                  businesses just like yours.
                </h3>
                <Link className="btn btn-shine btn-portfolio" href="#">
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

      <section className="py-4 py-lg-5 py-xl-7">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="ind-bus-cover">
                <h3>Ready to take your business to the next level?</h3>
                <p>
                  Ready to take your business to the next level? Reach out to us
                  to discuss how our expertise can transform your industry
                  presence.
                </p>
                <div>
                  <Link className="btn btn-shine btn-contact" href="#">
                    <span className="btn-label">Load All Services</span>
                    <span className="btn-icon">
                      <FiArrowRight />
                    </span>
                  </Link>
                  <Link className="btn btn-shine btn-contact" href="#">
                    <span className="btn-label">Load All Services</span>
                    <span className="btn-icon">
                      <FiArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand-story-sec  slogan-sec">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="brand-story">
                <div className="section-hd slogan-hd">
                  <h3>Together, we can conquer the online world.</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <IncludeContact />
    </>
  );
}
