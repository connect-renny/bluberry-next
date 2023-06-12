import Image from 'next/image';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

import IncludeContact from './components/IncludeContact';

import { FiArrowRight } from 'react-icons/fi';

export default function About() {
  return (
    <>
      <section className="ins-slider-hd-sec">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="ins-slider-hd">
                <h6>Introduction</h6>
                <h1>About Us</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="section-hd text-center">
                <h3>Where creativity meets strategy, magic happens. </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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

      <section className="pt-4 pt-lg-5 pt-xl-6 pb-4">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col xs={12}>
              <div className="about-intro">
                <h4>
                  Welcome to BluBerry Labs. <br />
                  We are a full-service digital media agency providing top-notch
                  services to help businesses thrive in the online world.
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

      <section className="mindset-sec pt-4 pb-4">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center gx-xxl-5">
            <Col lg={6} xs={12}>
              <div className="mindset-img">
                <h3>
                  With a keen eye for detail and a strategic mindset, we delve
                  deep into your brand&lsquo;s DNA to uncover its true
                  potential.
                </h3>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="mindset-content">
                <h4>
                  From there, we weave together compelling visuals, engaging
                  content, and innovative strategies that make your brand come
                  alive.
                </h4>
                <p>
                  But it&lsquo;s not just about creating something beautiful -
                  we&lsquo;re all about results. Our strategies are
                  laser-focused on driving real, measurable outcomes for your
                  business. Whether it&lsquo;s increasing your online presence,
                  boosting conversions, or building a loyal community,
                  we&lsquo;re here to make it happen.
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
              <div className="section-hd">
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
              <Accordion className="service-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="images/service-acc-icon-01.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Social Media</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="images/service-acc-icon-02.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Branding</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="images/service-acc-icon-03.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Website Design</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="images/service-acc-icon-04.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Website Development</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col lg={6} xs={12}>
              <Accordion className="service-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="images/service-acc-icon-05.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Content</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="images/service-acc-icon-06.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">SEO</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="images/service-acc-icon-07.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">App Development</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="acc-nav-icon">
                      <img src="images/service-acc-icon-08.png" alt="Icon" />
                    </span>
                    <span className="acc-nav-label">Online Advertising</span>
                    <span className="acc-nav-arrow">
                      <FiArrowRight />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
              <div className="brand-story">
                <div className="section-hd brand-hd">
                  <h3>
                    So, let&lsquo;s grab a virtual cup of coffee and dive into
                    your brand&lsquo;s story.
                  </h3>
                </div>
                <p>
                  Together, we&lsquo;ll navigate the digital landscape, craft
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
              <div className="values-img">
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
                <div className="values-hd">
                  <h3>Our Values</h3>
                  <h4>We believe in-</h4>
                </div>
                <ul className="value-list">
                  <li className="value-item">
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
                  <li className="value-item">
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
                  <li className="value-item">
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
              <div className="team-content">
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
              <div className="team-img">
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
              <div className="dig-magic">
                <h3>Are you ready to take your brand to new heights? </h3>
                <p>
                  Let&lsquo;s embark on this exciting journey together. Reach
                  out to us today, and let&lsquo;s start making some digital
                  magic!
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
