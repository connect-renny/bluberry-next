import { useState, useEffect } from "react";

import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";

import { MdOutlinePhonelinkRing } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GrCircleInformation } from "react-icons/gr";
import { GrEdit } from "react-icons/gr";

import Link from "next/link";

export default function error() {
  // Radio js
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <section className="error-404 py-4 py-lg-5 py-xl-6">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="error-404-cover">
                <div className="error-elements">
                  <div className="elements"></div>
                  <div className="elements"></div>
                  <div className="elements"></div>
                  <div className="elements"></div>
                  <div className="elements"></div>
                  <div className="elements"></div>
                  <div className="elements"></div>
                  <div className="elements"></div>
                  <div className="elements"></div>
                </div>
                <div className="error-404">
                  <h3>404</h3>
                  <p>Oops! Page not found.</p>
                  <Link className="btn btn-back" href="/">
                    Go Back Home
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
