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
              src="/images/ins-slider-social-media.jpg"
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
                <h1>Social Media Marketing</h1>
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
                  Does your social media reach the relevant audience? Are the
                  likes and comments on your social media organic?
                </h3>
                <h4>
                  Scratch under the surface of social media to find and build
                  your community.
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
                  src="/images/social-med-img.png"
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
                  You must be living under a rock if you do not realize social
                  media is now a crucial marketing platform.
                </h4>
                <p>
                  It is where businesses launch new products, influencers
                  promote them, and consumers make decisions and transactions.
                </p>
                <p>
                  Partner with BluBerry to harness this power. Our social media
                  marketing and management (SMM) services will enable you to
                  build a loyal community of followers and drive engagement. Our
                  social media experts will create and execute tailored
                  strategies to increase your brand&apos;s visibility, foster
                  meaningful connections, and obtain measurable Return
                  onInvestment (RoI). We create compelling content, manage
                  social media communities, run targeted ad campaigns, and
                  monitor social media analytics to ensure your brand stands out
                  in the crowded social media landscape and drives meaningful
                  engagement.
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
                  We help you build a strong online presence and engage your
                  target audience across diverse social media platforms.
                </h4>
                <p>
                  These include popular platforms such as Facebook, YouTube,
                  Instagram, Twitter, LinkedIn, TikTok, and WhatsApp and also
                  new or niche ones such asClubhouse, Discord, Twitch,
                  Tumblr,Snapchat, Pinterest, Reddit, etc. What&apos;s more, we
                  help you identify the right channelsthat are relevant to your
                  products and services.
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
              <div className="mindset-content">
                <h4>
                  From platform selection to content creation, we curate a
                  captivating social media ecosystem that captivates your
                  audience and drives real business results.
                </h4>
                <p>
                  Our focus is on organic social media growth. We monitor
                  conversations, respond promptly to inquiries, and nurture
                  relationships with your followers. Our goal is to build an
                  engaged and loyal community around your brand, fostering
                  meaningful interactions and driving advocacy.
                </p>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="mindset-img">
                <h3 className="mb-4">
                  Furthermore, we adopt advanced analytics tools to measure the
                  performance of your social media campaigns.
                </h3>
                <h3>
                  We track engagement metrics, monitor sentiment analysis, and
                  dive deep into data-driven insights to continuously refine our
                  strategies.
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pb-4 pb-lg-5 pb-xl-7">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="brand-imp-con">
                <h4>
                  Our commitment to staying at the forefront of social media
                  trends ensures that your brand remains relevant and impactful.
                </h4>
                <p>
                  So, let us take charge of your social media and transform it
                  into your top-performing investment.
                </p>
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
                <div className="section-hd">
                  <h6>What we do</h6>
                  <h3>Our Expertise</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} xs={12}>
                <Nav className="exp-tb-nav">
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-01">
                      01. Social Media Strategy Development
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-02">
                      02. Social Media Multi-channel Account Setup and Social
                      Media Optimization
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-03">
                      03. Content Creation and Curation
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-04">
                      04. Content Scheduling and Publishing
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      05. Community Management
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      06. Social Media Advertising; Cross-platform Targeted
                      Advertising
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      07. Influencer Marketing
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      08. Social Media Analytics and Reporting
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      09. Social Listening and Reputation Management
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      10. Social Listening and Reputation Management
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      11. Social Media Influencer Outreach
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      12. CXM Integration
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      13. Social Media Training and Consultation
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={6} xs={12}>
                <div className="exp-tb-con">
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
