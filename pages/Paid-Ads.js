import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import WorkSection from "./components/WorkSection";
import IndustriesSection from "./components/IndustriesSection";
import TaglineSection from "./components/TaglineSection";
import IncludeContact from "./components/IncludeContact";
import ContactConsultation from "./components/ContactConsultation";

export default function AppDevelopment() {
  return (
    <>
      <section className="ins-slider-img-sec">
        <Container fluid="xxl">
          <div className="ins-slider">
            <Image
              src="/images/ins-slider-paid-ads.jpg"
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
                <h6>Services</h6>
                <h1>Paid Ads</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pt-xl-6 pb-4">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col xs={12}>
              <div className="branding-intro">
                <h3>
                  Are you trying to amplify your voice online? Are your Adverts
                  reaching the right people? Are they evoking the desired
                  response?
                </h3>
                <h4>
                  It is time to reconsider your advertising strategy and make
                  use of the immense power of Paid Ads.
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-5 py-xl-6" data-aos="fadeIn">
        <Container fluid="xxl">
          <Row className="gx-xxl-5 d-flex align-items-center">
            <Col lg={6} xs={12}>
              <div
                className="paid-ads-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/paid-ads-img.png"
                  alt="Image"
                  layout="intrinsic"
                  width={670}
                  height={630}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="paid-ads-column"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  Imagine a drop of water in the ocean. An online post or an
                  advert is like that drop.
                </h4>
                <p>
                  But unlike water in the ocean, with the right strategy and
                  content, a digital drop in the sea of internet can grow in
                  reach and impact.It can cross beyond the proverbial
                  oceans.BluBerry Labs offers this amplified reach.
                </p>
                <p>
                  We understand that for a brand, visibility is paramount. It is
                  the fuel that ignites growth, expands your audience, and
                  propels your business toward unprecedented success.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="app-highlight-sec py-4 py-lg-5 py-xl-7">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="app-highlight">
                <h4>
                  An advertisement becomes effective when it reaches your target
                  audience and influences and informs their consumer behavior.
                </h4>
                <p>
                  An advertisement becomes effective when it reaches your target
                  audience and influences and informs their consumer behavior.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mindset-sec pt-4 pt-lg-5 pt-xl-6 pb-4">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center gx-xxl-5">
            <Col lg={6} xs={12}>
              <div
                className="mindset-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  We are well-versed in the intricacies of paid ads across
                  various platforms, including search engines, social media, and
                  display networks.
                </h4>
                <p>
                  We meticulously craft compelling ad campaigns tailored to your
                  specific goals and target audience, ensuring optimal reach and
                  engagement.
                </p>
                <p>
                  With our comprehensive understanding of audience behavior and
                  industry trends, we optimize your ad spend to deliver maximum
                  ROI. From keyword research and ad copywriting to campaign
                  monitoring and optimization, we handle every aspect of your
                  paid advertising efforts.
                </p>
              </div>
            </Col>
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
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row className="gx-xxl-5">
            <Col lg={6} xs={12}>
              <div className="paid-com-item">
                <figure
                  data-aos="fadeIn"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <Image
                    src="/images/paid-com-img-01.jpg"
                    alt="Team"
                    layout="intrinsic"
                    width={630}
                    height={325}
                  />
                </figure>
                <div
                  className="paid-com-body"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h4>
                    Whether you&apos;re aiming to increase brand awareness,
                    generate leads, or drive conversions, our paid ads service
                    offers you a powerful tool to outshine the competition.
                  </h4>
                  <p>
                    We continuously analyze performance metrics, adjust
                    strategies, and implement innovative techniques to ensure
                    your campaigns stay ahead in a rapidly evolving digital
                    landscape.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="paid-com-item">
                <figure
                  data-aos="fadeIn"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <Image
                    src="/images/paid-com-img-02.jpg"
                    alt="Team"
                    layout="intrinsic"
                    width={630}
                    height={325}
                  />
                </figure>
                <div
                  className="paid-com-body"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h4>
                    Rest assured, we keep you informed every step of the way,
                    providing detailed reports and transparent insights into
                    your campaign&apos;s performance.
                  </h4>
                  <p>
                    Our collaborative approach allows us to align our efforts
                    with your business objectives, ensuring we deliver
                    measurable results that exceed your expectations.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pb-4 pb-lg-5 pb-xl-7">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="brand-imp-con"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  Make the best use of paid advertising and catapult your brand
                  to new heights.Let&apos;s ignite your online presence, boost
                  your visibility, and connect with your ideal customers through
                  our expertly crafted paid ad campaigns.
                </h4>
                <p>
                  Get in touch with us today, and let&apos;s embark on a journey
                  to drive your business forward.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand-story-sec paid-story-bg">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="brand-story"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="section-hd unique-hd">
                  <h3>
                    Reach the right audience at the right time and through the
                    right channels.
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="expertise-tb-sec pt-4 pt-lg-5 pt-xl-7 pb-4 pb-lg-5 pb-xl-7">
        <Tab.Container id="tab-expertise" defaultActiveKey="exp-tab-01">
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
                  <h3>Our Expertise</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} xs={12}>
                <Nav
                  className="exp-tb-nav"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-01">
                      01. Social Media Paid Ads
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-02">
                      02. Social Media Paid Ads
                      <ul>
                        <li>Display Advertisements</li>
                        <li>Search Ads</li>
                      </ul>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-03">
                      03. Application Ads
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-04">
                      04. YouTube Ads
                      <ul>
                        <li>Recurring Ads</li>
                        <li>Skippable and Non-Skippable Ads</li>
                      </ul>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      05. Programmatic Ads
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      06. Internet Re-marketing
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">07. Omnichannel</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={6} xs={12}>
                <div
                  className="exp-tb-con"
                  data-aos="fadeIn"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <figure>
                    <Image
                      src="/images/paid-expertise-tb-01.jpg"
                      alt="Image"
                      layout="intrinsic"
                      width={700}
                      height={750}
                    />
                  </figure>
                </div>
              </Col>
            </Row>
          </Container>
        </Tab.Container>
      </section>

      <TaglineSection />

      <WorkSection />

      <IndustriesSection />

      <ContactConsultation />

      <IncludeContact />
    </>
  );
}
