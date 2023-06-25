import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import IncludeContact from "./components/IncludeContact";
import ProjectSlider from "./components/ProjectSlider";

import Link from "next/link";

import Slider from "react-slick";

// slick carousel import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Casestudies Result carousel
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function CaseStudies() {
  return (
    <>
      <section className="ins-slider-hd-sec">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="ins-slider-hd">
                <h6>Our Works</h6>
                <h1>Case Studies</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pb-4">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="section-hd case-intro-hd text-center">
                <h3>Swiss Military</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="case-screen-img">
                <Image
                  src="/images/case-study-screen.png"
                  alt="Team"
                  layout="intrinsic"
                  width={1300}
                  height={285}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row>
            <Col lg="8" xs={12}>
              <div className="case-dtl-con">
                <div className="count">01</div>
                <h4>E-commerce Website Development for the Swiss Military</h4>
                <p>
                  This case study presents a unique e-commerce website
                  development project undertaken by our team for the Swiss
                  Military, a renowned brand specializing in high-quality
                  watches and other accessories. The objective of the project
                  was to create a visually appealing and user-friendly online
                  platform that would enhance the Swiss Military&apos;s brand
                  image, drive sales, and provide a seamless shopping experience
                  to customers.
                </p>
                <p>
                  Client Background: Swiss Military is a prestigious brand known
                  for its durable and reliable outdoor products. With a
                  reputation for excellence, the Swiss Military offers a wide
                  range of items, including watches, travel gear, TWS, and more.
                  The UAE distribution of the brand began in 2023. The client
                  sought to establish a robust online presence and expand their
                  customer reach through an optimized e-commerce platform.
                </p>
              </div>
            </Col>
            <Col lg="4" xs={12}>
              <div className="case-dtl-info">
                <div className="info-item">
                  <div className="info-label">INDUSTRY</div>
                  <div className="info-value">Outdoor Products</div>
                </div>
                <div className="info-item">
                  <div className="info-label">LOCATION</div>
                  <div className="info-value">Dubai</div>
                </div>
                <div className="info-item">
                  <div className="info-label">INVOLVEMENT</div>
                  <div className="info-value">
                    E-Commerce Website Development
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-label">VISIT</div>
                  <div className="info-value">
                    <Link href="#">swissmilitary.me</Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div className="case-collage">
          <Image
            src="/images/case-collage.jpg"
            alt="Team"
            layout="intrinsic"
            width={1920}
            height={890}
          />
        </div>
      </section>

      <section className="py-4 py-lg-6 py-xl-7">
        <Container fluid="xxl">
          <Row>
            <Col lg="8" xs={12}>
              <div className="case-timeline">
                <div className="case-dtl-con mb-4">
                  <div className="count">02</div>
                  <h4>Project Objectives</h4>
                  <p>
                    To meet the project objectives, our team followed the
                    following approach:
                  </p>
                </div>
                <div className="time-item">
                  <div className="time-count">01</div>
                  <div className="time-body">
                    <h4>Requirement Gathering</h4>
                    <p>
                      Conducted comprehensive discussions with the Swiss
                      Military team to understand their specific requirements,
                      target audience, and desired functionalities.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">02</div>
                  <div className="time-body">
                    <h4>Custom Design and Development</h4>
                    <p>
                      Created a visually striking and unique website design
                      tailored to the Swiss Military&apos;s brand identity,
                      incorporating captivating visuals and clear product
                      showcases.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">03</div>
                  <div className="time-body">
                    <h4>Seamless User Experience</h4>
                    <p>
                      Developed an intuitive navigation structure, streamlined
                      the purchasing process and implemented user-friendly
                      features such as filters, search options, and wishlists.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">04</div>
                  <div className="time-body">
                    <h4>Mobile Responsiveness</h4>
                    <p>
                      Ensured that the website was fully optimized for mobile
                      devices, providing a seamless shopping experience across
                      smartphones and tablets.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">05</div>
                  <div className="time-body">
                    <h4>Secure Payment Integration</h4>
                    <p>
                      Integrated a reliable and secure payment gateway, enabling
                      customers to make purchases with confidence and peace of
                      mind.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">06</div>
                  <div className="time-body">
                    <h4>Performance Optimization</h4>
                    <p>
                      Conducted extensive optimization techniques, including
                      caching, image compression, and code optimization, to
                      enhance the website&apos;s speed and performance.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" xs={12}>
              <div className="case-mob-screen">
                <Image
                  src="/images/case-mob-screen.png"
                  alt="Slider"
                  layout="intrinsic"
                  width={450}
                  height={900}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="casestudy-res-sec py-4 py-lg-5 py-xl-5">
        <Container fluid>
          <Row>
            <Col xs={12} className="case-res-img-col">
              <div className="case-caro-img">
                <Image
                  src="/images/case-result-img.png"
                  alt="Image"
                  layout="intrinsic"
                  width={730}
                  height={965}
                />
              </div>
            </Col>
            <Col xs={12} className="case-res-caro-col">
              <div className="case-carousel">
                <div className="case-dtl-con mb-4">
                  <div className="count">03</div>
                  <h4>Result</h4>
                  <p>
                    The e-commerce website development project for the Swiss
                    Military delivered the following results:
                  </p>
                </div>
                <Slider className="slider " {...settings}>
                  <div>
                    <div className="case-result-item">
                      <div className="case-wave">
                        <div className="wave wave-01"></div>
                        <div className="wave wave-02"></div>
                        <div className="wave wave-03"></div>
                      </div>
                      <div className="case-result-hd">
                        <h4>1. Enhanced Brand Representation</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The website is created in WordPress and effectively
                          showcased the Swiss Military&apos;s brand identity,
                          values, and commitment to quality, leading to
                          increased brand recognition and customer trust.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="case-result-item">
                      <div className="case-wave">
                        <div className="wave wave-01"></div>
                        <div className="wave wave-02"></div>
                        <div className="wave wave-03"></div>
                      </div>
                      <div className="case-result-hd">
                        <h4>2. Improved User Experience</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The intuitive navigation, streamlined purchasing
                          process, and user-friendly features enhanced the
                          overall shopping experience, resulting in increased
                          customer satisfaction and reduced bounce rates. The
                          website follows the colour scheme of the parent brand
                          and adopts the latest trends and features of the era.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="case-result-item">
                      <div className="case-wave">
                        <div className="wave wave-01"></div>
                        <div className="wave wave-02"></div>
                        <div className="wave wave-03"></div>
                      </div>
                      <div className="case-result-hd">
                        <h4>1. Enhanced Brand Representation</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The website is created in WordPress and effectively
                          showcased the Swiss Military&apos;s brand identity,
                          values, and commitment to quality, leading to
                          increased brand recognition and customer trust.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="case-result-item">
                      <div className="case-wave">
                        <div className="wave wave-01"></div>
                        <div className="wave wave-02"></div>
                        <div className="wave wave-03"></div>
                      </div>
                      <div className="case-result-hd">
                        <h4>2. Improved User Experience</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The intuitive navigation, streamlined purchasing
                          process, and user-friendly features enhanced the
                          overall shopping experience, resulting in increased
                          customer satisfaction and reduced bounce rates. The
                          website follows the colour scheme of the parent brand
                          and adopts the latest trends and features of the era.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row className="d-flex align-items-center">
            <Col lg={6} xs={12}>
              <div className="case-dev-img">
                <Image
                  src="/images/case-dev.png"
                  alt="Image"
                  layout="intrinsic"
                  width={700}
                  height={535}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="case-dev-con">
                <h4 className="mb-xxl-4">
                  Our team successfully transformed the Swiss Military's online
                  presence by developing a unique and user-friendly e-commerce
                  website.
                </h4>
                <p>
                  The project resulted in enhanced brand representation,
                  improved user experience, increased sales, and positive
                  customer feedback. By aligning with the Swiss Military's
                  objectives and leveraging our expertise, we delivered a
                  high-quality e-commerce solution that positioned the brand for
                  continued growth and success in the competitive digital
                  landscape.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}></Col>
          </Row>
        </Container>
      </section>

      <section className="our-project-sec">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-hd text-center">
                <h3>Other Projects</h3>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row className="gx-0">
            <Col xs={12}>
              <ProjectSlider />
            </Col>
          </Row>
        </Container>
      </section>

      <IncludeContact />
    </>
  );
}
