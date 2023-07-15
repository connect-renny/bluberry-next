import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import IncludeContact from "./components/IncludeContact";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from 'next/router';

import Link from "next/link";

import Slider from "react-slick";

// slick carousel import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Industries() {
  const [indSliderNav, setIndSliderNav] = useState(0);
  const [indSliderMain, setIndSliderMain] = useState(0);

  const indSliderNavRef = useRef();
  const indSliderMainRef = useRef();

  const { asPath } = useRouter();

  useEffect(() => {
    const hash = asPath.split('#')[1];
    setIndSliderMain(hash);
    indSliderNavRef.current.slickGoTo(hash);
  }, [asPath]);

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

      <section className="pt-3 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col xs={12}>
              <div className="industry-intro">
                <h4>
                  Every industry is different in its needs. <br />
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
            <div className="ind-carousel-con">
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
                            understand the importance of creating easy,
                            intuitive e-commerce experiences. Whether you&#39;re
                            a small boutique or a large-scale retailer, we help
                            you optimize your online store, drive traffic, and
                            enhance the customer journey, ultimately boosting
                            sales and fostering customer loyalty.
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
                            The tech industry is constantly evolving, and
                            we&#39;re here to help you stay at the forefront of
                            digital innovation. From software development
                            companies to tech startups, we provide solutions
                            that highlight your product&#39;s unique value
                            proposition, attract the right audience, and
                            position you as a leader in the industry.
                          </p>
                        </div>
                      </Col>
                      <Col lg={6} xs={12}>
                        <div className="team-img">
                          <Image
                            src="/images/ind-tab-img-02.jpg"
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
                            We understand that in the competitive hospitality
                            and tourism industry, captivating your audience is
                            essential. Our digital strategies and branding
                            services help hotels, resorts, travel agencies, and
                            other hospitality businesses create an exceptional
                            online presence, reach a global audience, and drive
                            bookings.
                          </p>
                        </div>
                      </Col>
                      <Col lg={6} xs={12}>
                        <div className="team-img">
                          <Image
                            src="/images/ind-tab-img-03.jpg"
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
                            For businesses in the health and wellness sector,
                            building trust and credibility is vital. We help
                            medical professionals, wellness centers, fitness
                            studios, and other health-related businesses
                            establish a strong online presence, communicate
                            their expertise, and connect with individuals
                            seeking their services.
                          </p>
                        </div>
                      </Col>
                      <Col lg={6} xs={12}>
                        <div className="team-img">
                          <Image
                            src="/images/ind-tab-img-04.jpg"
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
                            In the digital age, education has transcended
                            traditional boundaries. We work with educational
                            institutions, e-learning platforms, and online
                            course providers to create engaging digital
                            experiences, drive enrollments, and empower learners
                            with accessible and interactive content.
                          </p>
                        </div>
                      </Col>
                      <Col lg={6} xs={12}>
                        <div className="team-img">
                          <Image
                            src="/images/ind-tab-img-05.jpg"
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
                            The real estate industry demands a powerful online
                            presence to showcase properties and attract
                            potential buyers or renters. Our expertise in
                            website design, virtual tours, and digital marketing
                            strategies helps real estate agents and property
                            developers effectively engage with their target
                            audience and generate leads.
                          </p>
                        </div>
                      </Col>
                      <Col lg={6} xs={12}>
                        <div className="team-img">
                          <Image
                            src="/images/ind-tab-img-06.jpg"
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
                            Building trust is crucial in the financial services
                            industry. We assist banks, insurance companies,
                            investment firms, and financial advisors in
                            establishing a credible and user- friendly digital
                            presence, providing educational resources, and
                            guiding users towards their financial goals.
                          </p>
                        </div>
                      </Col>
                      <Col lg={6} xs={12}>
                        <div className="team-img">
                          <Image
                            src="/images/ind-tab-img-07.jpg"
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
                            We are dedicated to supporting non-profit
                            organizations in their mission to make a positive
                            impact. Our digital strategies and fundraising
                            campaigns help non-profits raise awareness, engage
                            supporters, and mobilize resources to drive
                            meaningful change.
                          </p>
                        </div>
                      </Col>
                      <Col lg={6} xs={12}>
                        <div className="team-img">
                          <Image
                            src="/images/ind-tab-img-08.jpg"
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
                            We are also ready to collaborate with government
                            agencies, municipalities, and public institutions to
                            create impactful digital strategies. These are aimed
                            to enhance public participation, empower citizens,
                            and foster transparency and a stronger connection
                            with the community.
                          </p>
                        </div>
                      </Col>
                      <Col lg={6} xs={12}>
                        <div className="team-img">
                          <Image
                            src="/images/ind-tab-img-09.jpg"
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
            </div>
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
                {/* <Link className="btn btn-shine btn-portfolio" href="#">
                  <span className="btn-label">Load All Services</span>
                  <span className="btn-icon">
                    <FiArrowRight />
                  </span>
                </Link> */}
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
                  <Link className="btn btn-shine btn-contact" href="/Contact">
                    <span className="btn-label">Contact Us</span>
                    <span className="btn-icon">
                      <FiArrowRight />
                    </span>
                  </Link>
                  <Link
                    className="btn btn-shine btn-contact"
                    href="https://calendly.com/the_bb/30min"
                    target="_blank"
                  >
                    <span className="btn-label">Book a Free Consultation</span>
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
