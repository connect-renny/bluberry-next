import React, { useEffect, useState } from "react";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

export default function contactForm() {
  // Radio js
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className="contact-form"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
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
              <IoIosInformationCircleOutline />
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
              <MdOutlineEdit />
            </div>
          </FloatingLabel>
        </Col>
        <Col xs={12}>
          <div className="con-agree mb-4">
            <label>
              <input type="radio" />I agree that my data is collected and stored
            </label>
          </div>
        </Col>
        <Col xs={12} className="d-flex justify-content-end">
          <button className="btn btn-shine btn-submit">
            <span className="btn-label">Submit</span>
            <span className="btn-icon">
              <FiArrowRight />
            </span>
          </button>
        </Col>
      </Row>
    </div>
  );
}
