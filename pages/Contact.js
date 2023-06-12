import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

import { MdOutlinePhonelinkRing } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { AiOutlineUser } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { GrCircleInformation } from 'react-icons/gr';
import { RxShare1 } from 'react-icons/rx';
import { GrEdit } from 'react-icons/gr';

import Link from 'next/link';

export default function Contact() {
  // Radio js
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <section className="ins-slider-sec">
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

      <section className="ins-slider-sec">
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
                  <p>
                    Please tell us about yourself and we will get back to within
                    24 hours.
                  </p>
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
                        <Link href="">
                          <img
                            src="images/social-logo-01.png"
                            alt="Social Media"
                          />
                        </Link>
                      </div>
                      <div className="m-logo">
                        <Link href="">
                          <img
                            src="images/social-logo-02.png"
                            alt="Social Media"
                          />
                        </Link>
                      </div>
                      <div className="m-logo">
                        <Link href="">
                          <img
                            src="images/social-logo-03.png"
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
              <div
                className="contact-form"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="con-add-hd">
                  <h3>Hello.</h3>
                  <h4>Have a question? Want to connect? Reach out to us.</h4>
                </div>
                <Row>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Name"
                      className="mb-3"
                    >
                      <Form.Control placeholder="Name" />
                      <div className="icon">
                        <AiOutlineUser />
                      </div>
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email Address"
                      className="mb-3"
                    >
                      <Form.Control placeholder="Email Address" />
                      <div className="icon">
                        <TfiEmail />
                      </div>
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Phone"
                      className="mb-3"
                    >
                      <Form.Control placeholder="Phone" />
                      <div className="icon">
                        <FiPhoneCall />
                      </div>
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Subject"
                      className="mb-3"
                    >
                      <Form.Control placeholder="Subject" />
                      <div className="icon">
                        <GrCircleInformation />
                      </div>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="How can we help you? Feel free to get in touch!"
                      className="mb-3"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="How can we help you? Feel free to get in touch!"
                      />
                      <div className="icon">
                        <GrEdit />
                      </div>
                    </FloatingLabel>
                  </Col>
                  <Col sm={6} xs={12}>
                    <button className="btn btn-shine btn-submit" href="#">
                      <span className="btn-label">Submit</span>
                      <span className="btn-icon">
                        <FiArrowRight />
                      </span>
                    </button>
                  </Col>
                  <Col sm={6} xs={12}>
                    <div className="con-agree">
                      <Form.Check
                        type="radio"
                        id="option1"
                        name="options"
                        label="I agree that my data is collected and stored"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={handleOptionChange}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
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
                  <img src="images/virtual-img.png" alt="Image" />
                </figure>
                <div className="virtual-body">
                  <h4>
                    Or better yet, let&lsquo;s meet. <br />
                    <span>We would love to talk to you!</span>
                  </h4>
                  <Link className="btn btn-book" href="">
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
