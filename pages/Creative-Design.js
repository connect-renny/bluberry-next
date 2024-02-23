import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import WorkSection from "./components/WorkSection";
import IndustriesSection from "./components/IndustriesSection";
import TaglineSection from "./components/TaglineSection";
import IncludeContact from "./components/IncludeContact";
import ContactConsultation from "./components/ContactConsultation";

export default function GraphicDesign() {
  return (
    <>
      <Head>
        <title>
          Digital creative services NYC | Company Profile Design in New York
        </title>
        <meta
          name="keywords"
          content="Digital creative services NYC,Company Profile Design in New York"
        />
        <meta
          name="description"
          content="Explore cutting-edge digital creative services in NYC with BBLabs. From innovative Company Profile Designs to a spectrum of creative solutions, we redefine your brand's visual identity. Partner with BBLabs for a unique blend of artistic flair and strategic design, elevating your brand presence in New York with compelling digital creativity."
        />
      </Head>
      <section className="ins-slider-img-sec">
        <Container fluid="xxl">
          <div className="ins-slider">
            <Image
              src="/images/ins-slider-graphic.jpg"
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
                <h1>Creative Design</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pt-xl-6 pb-4">
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
                  Are your artworks and digital media a true reflection of who
                  you are?
                </h3>
                <h3>
                  Are they visual statements that accurately showcase your
                  values and your message?
                </h3>
                <h3>
                  If not, you need strategic, well-thought-out designs that are
                  custom-made for you.
                </h3>
                <h4>
                  It is a given that you will need graphics. After all, a
                  picture is worth a thousand words.
                </h4>
                <p>
                  But all graphics are not created equal. You need fresh,
                  creative designs that represent your brand&apos;s
                  innovativeness and freshness.Your visuals are, after all, the
                  framework for the optics you seek to portray for your
                  business.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="graphic-sec pt-4 pt-lg-5 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row className="d-flex flex-lg-row-reverse align-items-center">
            <Col lg={6} xs={12}>
              <div
                className="graphics-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/graphic-des-01.jpg"
                  alt="Team"
                  layout="intrinsic"
                  width={625}
                  height={525}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="graphics-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4 className="mb-xxl-4">
                  BluBerry Labs thrives on creative expression. Our visual
                  storytelling transforms ideas into captivating realities.
                </h4>
                <p>
                  Every element in a design should have a purpose. And every end
                  product should communicate a powerful message. And that&apos;s
                  what we offer; we convey your brand&apos;s message through our
                  mindful and effective digital media.
                </p>
                <p>
                  Our service covers your diverse needs. From logo creation and
                  marketing materials to print materials, digital graphics, and
                  user interface design, we have the capabilities to handle all
                  kinds of design projects.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="graphic-sec pt-4 pt-lg-5 pb-4 pb-lg-5 pb-xl-7">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col lg={6} xs={12}>
              <div
                className="graphics-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/graphic-des-02.jpg"
                  alt="Team"
                  layout="intrinsic"
                  width={625}
                  height={525}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="graphics-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4 className="mb-xxl-4">
                  At the core of our service is a team of highly skilled graphic
                  designers who possess a deep understanding of design
                  principles and trends.
                </h4>
                <p>
                  Harnessing the power of color, typography, and imagery, they
                  create unforgettable visual experiences.They combine their
                  technical expertise with a keen eye for aesthetics to create
                  visually stunning art that aligns with your brand&apos;s
                  identity.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="graphics-high-sec py-4">
        <Container fluid="xxl">
          <Row className="d-flex flex-row-reverse align-items-end">
            <Col lg={6} xs={12}>
              <div
                className="brand-high-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/graphic-computer.png"
                  alt="Values"
                  layout="intrinsic"
                  width={600}
                  height={485}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="graphics-high-con"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  We translate your brand&apos;s message into mesmerizing logos
                  and striking marketing materials that embody your brand&apos;s
                  essence.
                </h4>
                <p>
                  Whether it is for a catchy social media post or a compelling
                  business presentation, we provide classy designs that take
                  into account the changing aesthetic values of your audience.
                </p>
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
                  Throughout the process, we maintain open and transparent
                  communication with our clients.
                </h4>
                <p>
                  We believe in collaboration, and we value your input and
                  feedback. This collaborative approach ensures that the final
                  outcome meets your expectations and accurately represents your
                  brand.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="graphic-sec pt-4 pt-lg-5 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col lg={6} xs={12}>
              <div
                className="graphics-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/graphic-des-03.png"
                  alt="Team"
                  layout="intrinsic"
                  width={600}
                  height={550}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="graphics-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4 className="mb-xxl-4">
                  We can promise you the right vibe and the right feel for our
                  services because we stay up-to-date with the latest trends and
                  industry best practices
                </h4>
                <p>
                  Likewise, we also employ industry-standard software and tools
                  to make sure of the highest quality and precision in our
                  designs.
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
                    <Nav.Link eventKey="exp-tab-01">01. Print Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-02">
                      02. Digital Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-03">
                      03. User Interface (UI) Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-04">
                      04. Visual Content Creation
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      05. Customized Graphics - infographics, illustrations, and
                      multimedia assets
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
                      src="/images/expertise-tb-graphic-01.jpg"
                      alt="Values"
                      layout="intrinsic"
                      width={700}
                      height={700}
                    />
                    {/* <div className="counter">01</div> */}
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
