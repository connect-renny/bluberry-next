import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import WorkSection from "./components/WorkSection";
import IndustriesSection from "./components/IndustriesSection";
import TaglineSection from "./components/TaglineSection";
import IncludeContact from "./components/IncludeContact";
import ContactConsultation from "./components/ContactConsultation";

export default function Content() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://thebblabs.com/Content" />
        
      </Head>

      <section className="ins-slider-img-sec">
        <Container fluid="xxl">
          <div className="ins-slider">
            <Image
              src="/images/ins-slider-content.jpg"
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
                <h1>Content</h1>
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
                  Does your online content influence consumers? Is it effective
                  in bringing people to your digital presence? Does it inspire
                  action?
                </h3>
                <h4>
                  If content is king, how much more powerful then arethose who
                  create content? Your choice of your digital agency determines
                  your impact.
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-5 py-xl-6" data-aos="fadeIn">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col lg={6} xs={12}>
              <div
                className="content-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/content-img.png"
                  alt="Website"
                  layout="intrinsic"
                  width={900}
                  height={525}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="content-column"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>Attention is the new currency. And distractions abound.</h4>
                <p>
                  Only if you capture the attention of your target audience and
                  then retain it enough to get your message acrosswill you be
                  able to persuade them.Action starts with attention. You need
                  your audience to be attracted, engaged, and influenced.
                </p>
                <p>
                  That&apos;s where BluBerry Labs comes in. We weave stories
                  with words and visuals - stories that enchant, engage, and
                  entice.In today&apos;s data-driven world, creating and
                  managing exceptional content is the key to establishing
                  thought leadership, driving interactions, and nurturing
                  long-lasting connections with your users and customers.
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
              <div
                className="app-highlight"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  Our content management and content marketing services
                  helpconnect your audience with your brand and elevate these
                  interactions into measurable action.
                </h4>
                <p>
                  From blog posts and articles to videos and infographics, we
                  create high-quality content that generates traffic, boosts
                  conversions, and positions your brand as a trusted authority.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-5 py-xl-7">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col lg={6} xs={12}>
              <div
                className="app-dev-column"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  To do this,we first gauge your needs, study your ecosystem and
                  understand your business goals.
                </h4>
                <p>
                  We then identify and develop a comprehensive content strategy
                  that aligns with your brand&apos;s voice, values, and
                  objectives. We also make sure that this also answers the needs
                  and desires of the public - a win-win for all. We then
                  carefully craft a roadmap that outlining the content types,
                  themes, and channels to engage your audience effectively.
                </p>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="app-column-01"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/content-goals.jpg"
                  alt="Team"
                  layout="intrinsic"
                  width={630}
                  height={360}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}></Col>
          </Row>
        </Container>
      </section>

      <section className="content-high-sec">
        <Container>
          <Row>
            <Col xs={12}>
              <div
                className="content-highlights"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h3>
                  Our content management service then focuses on creating
                  high-quality, relevant, and valuable digital resources that
                  bring measurable results.
                </h3>
                <p>
                  We blend the art of creativity with the science of data-backed
                  insights to bring about compelling content. Every piece of
                  media is meticulously crafted to inspire, educate, entertain,
                  and drive action.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-5 py-xl-7">
        <Container fluid="xxl">
          <Row className="gx-xxl-5">
            <Col lg={6} xs={12}>
              <div
                className="app-exp-item"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  But creating diverse digital materials is only one aspect of
                  our services.
                </h4>
                <p>
                  We also offer comprehensive content management services to
                  ensure this content reaches its intended audience. We
                  distribute and promote content across relevant channels to
                  increase brand visibility, attract organic traffic, and
                  establish your brand.
                </p>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="app-exp-item"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h4>
                  We analyze performance metrics and insights to continuously
                  refine our strategies.
                </h4>
                <p>
                  Our goal is to create a virtuous cycle of improvement, where
                  each piece of content builds upon the successes of the past,
                  driving continuous growth for your brand.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand-story-sec content-story-bg">
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
                    us and amplify your brand&apos;s voice.
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
                      01. Content Assessment & Audit
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-02">
                      02. Content Strategy & Positioning
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-03">
                      03. Blogs, Articles
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-04">
                      04. Social Media Posts
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      05. Corporate Collaterals - Brochures, Reports, Case
                      Studies, Infographics
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
                      src="/images/con-expertise-tb-01.jpg"
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
