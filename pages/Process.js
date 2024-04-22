import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";

export default function Process() {
  // Radio js
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://thebblabs.com/Process" />
        
      </Head>

      <section className="ins-slider-hd-sec">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div
                className="ins-slider-hd"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h6>How We do it</h6>
                <h1>Process</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="process-sec">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="process-cover">
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <figure className="relative">
                    <div className="process-img">
                      <Image
                        src="/images/process-img-01.jpg"
                        alt="Image"
                        layout="responsive"
                        width={525}
                        height={400}
                      />
                    </div>
                    <div className="dot"></div>
                  </figure>
                  <div className="process-body">
                    <div className="count">01</div>
                    <h3>Understanding Your Needs: </h3>
                    <p>
                      We begin by setting up an introductory meeting with our
                      project leads. The aim is, of course, to understand the
                      project. But we also dig deeper. Through in-depth
                      consultations, we get to know your business goals, target
                      audience, and your unique needs. This allows us to gather
                      valuable insights and align our strategies with not just
                      the project goals but also your organizational objectives.
                    </p>
                  </div>
                </div>
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <figure className="relative">
                    <div className="process-img">
                      <Image
                        src="/images/process-img-02.jpg"
                        alt="Image"
                        layout="responsive"
                        width={525}
                        height={400}
                      />
                    </div>
                    <div className="dot"></div>
                  </figure>
                  <div className="process-body">
                    <div className="count">02</div>
                    <h3>Research and Analysis:</h3>
                    <p>
                      Once we have a clear understanding of your needs, we
                      conduct thorough research and analysis. This includes
                      market research, competitor analysis, audience research,
                      and keyword analysis (for SEO). This step helps us
                      identify opportunities, trends, and effective strategies
                      to maximize your digital presence.
                    </p>
                  </div>
                </div>
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <figure className="relative">
                    <div className="process-img">
                      <Image
                        src="/images/process-img-03.jpg"
                        alt="Image"
                        layout="responsive"
                        width={525}
                        height={400}
                      />
                    </div>
                    <div className="dot"></div>
                  </figure>
                  <div className="process-body">
                    <div className="count">03</div>
                    <h3>Strategy Development: </h3>
                    <p>
                      Based on the insights gained from research and analysis,
                      we develop a comprehensive strategy tailored to your
                      business. This strategy outlines the approach, channels,
                      and tactics we will employ to achieve your goals. We also
                      define key performance indicators (KPIs) to measure
                      success.
                    </p>
                  </div>
                </div>
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <figure className="relative">
                    <div className="process-img">
                      <Image
                        src="/images/process-img-04.jpg"
                        alt="Image"
                        layout="responsive"
                        width={525}
                        height={400}
                      />
                    </div>
                    <div className="dot"></div>
                  </figure>
                  <div className="process-body">
                    <div className="count">04</div>
                    <h3>Design and Development: </h3>
                    <p>
                      If website design, app development, or any visual elements
                      are required, our design team then springs into action. We
                      create visually appealing designs and develop functional
                      assets that deliver seamless user experiences across
                      various devices and platforms.
                    </p>
                  </div>
                </div>
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <figure className="relative">
                    <div className="process-img">
                      <Image
                        src="/images/process-img-05.jpg"
                        alt="Image"
                        layout="responsive"
                        width={525}
                        height={400}
                      />
                    </div>
                    <div className="dot"></div>
                  </figure>
                  <div className="process-body">
                    <div className="count">05</div>
                    <h3>Content Creation: </h3>
                    <p>
                      We begin by setting up an introductory meeting with our
                      project leads. The aim is, of course, to understand the
                      project. But we also dig deeper. Through in-depth
                      consultations, we get to know your business goals, target
                      audience, and your unique needs. This allows us to gather
                      valuable insights and align our strategies with not just
                      the project goals but also your organizational objectives.
                    </p>
                  </div>
                </div>
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <figure className="relative">
                    <div className="process-img">
                      <Image
                        src="/images/process-img-06.jpg"
                        alt="Image"
                        layout="responsive"
                        width={525}
                        height={400}
                      />
                    </div>
                    <div className="dot"></div>
                  </figure>
                  <div className="process-body">
                    <div className="count">06</div>
                    <h3>Implementation & Optimization: </h3>
                    <p>
                      Once the designs are finalized, and the content is ready,
                      we proceed with implementing the strategies across the
                      chosen channels and executing the content marketing plan.
                      We set up websites and social media accounts, optimize
                      content for search engines, and launch online advertising
                      campaigns. We monitor metrics such as engagement, reach,
                      and conversions, and use data analysis to optimize the
                      campaign for maximum impact.
                    </p>
                  </div>
                </div>
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <figure className="relative">
                    <div className="process-img">
                      <Image
                        src="/images/process-img-07.jpg"
                        alt="Image"
                        layout="responsive"
                        width={525}
                        height={400}
                      />
                    </div>
                    <div className="dot"></div>
                  </figure>
                  <div className="process-body">
                    <div className="count">07</div>
                    <h3>Reporting & Analysis:</h3>
                    <p>
                      We provide regular reports and analytics to track the
                      performance of your digital presence and marketing
                      campaigns. The reports cover key metrics such as website
                      traffic, conversion rates, social media engagement, and
                      search engine rankings. With a breakdown of the results
                      and insights into the audience&apos;s behavior, the
                      reports help usidentify areas of improvement and make
                      data-driven decisions for ongoing optimization.
                    </p>
                  </div>
                </div>
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <figure className="relative">
                    <div className="process-img">
                      <Image
                        src="/images/process-img-08.jpg"
                        alt="Image"
                        layout="responsive"
                        width={525}
                        height={400}
                      />
                    </div>
                    <div className="dot"></div>
                  </figure>
                  <div className="process-body">
                    <div className="count">08</div>
                    <h3>Ongoing Management & Support:</h3>
                    <p>
                      Our commitment doesn&apos;t end with the delivery of the
                      final output. We offer ongoing management and support
                      services to ensure the sustained success of your digital
                      marketing efforts. This includes managing social media
                      accounts, updating website content, conducting periodic
                      reviews, and staying updated with industry trends to keep
                      your brand at the forefront.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
