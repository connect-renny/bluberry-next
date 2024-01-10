import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";

import { MdOutlinePhonelinkRing } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { RxShare1 } from "react-icons/rx";

import ContactForm from "./components/ContactForm";

import Link from "next/link";

export default function Contact() {
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
                <h6>Get in Touch</h6>
                <h1>Contact Us</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-sec py-4 py-lg-5 py-xl-6" data-aos="fadeIn">
        <Container fluid="xxl">
          <Row className="gx-xxl-5">
            <Col lg={6} xs={12}>
              <div
                className="con-address"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="con-add-hd">
                  <h3>Hi.</h3>
                  <h4>Have a question? Want to connect? Reach out to us.</h4>
                  {/* <p>
                    Please tell us about yourself and we will get back to within
                    24 hours.
                  </p> */}
                </div>
                <div className="con-add-item">
                  <div className="con-add-icon">
                    <MdOutlinePhonelinkRing />
                  </div>
                  <div className="con-add-body">
                    <div className="addr-item">
                      <div className="add-label">New York, USA</div>
                      <div className="add-value">+1 (347) 882-8281</div>
                    </div>
                    <div className="addr-item">
                      <div className="add-label">Dubai, UAE</div>
                      <div className="add-value">+971 55 787 6289</div>
                    </div>
                    <div className="addr-item">
                      <div className="add-label">Oman</div>
                      <div className="add-value">
                        00968 – 93800148 / 94187820
                      </div>
                    </div>
                    <div className="addr-item">
                      <div className="add-label">Kerala, India</div>
                      <div className="add-value">+91 90618 81111</div>
                    </div>
                  </div>
                </div>
                <div className="con-add-item">
                  <div className="con-add-icon">
                    <TfiEmail />
                  </div>
                  <div className="d-flex p-2">
                    <Link
                      className="btn-email"
                      href="mailto:Hello@thebblabs.com"
                    >
                      Hello@thebblabs.com
                    </Link>
                  </div>
                </div>
                <div className="con-add-item">
                  <div className="con-add-icon">
                    <RxShare1 />
                  </div>
                  <div className="con-add-body d-flex flex-column">
                    <div className="social-m-logos">
                      <div className="m-logo">
                        <Link
                          href="https://www.facebook.com/people/Thebblabs/100092399283850/"
                          target="_blank"
                        >
                          <img
                            src="/images/social-logo-01.png"
                            alt="Social Media"
                          />
                        </Link>
                      </div>
                      <div className="m-logo">
                        <Link
                          href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fm%2Fcompany%2Fthebblabs"
                          target="_blank"
                        >
                          <img
                            src="/images/social-logo-02.png"
                            alt="Social Media"
                          />
                        </Link>
                      </div>
                      <div className="m-logo">
                        <Link
                          href="https://www.instagram.com/thebblabs/?igshid=ZDdkNTZiNTM%3D"
                          target="_blank"
                        >
                          <img
                            src="/images/social-logo-03.png"
                            alt="Social Media"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="con-add-hd">
                <h3>Hello.</h3>
                <h4>
                  Please tell us about yourself and we will get back to within
                  24 hours.
                </h4>
              </div>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-4 pb-4 pb-lg-5 pb-xl-7">
        <Container fluid="xxl">
          <Row>
            <Col xs="12">
              <div
                className="virtual-cover"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <figure>
                  <img src="/images/virtual-img.png" alt="Image" />
                </figure>
                <div className="virtual-body">
                  <h4>
                    Or better yet, let&apos;s meet. <br />
                    <span>We would love to talk to you!</span>
                  </h4>
                  <Link
                    className="btn btn-book"
                    href="https://calendly.com/the_bb/30min"
                    target="_blank"
                  >
                    <span className="btn-label">
                      Book a <span className="fw-bold">Virtual Meeting</span>
                      &nbsp; with us!
                    </span>
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
