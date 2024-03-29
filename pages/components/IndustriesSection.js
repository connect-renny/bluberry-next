import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import Slider from "react-slick";

import Image from "next/image";

// slick carousel import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Industries carousel
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function industriesSlider() {
  return (
    <section
      className="industries-sec pt-4 pt-lg-5 pt-xl-7 pb-4 pb-lg-4 pb-xl-5"
      data-aos="fadeIn"
    >
      <Container fluid="xxl">
        <Row>
          <Col lg={6} xs={12}>
            <div
              className="section-hd industries-hd"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <h6>Industries</h6>
              <h3>Every industry is different in its needs.</h3>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div
              className="industries-intro"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <p>
                BluBerry Labs understands this and offers customized care and
                expertise across a variety of domains. Whether you are just
                starting a business or trying to expand one, wherever you may be
                on the growth journey, partner with us to get an accelerated
                foothold into the digital world.
              </p>
              <Link className="btn btn-shine btn-explore" href="#">
                <span className="btn-label">Explore</span>
                <span className="btn-icon">
                  <FiArrowRight />
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div
              className="industries-carousel"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <Slider className="slider " {...settings}>
                <div>
                  <Link href="/Industries#0" className="industries-item">
                    <figure>
                      <Image
                        src="/images/industries-item-01.jpg"
                        alt="Image"
                        layout="intrinsic"
                        width={420}
                        height={485}
                      />
                      <div className="counter">01</div>
                    </figure>
                    <div className="ind-body">
                      <div className="ind-title">
                        <h4>E-commerce & Retail</h4>
                      </div>
                      <div className="ind-content">
                        <p>
                          In the fast-paced world of online shopping, we
                          understand the importance...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/Industries#1" className="industries-item">
                    <figure>
                      <Image
                        src="/images/industries-item-02.jpg"
                        alt="Image"
                        layout="intrinsic"
                        width={420}
                        height={485}
                      />
                      <div className="counter">02</div>
                    </figure>
                    <div className="ind-body">
                      <div className="ind-title">
                        <h4>Technology & Software</h4>
                      </div>
                      <div className="ind-content">
                        <p>
                          The tech industry is constantly evolving, and
                          we&#39;re here to help you stay...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/Industries#3" className="industries-item">
                    <figure>
                      <Image
                        src="/images/industries-item-03.jpg"
                        alt="Image"
                        layout="intrinsic"
                        width={420}
                        height={485}
                      />
                      <div className="counter">03</div>
                    </figure>
                    <div className="ind-body">
                      <div className="ind-title">
                        <h4>Health & Wellness</h4>
                      </div>
                      <div className="ind-content">
                        <p>
                          For businesses in the health and wellness sector,
                          building trust and credibility...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/Industries#6" className="industries-item">
                    <figure>
                      <Image
                        src="/images/industries-item-04.jpg"
                        alt="Image"
                        layout="intrinsic"
                        width={420}
                        height={485}
                      />
                      <div className="counter">04</div>
                    </figure>
                    <div className="ind-body">
                      <div className="ind-title">
                        <h4>Financial Services</h4>
                      </div>
                      <div className="ind-content">
                        <p>
                          Building trust is crucial in the financial services
                          industry. We assist banks, insurance...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/Industries#2" className="industries-item">
                    <figure>
                      <Image
                        src="/images/industries-item-05.jpg"
                        alt="Image"
                        layout="intrinsic"
                        width={420}
                        height={485}
                      />
                      <div className="counter">05</div>
                    </figure>
                    <div className="ind-body">
                      <div className="ind-title">
                        <h4>Hospitality and Tourism</h4>
                      </div>
                      <div className="ind-content">
                        <p>
                          We understand that in the competitive hospitality and
                          tourism industry, captivating...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/Industries#4" className="industries-item">
                    <figure>
                      <Image
                        src="/images/industries-item-06.jpg"
                        alt="Image"
                        layout="intrinsic"
                        width={420}
                        height={485}
                      />
                      <div className="counter">06</div>
                    </figure>
                    <div className="ind-body">
                      <div className="ind-title">
                        <h4>Education and E-learning</h4>
                      </div>
                      <div className="ind-content">
                        <p>
                          In the digital age, education has transcended
                          traditional boundaries. We work...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/Industries#5" className="industries-item">
                    <figure>
                      <Image
                        src="/images/industries-item-07.jpg"
                        alt="Image"
                        layout="intrinsic"
                        width={420}
                        height={485}
                      />
                      <div className="counter">07</div>
                    </figure>
                    <div className="ind-body">
                      <div className="ind-title">
                        <h4>Real Estate</h4>
                      </div>
                      <div className="ind-content">
                        <p>
                          The real estate industry demands a powerful online
                          presence to showcase properties...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/Industries#7" className="industries-item">
                    <figure>
                      <Image
                        src="/images/industries-item-08.jpg"
                        alt="Image"
                        layout="intrinsic"
                        width={420}
                        height={485}
                      />
                      <div className="counter">08</div>
                    </figure>
                    <div className="ind-body">
                      <div className="ind-title">
                        <h4>Non-profit Organizations</h4>
                      </div>
                      <div className="ind-content">
                        <p>
                          We are dedicated to supporting non-profit
                          organizations in their mission...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/Industries#8" className="industries-item">
                    <figure>
                      <Image
                        src="/images/industries-item-09.jpg"
                        alt="Image"
                        layout="intrinsic"
                        width={420}
                        height={485}
                      />
                      <div className="counter">09</div>
                    </figure>
                    <div className="ind-body">
                      <div className="ind-title">
                        <h4>Public Sector</h4>
                      </div>
                      <div className="ind-content">
                        <p>
                          We are also ready to collaborate with government
                          agencies, municipalities...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
