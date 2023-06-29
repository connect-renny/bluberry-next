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
                <h3>Maaza</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="case-screen-img">
                <Image
                  src="/images/case-study-screen-maaza.png"
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
                <h4>
                  Maaza Brand Guidelines Case Study: Building Consistency and
                  Engagement in the UAE
                </h4>
                <p>
                  This case study highlights the development and implementation
                  of comprehensive brand guidelines for Maaza, a beloved fruit
                  beverage brand, in the UAE. The objective of this project was
                  to establish a consistent and engaging brand identity that
                  resonates with the target audience, strengthens brand
                  recognition, and fosters a deeper connection with consumers.
                </p>
                <p>
                  Client Background: Maaza is a well-known fruit beverage brand
                  that offers a wide range of refreshing and natural fruit
                  juices with high focus on mangoes. The brand holds a
                  significant market presence in the UAE and aims to reinforce
                  its position as a trusted and preferred choice for consumers
                  seeking quality fruit beverages.
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
                  <div className="info-value">UAE</div>
                </div>
                <div className="info-item">
                  <div className="info-label">INVOLVEMENT</div>
                  <div className="info-value">Branding</div>
                </div>
                <div className="info-item">
                  <div className="info-label">VISIT</div>
                  <div className="info-value">
                    <Link href="https://www.maaza.com/" target="_blank">
                      maaza.com
                    </Link>
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
            src="/images/case-collage-maaza.jpg"
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
                    <h4>Brand Identity Development</h4>
                    <p>
                      Create a compelling brand identity that encapsulates
                      Maaza's values, essence, and unique selling points, while
                      aligning with the brand's target audience in the UAE.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">02</div>
                  <div className="time-body">
                    <h4>Consistent Visual Branding</h4>
                    <p>
                      Establish guidelines for consistent and cohesive visual
                      branding elements, including logo usage, typography,
                      colour palette, and imagery, across all brand touchpoints.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">03</div>
                  <div className="time-body">
                    <h4>The Tone of Voice and Messaging</h4>
                    <p>
                      Define a distinctive and engaging tone of voice that
                      reflects Maaza's brand personality, and develop guidelines
                      for consistent messaging across various communication
                      channels.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">04</div>
                  <div className="time-body">
                    <h4>Packaging and Labeling</h4>
                    <p>
                      Design guidelines for packaging and labelling to ensure
                      consistency and a visually appealing presence on store
                      shelves, enhancing brand recognition and recall.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">05</div>
                  <div className="time-body">
                    <h4>Digital and Social Media Guidelines</h4>
                    <p>
                      Create guidelines for digital and social media platforms,
                      including website design, social media posts, and online
                      advertising, to maintain a cohesive brand experience
                      across all online channels.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" xs={12}>
              <div className="case-mob-screen">
                <Image
                  src="/images/case-mob-screen-maaza.png"
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
                  src="/images/case-result-img-maaza.png"
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
                    The website development project delivered the following
                    outcomes:
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
                        <h4>1. Consistent Brand Identity</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The comprehensive brand guidelines established a
                          consistent and recognizable brand identity for Maaza,
                          strengthening brand recognition and recall among
                          consumers in the UAE.
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
                        <h4>2. Enhanced Customer Engagement</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The distinctive tone of voice and consistent messaging
                          across all communication channels fostered a deeper
                          connection with consumers, increasing engagement and
                          brand loyalty.
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
                        <h4>1. Consistent Brand Identity</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The comprehensive brand guidelines established a
                          consistent and recognizable brand identity for Maaza,
                          strengthening brand recognition and recall among
                          consumers in the UAE.
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
                        <h4>2. Enhanced Customer Engagement</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The distinctive tone of voice and consistent messaging
                          across all communication channels fostered a deeper
                          connection with consumers, increasing engagement and
                          brand loyalty.
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
                  src="/images/case-dev-maaza.png"
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
                  The development and implementation of comprehensive brand
                  guidelines for Maaza in the UAE successfully established a
                  consistent and engaging brand identity.
                </h4>
                <p>
                  The guidelines ensured coherence in visual branding, tone of
                  voice, and messaging across various touchpoints, leading to
                  increased brand recognition, customer engagement, and overall
                  brand loyalty. By adhering to the brand guidelines, Maaza has
                  positioned itself as a trusted and preferred choice for
                  consumers in the competitive fruit beverage market in the UAE.
                </p>
              </div>
            </Col>
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
