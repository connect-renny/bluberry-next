import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

import { FiArrowRight } from 'react-icons/fi';

import Slider from 'react-slick';
// slick carousel import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Industries carousel
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
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
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Blog() {
  return (
    <>
      <section className="blog-sec py-4 py-lg-5 py-xl-6">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="section-hd blog-sec-hd"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h6>Blog</h6>
                <h3>Latest from the blog</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div
                className="blog-carousel"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Slider className="slider " {...settings}>
                  <div>
                    <div className="blog-item">
                      <figure>
                        <Link href="#">
                          <img src="images/blog-thumb-01.jpg" alt="Image" />
                        </Link>
                      </figure>
                      <div className="blog-body">
                        <div className="blog-date">September 12,2023</div>
                        <h4>You can use it for any kind of website</h4>
                        <Link className="btn btn-shine btn-more" href="#">
                          <span className="btn-label">Read More</span>
                          <span className="btn-icon">
                            <FiArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="blog-item">
                      <figure>
                        <Link href="#">
                          <img src="images/blog-thumb-02.jpg" alt="Image" />
                        </Link>
                      </figure>
                      <div className="blog-body">
                        <div className="blog-date">September 12,2023</div>
                        <h4>You can use it for any kind of website</h4>
                        <Link className="btn btn-shine btn-more" href="#">
                          <span className="btn-label">Read More</span>
                          <span className="btn-icon">
                            <FiArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="blog-item">
                      <figure>
                        <Link href="#">
                          <img src="images/blog-thumb-03.jpg" alt="Image" />
                        </Link>
                      </figure>
                      <div className="blog-body">
                        <div className="blog-date">September 12,2023</div>
                        <h4>You can use it for any kind of website</h4>
                        <Link className="btn btn-shine btn-more" href="#">
                          <span className="btn-label">Read More</span>
                          <span className="btn-icon">
                            <FiArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
