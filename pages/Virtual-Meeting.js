import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";

import { MdOutlinePhonelinkRing } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { RxShare1 } from "react-icons/rx";

import ContactForm from "./components/ContactForm";

import { AiOutlineUser } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsCalendar4Week } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";

export default function Contact() {
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
                <h6>Virtual Meeting</h6>
                <h1>Let's meet</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-sec py-4 py-lg-5 py-xl-6" data-aos="fadeIn">
        <Container fluid="xxl">
          <Row className="d-flex justify-content-center">
            <Col lg={6} xs={12}>
              <div
                className="contact-form"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="con-add-hd">
                  <h3>Hello.</h3>
                  <h4>
                    Or better yet, let&apos;s meet. We would love to talk to
                    you!
                  </h4>
                </div>
                <form>
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
                        label="Date"
                        className="mb-3"
                      >
                        <Form.Control placeholder="Date" />
                        <div className="icon">
                          <BsCalendar4Week />
                        </div>
                      </FloatingLabel>
                    </Col>
                    <Col xs={12}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Message"
                        className="mb-3"
                      >
                        <Form.Control as="textarea" placeholder="Message" />
                        <div className="icon">
                          <MdOutlineEdit />
                        </div>
                      </FloatingLabel>
                    </Col>
                    <Col xs={12}>
                      <div className="con-agree mb-4">
                        <label>
                          <input type="radio" />I agree that my data is
                          collected and stored
                        </label>
                      </div>
                    </Col>
                    <Col xs={12} className="d-flex justify-content-end">
                      <button
                        className="btn btn-shine btn-submit"
                        type="submit"
                      >
                        <span className="btn-label">Submit</span>
                        <span className="btn-icon">
                          <FiArrowRight />
                        </span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
