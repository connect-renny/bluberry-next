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
                <h3>10X Properties</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="case-screen-img">
                <Image
                  src="/images/case-study-screen-10x.png"
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
                <h4>Website Development for 10X Properties</h4>
                <p>
                  This case study presents the website development project
                  undertaken for 10X Properties, a prominent real estate
                  company. The objective was to create a dynamic and
                  user-friendly website that showcased their properties,
                  services, and brand identity while providing a seamless user
                  experience.
                </p>
                <p>
                  Client Background: 10X Properties is a leading real estate
                  firm specializing in residential and commercial property
                  development, sales, and leasing. With a focus on delivering
                  exceptional customer service and innovative solutions, the
                  company sought to enhance its online presence through a modern
                  and engaging website.
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
                  <div className="info-value">
                    E-Commerce <br />
                    Website Development
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-label">VISIT</div>
                  <div className="info-value">
                    <Link href="https://10xproperties.ae/" target="_blank">
                      10xproperties.ae
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
            src="/images/case-collage-10x.jpg"
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
                    <h4>
                      Design an aesthetically pleasing and user-friendly website
                      that aligned with 10X Properties' brand image.
                    </h4>
                    <p>
                      Showcasing the company's diverse portfolio of properties
                      with detailed information, high-quality images, and
                      virtual tours.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">02</div>
                  <div className="time-body">
                    <h4>
                      Implementing an intuitive property search functionality to
                      facilitate seamless property exploration and selection.
                    </h4>
                    <p>
                      Creating a responsive website design to ensure optimal
                      user experience across various devices and screen sizes.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">03</div>
                  <div className="time-body">
                    <h4>
                      Integrating lead generation mechanisms to drive customer
                      inquiries and engagement.
                    </h4>
                    <p>
                      Ensuring robust security measures to protect user data and
                      maintain a safe browsing experience.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" xs={12}>
              <div className="case-mob-screen">
                <Image
                  src="/images/case-mob-screen-10x.png"
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
                  src="/images/case-result-img-10x.png"
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
                        <h4>
                          1. Visually Captivating and User-Friendly Website
                        </h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The new website showcased 10X Properties' properties
                          and services engagingly and intuitively, resulting in
                          an enhanced user experience.
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
                        <h4>2. Seamless Property Search Experience</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The implemented search functionality enabled visitors
                          to easily explore and filter properties based on their
                          preferences, leading to improved user satisfaction.
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
                        <h4>
                          1. Visually Captivating and User-Friendly Website
                        </h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The new website showcased 10X Properties' properties
                          and services engagingly and intuitively, resulting in
                          an enhanced user experience.
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
                        <h4>2. Seamless Property Search Experience</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The implemented search functionality enabled visitors
                          to easily explore and filter properties based on their
                          preferences, leading to improved user satisfaction.
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
                  src="/images/case-dev-10x.png"
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
                  Our team successfully transformed the Swiss Military&apos;s
                  online presence by developing a unique and user-friendly
                  e-commerce website.
                </h4>
                <p>
                  The project resulted in enhanced brand representation,
                  improved user experience, increased sales, and positive
                  customer feedback. By aligning with the Swiss Military&apos;s
                  objectives and leveraging our expertise, we delivered a
                  high-quality e-commerce solution that positioned the brand for
                  continued growth and success in the competitive digital
                  landscape.
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
