import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

import ContactForm from "./ContactForm";

import Link from "next/link";

export default function includeContact() {
  // Radio js
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="contact-sec py-4 py-lg-5 py-xl-7" data-aos="fadeIn">
      <Container fluid="xxl">
        <Row>
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
                <div className="addr-item">
                  <div className="add-label">
                    <Link href="mailto:Hello@thebblabs.com">
                      Hello@thebblabs.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
