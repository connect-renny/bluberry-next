import Image from "next/image";
import { Container, Row, Col, Accordion } from "react-bootstrap";

import Link from "next/link";

import IncludeContact from "./components/IncludeContact";

import { FiArrowRight } from "react-icons/fi";

export default function About() {
  return (
    <>
      <section className="ins-slider-img-sec">
        <Container fluid="xxl">
          <div className="ins-slider">
            <Image
              src="/images/ins-slider-about.jpg"
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
              <div
                className="ins-slider-hd"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h6>About Us</h6>
                <h1>Introduction</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="section-hd mb-0 text-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h3>Welcome to BluBerry Labs.</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pt-xl-6 pb-4">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="about-intro"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  We are a full-service digital media agency providing top-notch
                  services to help businesses thrive in the online world.
                </h4>
                <p>
                  We believe in the power of human connections and the art of
                  storytelling. Our team of passionate experts is dedicated to
                  understanding your unique goals and challenges. We&apos;re not
                  here to provide cookie-cutter solutions; we&apos;re here to be
                  your trusted partner, guiding you through the ever-evolving
                  digital landscape.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mindset-sec pt-4 pb-4">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center gx-xxl-5">
            <Col lg={6} xs={12}>
              <div
                className="mindset-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h3>
                  With a keen eye for detail and a strategic mindset, we delve
                  deep into your brand&apos;s DNA to uncover its true potential.
                </h3>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="mindset-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  From there, we weave together compelling visuals, engaging
                  content, and innovative strategies that make your brand come
                  alive.
                </h4>
                <p>
                  But it&apos;s not just about creating something beautiful -
                  we&apos;re all about results. Our strategies are laser-focused
                  on driving real, measurable outcomes for your business.
                  Whether it&apos;s increasing your online presence, boosting
                  conversions, or building a loyal community, we&apos;re here to
                  make it happen.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="services-acc-sec pt-4 pb-4 pb-lg-7">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="section-hd"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h6>What we do</h6>
                <h3 className="mb-2">Our Services</h3>
                <p>
                  We help you translate a simple idea into an exotic Digital
                  design transformation vision.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12}>
              <Accordion
                className="service-accordion"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="/images/service-acc-icon-02.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Branding</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We employ a blend of technical prowess, creative vision,
                      and consumer psychology to craft an authentic and
                      captivating brand experience that will set you apart from
                      the crowd.
                    </p>
                    <Link className="btn btn-shine btn-more" href="/Branding">
                      <span className="btn-label">Read More</span>
                      <span className="btn-icon">
                        <FiArrowRight />
                      </span>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="/images/service-acc-icon-05.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Content</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Only if you capture the attention of your target audience
                      and then retain it enough to get your message acrosswill
                      you be able to persuade them.Action starts with attention.
                    </p>
                    <Link className="btn btn-shine btn-more" href="/Content">
                      <span className="btn-label">Read More</span>
                      <span className="btn-icon">
                        <FiArrowRight />
                      </span>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="/images/service-acc-icon-07.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">App Development</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      There&apos;s an app for each of that and for a million
                      other tasks. Apps are fast becoming the interface of
                      choice for the current generation brought up as digital
                      natives.
                    </p>
                    <Link
                      className="btn btn-shine btn-more"
                      href="/App-Development"
                    >
                      <span className="btn-label">Read More</span>
                      <span className="btn-icon">
                        <FiArrowRight />
                      </span>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="/images/service-acc-icon-06.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">SEO</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      BluBerry Labs brings to youpersonalizedsearch engine
                      optimization (SEO) services that can help you achieve
                      success. We offer personalized solutions, including
                      keyword research, on-page optimization, backlink building,
                      and analytics tracking.
                    </p>
                    <Link className="btn btn-shine btn-more" href="/SEO">
                      <span className="btn-label">Read More</span>
                      <span className="btn-icon">
                        <FiArrowRight />
                      </span>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col lg={6} xs={12}>
              <Accordion
                className="service-accordion"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="/images/service-acc-icon-03.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Graphic Design</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Every element in a design should have a purpose. And every
                      end product should communicate a powerful message. And
                      that&apos;s what we offer; we convey your brand&apos;s
                      message through our mindful and effective digital media.
                    </p>
                    <Link
                      className="btn btn-shine btn-more"
                      href="/Graphic-Design"
                    >
                      <span className="btn-label">Read More</span>
                      <span className="btn-icon">
                        <FiArrowRight />
                      </span>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="/images/service-acc-icon-04.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">
                      Website Design & Development
                    </span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      It is the home ground for all your online activities and
                      the top reference point for your customers. Of course, the
                      looks and décor matter. But the sitemust also be stable,
                      well-organized, and user-friendly to be effective and
                      functional.
                    </p>
                    <Link
                      className="btn btn-shine btn-more"
                      href="/Website-Design-Development"
                    >
                      <span className="btn-label">Read More</span>
                      <span className="btn-icon">
                        <FiArrowRight />
                      </span>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="/images/service-acc-icon-01.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Social Media</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Partner with BluBerry to harness this power. Our social
                      media marketing and management (SMM) services will enable
                      you to build a loyal community of followers and drive
                      engagement.
                    </p>
                    <Link
                      className="btn btn-shine btn-more"
                      href="/Social-Media"
                    >
                      <span className="btn-label">Read More</span>
                      <span className="btn-icon">
                        <FiArrowRight />
                      </span>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="/images/service-acc-icon-08.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Paid Ads</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      But unlike water in the ocean, with the right strategy and
                      content, a digital drop in the sea of internet can grow in
                      reach and impact.It can cross beyond the proverbial
                      oceans.BluBerry Labs offers this amplified reach.
                    </p>
                    <Link className="btn btn-shine btn-more" href="/Paid-Ads">
                      <span className="btn-label">Read More</span>
                      <span className="btn-icon">
                        <FiArrowRight />
                      </span>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand-story-sec">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="brand-story text-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="section-hd brand-hd">
                  <h3>
                    So, let&apos;s grab a virtual cup of coffee and dive into
                    your brand&apos;s story.
                  </h3>
                </div>
                <p>
                  Together, we&apos;ll navigate the digital landscape, craft
                  strategies that resonate with your audience, and create
                  unforgettable experiences that set you apart from the crowd.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="values-sec pt-4 pt-lg-5 pt-xl-7 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row>
            <Col lg={6} xs={12}>
              <div
                className="values-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/values-img.png"
                  alt="Values"
                  layout="intrinsic"
                  width={650}
                  height={625}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="values-content">
                <div
                  className="values-hd"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h3>Our Values</h3>
                  <h4>We believe in-</h4>
                </div>
                <ul className="value-list">
                  <li
                    className="value-item"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div className="value-icon">
                      <Image
                        src="/images/value-icon-01.png"
                        alt="Values"
                        layout="intrinsic"
                        width={68}
                        height={68}
                      />
                    </div>
                    <div className="value-label">Human Touch</div>
                  </li>
                  <li
                    className="value-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <div className="value-icon">
                      <Image
                        src="/images/value-icon-02.png"
                        alt="Values"
                        layout="intrinsic"
                        width={68}
                        height={68}
                      />
                    </div>
                    <div className="value-label">Win-win outcomes</div>
                  </li>
                  <li
                    className="value-item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    <div className="value-icon">
                      <Image
                        src="/images/value-icon-03.png"
                        alt="Values"
                        layout="intrinsic"
                        width={68}
                        height={68}
                      />
                    </div>
                    <div className="value-label">Integrity</div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team-sec pt-4 pt-lg-5 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col lg={6} xs={12}>
              <div
                className="team-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="section-hd">
                  <h3>Our Team</h3>
                </div>
                <h4 className="mb-xxl-4">
                  We have a global team of visionary strategists, designers,
                  developers, marketers, and content creators.
                </h4>
                <p>
                  Our team embodies a diverse range of expertise. We are united
                  by a common goal: to deliver exceptional results for our
                  clients and exceed their expectations.
                </p>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="team-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/our-team-img.jpg"
                  alt="Team"
                  layout="intrinsic"
                  width={725}
                  height={500}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}></Col>
          </Row>
        </Container>
      </section>

      <section className="dig-magic-sec py-4 py-lg-5 py-xl-7">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="dig-magic"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h3>Are you ready to take your brand to new heights? </h3>
                <p>
                  Let&apos;s embark on this exciting journey together. Reach out
                  to us today, and let&apos;s start making some digital magic!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <IncludeContact />
    </>
  );
}
