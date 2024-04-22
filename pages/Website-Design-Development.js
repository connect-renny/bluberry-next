import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import WorkSection from "./components/WorkSection";
import IndustriesSection from "./components/IndustriesSection";
import TaglineSection from "./components/TaglineSection";
import IncludeContact from "./components/IncludeContact";
import ContactConsultation from "./components/ContactConsultation";

export default function WebsiteDesign() {
  return (
    <>
      <Head>
        <title>
          Web Development company in New York | Website designing services in USA
        </title>
        <meta
          name="keywords"
          content="Web development New York,Website designing services in USA,Web Development company in New York"
        />
        <meta
          name="description"
          content="Best web development and website designing services in USA. As a leading web development company in New York we offer the best web development service. Your trusted partner for cutting-edge web solutions in New York."
        />
        <link
          rel="canonical"
          href="https://thebblabs.com/Website-Design-Development"
        />
        
      </Head>

      <section className="ins-slider-img-sec">
        <Container fluid="xxl">
          <div className="ins-slider">
            <Image
              src="/images/ins-slider-website.jpg"
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
                <h1>Website Design & Development</h1>
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
                  Is your digital address a true reflection of your brand? Is it
                  contemporary, responsive, and intuitive? Does it feature AI
                  and automation that complements your marketing and sales
                  efforts?
                </h3>
                <h4>Make your website do the work for you.</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="client-sec py-4 py-lg-5 py-xl-6" data-aos="fadeIn">
        <Container fluid>
          <Row className="d-flex align-items-center">
            <Col lg={6} xs={12}>
              <div
                className="website-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/webdesign-img.png"
                  alt="Website"
                  layout="intrinsic"
                  width={900}
                  height={800}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="website-column"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>Your website is your most precious digital asset.</h4>
                <p>
                  It is the home ground for all your online activities and the
                  top reference point for your customers. Of course, the looks
                  and décor matter. But the sitemust also be stable,
                  well-organized, and user-friendly to be effective and
                  functional.
                </p>
                <p>
                  We merge technical expertise, creative brilliance, and
                  user-centric design principles to craft a virtual masterpiece
                  that not only dazzles the eyes but also captivates the hearts
                  and minds of your visitors.
                </p>
                <p>
                  We merge technical expertise, creative brilliance, and
                  user-centric design principles to craft a virtual masterpiece
                  that not only dazzles the eyes but also captivates the hearts
                  and minds of your visitors.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-5 py-xl-5">
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
                  We begin by delving into the intricacies of your business,
                  understanding your goals, target audience, and unique value
                  proposition.
                </h4>
                <p>
                  Our digital architects then embarks on a journey to create a
                  custom-designed website that embodies the essence of your
                  brand and seamlessly guides your visitors toward meaningful
                  interactions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-5 py-xl-5">
        <Container fluid="xxl">
          <Row className="gx-xxl-5">
            <Col lg={6} xs={12}>
              <div
                className="web-des-item"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <figure>
                  <Image
                    src="/images/web-des-img-01.jpg"
                    alt="Team"
                    layout="intrinsic"
                    width={630}
                    height={325}
                  />
                </figure>
                <div
                  className="web-des-body"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <p>
                    Our website design and development services go beyond
                    external aesthetics. We pay meticulous attention to user
                    interface (UI) and user experience (UX) design principles to
                    ensure intuitive navigation, fast loading times, and
                    responsive layouts that adapt seamlessly to different
                    devices and screen sizes.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="web-des-item">
                <figure
                  data-aos="fadeIn"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <Image
                    src="/images/web-des-img-02.jpg"
                    alt="Team"
                    layout="intrinsic"
                    width={630}
                    height={325}
                  />
                </figure>
                <div
                  className="web-des-body"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <p>
                    Our developers then bring the design to life, using
                    cutting-edge technologies and industry best practices like
                    AI and Automation to deliver a website that is both visually
                    stunning and highly functional.Our developers expertly code
                    every line, optimizing for speed, performance, and
                    scalability.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="web-highlights-sec py-4 py-lg-5 py-lg-7">
        <Container>
          <Row>
            <Col>
              <div className="web-highlights">
                <div
                  className="web-high-icon"
                  data-aos="fadeIn"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <Image
                    src="/images/web-high-icon.png"
                    alt="Icon"
                    layout="intrinsic"
                    width={115}
                    height={100}
                  />
                </div>
                <div
                  className="web-high-body"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <p>
                    From intuitive product catalogs and streamlined checkout
                    processes to integrated payment gateways and inventory
                    management systems, we build robust e-commerce websites that
                    empower you to manage and grow your online business
                    effectively.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="mindset-sec pt-4 pt-lg-5 pt-xl-7 pb-4">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center gx-xxl-5">
            <Col lg={6} xs={12}>
              <div
                className="mindset-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h3 className="mb-4">
                  Accessibility and usability are at the core of our development
                  philosophy. Accessibility and usability are at the core of our
                  development philosophy.
                </h3>
                <p>
                  Therefore, we prioritize ensuring your website is accessible
                  to all, conforming to the highest standards of web
                  accessibility guidelines.
                </p>
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
                  And our commitment doesn&apos;t end with the launch of your
                  website.
                </h4>
                <p>
                  We offer ongoing support and maintenance services, ensuring
                  your digital presence remains at its peak performance. From
                  content updates to security enhancements, we stand by your
                  side as your trusted digital partner.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="expertise-tb-sec pt-4 pt-lg-5 pt-xl-7 pb-4 pb-lg-5">
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
                      01. Custom Website Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-02">
                      02. Responsive Web Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-03">
                      03. E-commerce Website Development
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-04">
                      04. User Interface (UI) Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      05. User Experience (UX) Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-06">
                      06. Front and Back End Development
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-07">
                      07. Content Management System (CMS) Integration
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-08">
                      08. Search Engine Optimization (SEO)
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-09">
                      09. Website Analytics and Tracking
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-10">
                      10. Website Maintenance and Support
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-11">
                      11. AI Integration
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={6} xs={12}>
                <div
                  className="exp-tb-con"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <figure>
                    <Image
                      src="/images/expertise-tb-web-01.jpg"
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

      <TaglineSection />

      <WorkSection />

      <IndustriesSection />

      <ContactConsultation />

      <IncludeContact />
    </>
  );
}
