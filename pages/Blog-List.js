import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import { FiArrowRight } from "react-icons/fi";

import Link from "next/link";

export default function ErrorPage() {
  // Radio js
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <section className="ins-slider-img-sec">
        <Container fluid="xxl">
          <div className="ins-slider">
            <Image
              src="/images/ins-slider-contact.jpg"
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
              <div className="ins-slider-hd">
                <h6>Blog</h6>
                <h1>Latest from the blog</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pt-lg-5 pt-xl-6 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row>
            <Col lg={4} md={6} xs={12}>
              <div className="blog-item">
                <figure>
                  <Link href="#">
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
                  <div className="blog-date">September 12,2023</div>
                  <h4>
                    Unleashing the Power of GPT-4 and the Future of ChatGPT
                  </h4>
                  <Link className="btn btn-shine btn-more" href="Blog-Details">
                    <span className="btn-label">Read More</span>
                    <span className="btn-icon">
                      <FiArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className="blog-item">
                <figure>
                  <Link href="#">
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
                  <div className="blog-date">September 12,2023</div>
                  <h4>A Paradigm Shift in Business Growth</h4>
                  <Link className="btn btn-shine btn-more" href="Blog-Details">
                    <span className="btn-label">Read More</span>
                    <span className="btn-icon">
                      <FiArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className="blog-item">
                <figure>
                  <Link href="#">
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
                  <div className="blog-date">September 12,2023</div>
                  <h4>Choosing the Right Social Platforms</h4>
                  <Link className="btn btn-shine btn-more" href="Blog-Details">
                    <span className="btn-label">Read More</span>
                    <span className="btn-icon">
                      <FiArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
