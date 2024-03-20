import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import CasestudyNav from "./components/CasestudyNav";
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

export default function CaseStudiesIrish() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://thebblabs.com" />
        <script type="application/ld+json">
          {`{
            "@context": "http://www.schema.org",
            "@type": "WebSite",
            "name": "The blue berry labs",
            "alternateName": "bblabs",
            "url": "https://thebblabs.com/Case-Studies-Irish"
          }`}
        </script>
      </Head>

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

      <section className="position-relative pt-4 pb-4">
        <CasestudyNav />
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="section-hd case-intro-hd text-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h3>The Irish Village</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div
                className="case-screen-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/case-study-screen-irish.png"
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
              <div
                className="case-dtl-con"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="count">01</div>
                <h4>Website Development Project for The Irish Village</h4>
                <p>
                  This case study showcases the successful website development
                  project executed by Accen&apos;D for The Irish Village, a
                  renowned Irish pub in Dubai. The project aimed to create a
                  modern, user-friendly website that effectively represented the
                  pub&apos;s brand, attracted potential clients and enhanced
                  overall brand visibility.
                </p>
                <p>
                  Client Background: The Irish Village is an iconic Irish pub
                  and a company under the Dubai Duty Free located in Dubai,
                  offering an authentic Irish experience to its patrons. With
                  branches in Garhoud and Studio City, each with its own unique
                  ambience, the pub has become a popular destination known for
                  its warm Irish welcome, Guinness, and hearty food.
                </p>
              </div>
            </Col>
            <Col lg="4" xs={12}>
              <div
                className="case-dtl-info"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
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
                    <Link
                      href="https://www.theirishvillage.com/"
                      target="_blank"
                    >
                      theirishvillage.com
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div
          className="case-collage"
          data-aos="fadeIn"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <Image
            src="/images/case-collage-irish.jpg"
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
              <div
                className="case-timeline"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
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
                    <h4>Brand Identity and Mobile-Friendly Design</h4>
                    <p>
                      a. Create a website with the latest technology to reflect
                      The Irish Village&apos;s brand identity and values.
                    </p>
                    <p>
                      b. Ensure the website is mobile-friendly, catering to
                      users on different devices.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">02</div>
                  <div className="time-body">
                    <h4>Enhanced User Experience:</h4>
                    <p>
                      a. Implement intuitive navigation and streamlined content
                      organization for a seamless browsing experience.
                    </p>
                    <p>
                      b. Showcase the pub&apos;s products and services clearly
                      and engagingly.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">03</div>
                  <div className="time-body">
                    <h4>Lead Generation:</h4>
                    <p>
                      a. Integrate lead generation forms strategically to
                      capture user information and generate leads.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" xs={12}>
              <div
                className="case-mob-screen"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/case-mob-screen-irish.png"
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
              <div
                className="case-caro-img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/case-result-img-irish.png"
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
                        <h4>1. Enhanced Brand Identity</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The revamped website effectively showcased The Irish
                          Village&apos;s brand identity, values, and unique
                          selling propositions, contributing to increased brand
                          recognition and trust.
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
                          The intuitive navigation, responsive design, and
                          well-organized content enhanced user experience,
                          resulting in reduced bounce rates and improved
                          engagement.
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
                        <h4>1. Enhanced Brand Identity</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          The revamped website effectively showcased The Irish
                          Village&apos;s brand identity, values, and unique
                          selling propositions, contributing to increased brand
                          recognition and trust.
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
                          The intuitive navigation, responsive design, and
                          well-organized content enhanced user experience,
                          resulting in reduced bounce rates and improved
                          engagement.
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
              <div
                className="case-dev-img"
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/case-dev-irish.png"
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
                  Accen&apos;D&apos;s website development project successfully
                  transformed The Irish Village&apos;s online presence, leading
                  to increased traffic, leads, and brand recognition.
                </h4>
                <p>
                  By focusing on user experience, effective communication of
                  offerings, and implementing strategies, the project resulted
                  in a modern, engaging, and optimized website. The
                  project&apos;s success contributed to The Irish Village&apos;s
                  growth and success in the digital space, making it a valuable
                  addition to Accen&apos;D&apos;s portfolio.
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
              <div
                className="section-hd text-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
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
