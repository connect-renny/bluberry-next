import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import WorkSection from "./components/WorkSection";
import IndustriesSection from "./components/IndustriesSection";
import ContactConsultation from "./components/ContactConsultation";
import IncludeContact from "./components/IncludeContact";

export default function Branding() {
  return (
    <>
      <section className="ins-slider-img-sec">
        <Container fluid="xxl">
          <div className="ins-slider">
            <Image
              src="/images/ins-slider-branding.jpg"
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
                <h6>Services</h6>
                <h1>Branding</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pb-4">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col xs={12}>
              <div
                className="branding-intro"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h3>
                  What does your brand portray to the world? What images does it
                  evoke? What values do you stand for?
                </h3>
                <h4>The answers to these are what make you stand out.</h4>
                <p>
                  At BluBerry Labs, we understand that branding is the
                  cornerstone of success in today&apos;s competitive landscape.
                  It is the art of creating a powerful connection with your
                  audience, leaving an indelible mark that resonates long after
                  the encounter.
                </p>
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
                className="branding-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4 className="mb-xxl-4">
                  Our branding services transcend mere aesthetics and delve into
                  strategic craftsmanship.
                </h4>
                <p>
                  We employ a blend of technical prowess, creative vision, and
                  consumer psychology to craft an authentic and captivating
                  brand experience that will set you apart from the crowd.
                </p>
                <p>
                  Through meticulous research and analysis, we unearth the
                  essence of your business, unraveling its core values,
                  aspirations, and unique selling propositions. Our team then
                  distills this essence into a visually arresting and
                  emotionally evocative brand identity.
                </p>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="branding-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/branding.jpg"
                  alt="Team"
                  layout="intrinsic"
                  width={625}
                  height={525}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand-high-sec">
        <Container fluid="xxl">
          <Row className="d-flex flex-row-reverse align-items-end">
            <Col lg={7} xs={12}>
              <div
                className="brand-high-con"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  But the power of our branding extends beyond the realm of
                  traditional brand collaterals. It permeates every facet of
                  your business, from your website to packaging, customer
                  service, and social media presence. We, thus, curate a
                  cohesive brand ecosystem.
                </h4>
                <p>
                  We design captivating logos and graphics, expressing your
                  brand&apos;s persona through meaningful art, colors, and
                  typography.
                </p>
              </div>
            </Col>
            <Col lg={5} xs={12}>
              <div
                className="brand-high-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/branding-man.png"
                  alt="Values"
                  layout="intrinsic"
                  width={450}
                  height={550}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-5 py-xl-7">
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
                  Just as important, it&apos;s also not merely about captivating
                  visuals— it&apos;s about creating an immersive journey that
                  beckons your audience to embark.
                </h4>
                <p>
                  We craft compelling brand stories, meticulously honed to
                  reflect your core values, and craft messaging that speaks
                  directly to the hearts and minds of your customers.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand-story-sec unique-sec">
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
                    The world is waiting to embrace your unique story - let us
                    unveil it.
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="expertise-tb-sec pt-4 pt-lg-5 pt-xl-7 pb-4 pb-lg-5">
        <Tab.Container id="tab-expertise" defaultActiveKey="exp-tab-01">
          <Container fluid="xxl">
            <Row>
              <Col lg={6} xs={12}>
                <div
                  className="section-hd"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h6>What we do</h6>
                  <h3>Our Expertise</h3>
                </div>
                <Nav
                  className="exp-tb-nav"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-01">
                      01. Brand Assessment & Audit
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-02">
                      02. Brand Strategy & Positioning
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-03">
                      03. Communications Strategy
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-04">
                      04. Logo & Identity
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      05. Corporate Profiles & Styling
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-06">
                      06. Interiors Branding
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-07">
                      07. Office Stationery
                    </Nav.Link>
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
                      src="/images/expertise-tb-brand-01.jpg"
                      alt="Values"
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

      <WorkSection />

      <IndustriesSection />

      <ContactConsultation />

      <IncludeContact />
    </>
  );
}
