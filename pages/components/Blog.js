import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import { FiArrowRight } from "react-icons/fi";

import Image from "next/image";

import Slider from "react-slick";
// slick carousel import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Industries carousel
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
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
      <section className="blog-sec py-4 py-lg-5 py-xl-7">
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
                        <Link href="/Blog-GPT">
                          <Image
                            src="/images/blog-thumb-01.jpg"
                            alt="Image"
                            layout="intrinsic"
                            width={420}
                            height={435}
                          />
                        </Link>
                      </figure>
                      <div className="blog-body">
                        {/* <div className="blog-date">30 Jun 2023</div> */}
                        <h4>
                          Unleashing the Power of GPT-4 and the Future of
                          ChatGPT
                        </h4>
                        <Link
                          className="btn btn-shine btn-more"
                          href="/Blog-GPT"
                        >
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
                        <Link href="/Blog-Business-Growth">
                          <Image
                            src="/images/blog-thumb-02.jpg"
                            alt="Image"
                            layout="intrinsic"
                            width={420}
                            height={435}
                          />
                        </Link>
                      </figure>
                      <div className="blog-body">
                        {/* <div className="blog-date">23 Jun 2023</div> */}
                        <h4>A Paradigm Shift in Business Growth</h4>
                        <Link
                          className="btn btn-shine btn-more"
                          href="/Blog-Business-Growth"
                        >
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
                        <Link href="/Blog-Social-Platforms">
                          <Image
                            src="/images/blog-thumb-03.jpg"
                            alt="Image"
                            layout="intrinsic"
                            width={420}
                            height={435}
                          />
                        </Link>
                      </figure>
                      <div className="blog-body">
                        {/* <div className="blog-date">16 Jun 2023</div> */}
                        <h4>Choosing the Right Social Platforms</h4>
                        <Link
                          className="btn btn-shine btn-more"
                          href="/Blog-Social-Platforms"
                        >
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
                        <Link href="/Blog-Digital-Marketing">
                          <Image
                            src="/images/blog-thumb-04.jpg"
                            alt="Image"
                            layout="intrinsic"
                            width={420}
                            height={435}
                          />
                        </Link>
                      </figure>
                      <div className="blog-body">
                        {/* <div className="blog-date">9 Jun 2023</div> */}
                        <h4>Riding the Wave: Unveiling the Latest</h4>
                        <Link
                          className="btn btn-shine btn-more"
                          href="/Blog-Digital-Marketing"
                        >
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
                        <Link href="/Blog-Content-Power">
                          <Image
                            src="/images/blog-thumb-05.jpg"
                            alt="Image"
                            layout="intrinsic"
                            width={420}
                            height={435}
                          />
                        </Link>
                      </figure>
                      <div className="blog-body">
                        {/* <div className="blog-date">2 Jun 2023</div> */}
                        <h4>The Superpowers of Content: Identifying</h4>
                        <Link
                          className="btn btn-shine btn-more"
                          href="/Blog-Content-Power"
                        >
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
                        <Link href="/Blog-Sales">
                          <Image
                            src="/images/blog-thumb-06.jpg"
                            alt="Image"
                            layout="intrinsic"
                            width={420}
                            height={435}
                          />
                        </Link>
                      </figure>
                      <div className="blog-body">
                        {/* <div className="blog-date">26 May 2023</div> */}
                        <h4>Here are some steps to create content</h4>
                        <Link
                          className="btn btn-shine btn-more"
                          href="/Blog-Sales"
                        >
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
