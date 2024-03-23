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

export default function CaseStudiesAydi() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://thebblabs.com/Case-Studies-Aydi" />
        <script type="application/ld+json">
          {`{
            "@context": "http://www.schema.org",
            "@type": "WebSite",
            "name": "The blue berry labs",
            "alternateName": "bblabs",
            "url": "https://thebblabs.com/Case-Studies-Aydi"
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
              <div className="section-hd case-intro-hd text-center">
                <h3>Al Aydi</h3>
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
                  src="/images/case-study-screen-aydi.png"
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
                <h4>
                  Al Aydi Tents: Transforming Online Presence through Website,
                  SEO, and Social Media Management
                </h4>
                <p>
                  This case study highlights the successful collaboration
                  between Al Aydi Tents and our team, focusing on the
                  development of a robust online presence through website
                  development, SEO optimization, and strategic social media
                  management. The project aimed to elevate Al Aydi Tents&apos;
                  visibility, engage target audiences, and drive business growth
                  in the highly competitive tent and event solutions industry.
                </p>
                <p>
                  Client Background: Al Aydi Tents is a reputable provider of
                  high-quality tents and event solutions, offering a diverse
                  range of products for various occasions. With a commitment to
                  excellence and customer satisfaction, Al Aydi Tents desired to
                  establish a strong online presence that reflects its expertise
                  and attracts a wider customer base in the UAE.
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
                    <Link href="https://www.alayditents.com/" target="_blank">
                      alayditents.com
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
            src="/images/case-collage-aydi.jpg"
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
                    <h4>Website Development</h4>
                    <p>
                      Transform the basic standard website of Al Aydi Tents to a
                      visually appealing and user-friendly website that
                      showcases Al Aydi Tents&apos; products and services,
                      providing visitors with comprehensive information and a
                      seamless browsing experience.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">02</div>
                  <div className="time-body">
                    <h4>SEO Optimization</h4>
                    <p>
                      Implement effective search engine optimization strategies
                      to improve the website&apos;s visibility and organic
                      rankings, driving targeted traffic and maximizing online
                      exposure.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">03</div>
                  <div className="time-body">
                    <h4>Content Optimization</h4>
                    <p>
                      The main objective of Al Aydi Tents was to increase its
                      visibility in Google search results. By implementing
                      effective SEO techniques, they aimed to improve their
                      rankings for relevant keywords and drive organic traffic
                      to their website.
                    </p>
                  </div>
                </div>
                <div className="time-item">
                  <div className="time-count">04</div>
                  <div className="time-body">
                    <h4>Social Media Management</h4>
                    <p>
                      Develop a strategic social media management plan to engage
                      the target audience, increase brand awareness, and foster
                      meaningful connections with potential customers.
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
                  src="/images/case-mob-screen-aydi.png"
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
                data-aos="fadeIn"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/case-result-img-aydi.png"
                  alt="Image"
                  layout="intrinsic"
                  width={730}
                  height={965}
                />
              </div>
            </Col>
            <Col xs={12} className="case-res-caro-col">
              <div className="case-carousel">
                <div
                  className="case-dtl-con mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
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
                        <h4>1. Enhanced Online Presence</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          We professionally designed website in the finest
                          platform and showcased Al Aydi Tents&apos; products,
                          services, and expertise, creating a strong online
                          presence and establishing credibility in the market.
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
                        <h4>2. Improved Organic Rankings</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          Through effective SEO optimization, the website
                          achieved higher organic rankings for relevant
                          keywords, resulting in increased visibility, organic
                          traffic, and qualified leads. Majority of their
                          keywords has secured first position in the search in
                          much less time.
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
                        <h4>1. Enhanced Online Presence</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          We professionally designed website in the finest
                          platform and showcased Al Aydi Tents&apos; products,
                          services, and expertise, creating a strong online
                          presence and establishing credibility in the market.
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
                        <h4>2. Improved Organic Rankings</h4>
                      </div>
                      <div className="case-result-body">
                        <p>
                          Through effective SEO optimization, the website
                          achieved higher organic rankings for relevant
                          keywords, resulting in increased visibility, organic
                          traffic, and qualified leads. Majority of their
                          keywords has secured first position in the search in
                          much less time.
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
                  src="/images/case-dev-aydi.png"
                  alt="Image"
                  layout="intrinsic"
                  width={700}
                  height={535}
                />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div
                className="case-dev-con"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h4 className="mb-xxl-4">
                  The collaboration between Al Aydi Tents and our team for
                  website development, SEO optimization, and social media
                  management successfully transformed the company&apos;s online
                  presence.
                </h4>
                <p>
                  The project is on-going and has resulted in an engaging
                  website, improved organic rankings, increased brand awareness,
                  and a growing customer base. By leveraging effective
                  strategies and staying true to Al Aydi Tents&apos; brand
                  identity, we achieved tangible results that have positively
                  impacted the company&apos;s growth and success in the
                  competitive tent and event solutions market in the UAE.
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
