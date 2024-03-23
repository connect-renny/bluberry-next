import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import { FiArrowRight } from "react-icons/fi";

import Link from "next/link";

export default function BlogList() {
  // Radio js
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://thebblabs.com/Blog-List" />
        <script type="application/ld+json">
          {`{
            "@context": "http://www.schema.org",
            "@type": "WebSite",
            "name": "The blue berry labs",
            "alternateName": "bblabs",
            "url": "https://thebblabs.com/Blog-List"
          }`}
        </script>
      </Head>

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
              <div className="blog-item mb-5">
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
                  <div className="blog-date">30 Jun 2023</div>
                  <h4>
                    Unleashing the Power of GPT-4 and the Future of ChatGPT
                  </h4>
                  <Link className="btn btn-shine btn-more" href="/Blog-GPT">
                    <span className="btn-label">Read More</span>
                    <span className="btn-icon">
                      <FiArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className="blog-item mb-5">
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
                  <div className="blog-date">23 Jun 2023</div>
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
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className="blog-item mb-5">
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
                  <div className="blog-date">16 Jun 2023</div>
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
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className="blog-item mb-5">
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
                  <div className="blog-date">9 Jun 2023</div>
                  <h4>
                    Riding the Wave: Unveiling the Latest Trends in Digital...
                  </h4>
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
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className="blog-item mb-5">
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
                  <div className="blog-date">2 Jun 2023</div>
                  <h4>
                    The Superpowers of Content: Identifying the Crucial...
                  </h4>
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
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className="blog-item mb-5">
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
                  <div className="blog-date">26 May 2023</div>
                  <h4>
                    Here are some steps to create content that can help...
                  </h4>
                  <Link className="btn btn-shine btn-more" href="/Blog-Sales">
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
