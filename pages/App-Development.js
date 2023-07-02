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
              src="/images/ins-slider-app.jpg"
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
                <h1>App Development</h1>
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
                  Is your web presence limited to website & social media? Have
                  you considered how apps can transform your digital presence?
                </h3>
                <h4>Applications are computing made mobile.</h4>
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
                className="app-dev-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/app-dev-img.png"
                  alt="Website"
                  layout="intrinsic"
                  width={900}
                  height={800}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="app-dev-column"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>Want to book a ticket? Get healthier? Think better? </h4>
                <p>
                  There&apos;s an app for each of that and for a million other
                  tasks. Apps are fast becoming the interface of choice for the
                  current generation brought up as digital natives.Therefore,
                  having a well-designed and functional app can significantly
                  enhance your business&apos;s reach and user experience.
                </p>
                <p>
                  We at BluBerry Labsunderstand this. In today&apos;s
                  hypermobile world, having a cutting-edge, user-friendly app is
                  crucial for staying ahead of the competition and reaching your
                  target audience wherever they are.
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
                  We specialize in creating custom applications for mobile on
                  iOS and Android platforms as well as for the web.
                </h4>
                <p>
                  Our strong focus is on user experience (UX) and user interface
                  (UI) design. We meticulously optimize the navigation flow,
                  ensuring that users can effortlessly navigate through your app
                  and accomplish their goals with ease. Using the latest
                  advances in Cloud computing, AI, and Automation, we offer
                  feature-rich apps that are innovative, creative, and
                  intuitive.
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
                <p>
                  Our mobile and web app development services are tailored to
                  bring your vision to life and create a seamless mobile
                  experience that captivates users and drives business growth.
                  From ideation to deployment, we guide you through every step
                  of the app development process.
                </p>
                <p>
                  We transform your ideas into wireframes and prototypes,
                  ensuring that every element of the app aligns with your brand
                  identity and user expectations.
                </p>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="app-column-01"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/app-dev-img-01.jpg"
                  alt="Team"
                  layout="intrinsic"
                  width={630}
                  height={390}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}></Col>
          </Row>
        </Container>
      </section>

      <section className="app-expertise-sec">
        <Container fluid className="gx-0">
          <Row className="gx-0">
            <Col lg={6} xs={12}>
              <div
                className="app-expert-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/app-expertise-img.jpg"
                  alt="App"
                  layout="intrinsic"
                  width={985}
                  height={425}
                />
              </div>
            </Col>
            <Col lg={6} xs={12} className="d-flex align-items-center">
              <div
                className="app-expert-con"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4>
                  We combine technical expertise, creative flair, and a deep
                  understanding of user behavior to build robust, scalable, and
                  secure applications.
                </h4>
                <p>
                  And then, we rigorously test every aspect of the app to ensure
                  its functionality, performance, and compatibility across
                  different devices and operating systems.
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
                  If your business or service caters to retail, e-commerce, or
                  other service industries, apps are a natural extension of your
                  sales platforms.
                </h4>
                <p>
                  However, even for other domains like education, healthcare,
                  wellness, finance, engineering, etc., there are various ways
                  that apps can complement your sales and operations.
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
                <p>
                  We also offer comprehensive app deployment and ongoing
                  maintenance services, ensuring your app remains up-to-date,
                  secure, and optimized for the ever-evolving mobile landscape.
                </p>
                <p>
                  Our services include app store optimization (ASO) strategies
                  to increase your app&apos;s visibility and downloads.
                  Additionally, we monitor app performance, user feedback, and
                  analytics to identify areas for improvement and implement
                  updates accordingly.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand-story-sec app-exp-sec">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="brand-story">
                <div
                  className="section-hd unique-hd"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h3>
                    So if you are looking at new avenues for business growth,
                    give apps a try.
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
                      01. Mobile App Development
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-02">
                      02. Web App Development
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-03">
                      03. User Experience (UX) Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-04">
                      04. User Interface (UI) Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-05">
                      05. Front-end and Back-end Development
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-06">
                      06. Database Design and Development
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-07">
                      07. API Development and Integration
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-08">
                      08. Cross-Platform Development
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-09">
                      09. Native App Development
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-10">
                      10. Quality Assurance and Testing
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-11">
                      11. App Deployment and Release
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="exp-tab-12">
                      12. App Maintenance and Support
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={6} xs={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="exp-tab-01">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">01</div>
                      </figure>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exp-tab-02">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">02</div>
                      </figure>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exp-tab-03">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">03</div>
                      </figure>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exp-tab-04">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">04</div>
                      </figure>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exp-tab-05">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">05</div>
                      </figure>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exp-tab-06">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">06</div>
                      </figure>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exp-tab-07">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">07</div>
                      </figure>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exp-tab-08">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">08</div>
                      </figure>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exp-tab-09">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">09</div>
                      </figure>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exp-tab-10">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">10</div>
                      </figure>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exp-tab-11">
                    <div className="exp-tb-con">
                      <figure>
                        <Image
                          src="/images/web-expertise-tb-01.jpg"
                          alt="Values"
                          layout="intrinsic"
                          width={700}
                          height={750}
                        />
                        <div className="counter">11</div>
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
