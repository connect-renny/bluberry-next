import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import WorkSection from "./components/WorkSection";
import IndustriesSection from "./components/IndustriesSection";
import TaglineSection from "./components/TaglineSection";
import IncludeContact from "./components/IncludeContact";
import ContactConsultation from "./components/ContactConsultation";

export default function SEO() {
  return (
    <>
      <section className="ins-slider-img-sec">
        <Container fluid="xxl">
          <div className="ins-slider">
            <Image
              src="/images/ins-slider-seo.jpg"
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
                <h1>SEO</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pt-xl-6 pb-4">
        <Container fluid="xxl">
          <Row
            className="d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <Col xs={12}>
              <div className="branding-intro">
                <h3>
                  When you search your brand on Google, does it appear on the
                  first page of Google results? <br /> What if you search for
                  your service or product? Is your brand visible in the results?
                </h3>
                <h4>
                  To feature among the top results, you have to beat
                  Google&apos;s algorithms. That&apos;s where SEO comes in.
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pb-4 pb-lg-5 pb-xl-7">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col lg={6} xs={12}>
              <div
                className="seo-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/seo-img.png"
                  alt="Team"
                  layout="intrinsic"
                  width={600}
                  height={555}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="seo-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4 className="mb-xxl-4">
                  Visibility on search engines is paramount to driving organic
                  traffic, increasing brand awareness, and achieving sustainable
                  growth.
                </h4>
                <p>
                  BluBerry Labs brings to youpersonalizedsearch engine
                  optimization (SEO) services that can help you achieve success.
                  We offer personalized solutions, including keyword research,
                  on-page optimization, backlink building, and analytics
                  tracking.
                </p>
                <p>
                  Our SEO service is aimed at improving your website&apos;s
                  visibility on search engines like Google, Bing, and Yahoo.We
                  combine cutting-edge techniques, industry best practices, and
                  a deep understanding of search algorithms to optimize every
                  aspect of your digital presence.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="seo-highlight-sec py-4 py-lg-5 py-xl-7">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="seo-highlight"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h3>
                  Our team of SEO experts employs a range of techniques to boost
                  your website&apos;s authority and credibility.
                </h3>
                <p>
                  Through thorough keyword research, we identify the most
                  relevant and high-traffic keywords for your business. Armed
                  with this knowledge, we strategically integrate these keywords
                  into your website&apos;s content, meta tags, and URLs,
                  maximizing its relevance and ensuring it aligns with the
                  intent of search engine users.We also leverage the power of
                  local SEO to target specific geographical areas, ensuring that
                  your business thrives in the local market.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pt-xl-7 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col lg={6} xs={12}>
              <div
                className="seo-column-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/seo-img-01.jpg"
                  alt="Team"
                  layout="intrinsic"
                  width={630}
                  height={430}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="seo-column-con"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4 className="mb-xxl-4">
                  But SEO goes beyond keywords. We meticulously analyze and
                  optimize your website&apos;s structure, ensuring it adheres to
                  industry standards and search engine guidelines.
                </h4>
                <p>
                  Our on-page optimization services ensure your website is
                  optimized for search engines and user experience. We optimize
                  page load speed, enhance mobile responsiveness, and improve
                  user experience, creating a seamless journey for both search
                  engine crawlers and your visitors. We develop strategic
                  link-building campaigns, earning high-quality backlinks from
                  reputable sources to enhance your website&apos;s visibility
                  and improve search rankings.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}></Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row
            className="d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <Col lg={6} xs={12}>
              <div className="team-content">
                <h4>
                  Finally, our analytics tracking services help you measure the
                  success of your SEO efforts and make data-driven decisions.
                </h4>
                <p>
                  We provide in-depth analytics and reporting, offering valuable
                  insights into the performance of your SEO efforts. Our team
                  continuously monitors search engine trends, algorithm updates,
                  and emerging SEO techniques, ensuring that your brand remains
                  at the forefront of optimization strategies.
                </p>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="seo-column-hlt"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h3>
                  So, if you&apos;re ready to claim your position at the top of
                  search engine results, drive organic traffic, and establish
                  your brand as an authority in your industry, get started with
                  SEO today.
                </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}></Col>
          </Row>
        </Container>
      </section>

      <section className="brand-story-sec seo-bg-sec">
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
                    We invite you to embark on this transformative journey with
                    us.
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
                      01. Website Audit and Analysis
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-02">
                      02. Keyword Research and Analysis:
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-03">
                      03. On-Page Optimization
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-04">
                      04. Off-Page Optimization
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      05. Content Development and Optimization
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-06">06. Technical SEO</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-07">07. Local SEO</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-08">
                      08. SEO Performance Tracking and Reporting
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-09">
                      09. Competitor Analysis
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-10">
                      10. SEO Consultation and Strategy
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-11">
                      11. E-commerce SEO
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-11">
                      12. Penalty Recovery
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={6} xs={12}>
                <Tab.Content>
                  <Tab.Pane
                    eventKey="exp-tab-01"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/seo-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={655}
                          height={750}
                        />
                      </figure>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
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
