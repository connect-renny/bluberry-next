import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import ScrollToTopButton from './ScrollToTopButton';

export default function Footer() {
  // Radio js
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Copyright current year
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  return (
    <>
      <footer className="footer-sec py-4 py-lg-5 py-xl-7">
        <Container fluid="xxl">
          <Row className="gx-xxl-5">
            <Col className="col-ft-service">
              <div className="ft-links-cover">
                <h3>Services</h3>
                <Row>
                  <Col xs={6}>
                    <ul className="ft-list">
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Social Media
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Content
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          SEO
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Branding
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Website Design
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col xs={6}>
                    <ul className="ft-list">
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Website Development
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          App Development
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Online Advertising
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="col-ft-company">
              <div className="ft-links-cover">
                <h3>Company</h3>
                <ul className="ft-list">
                  <li className="ft-item">
                    <Link className="ft-nav" href="#">
                      Industries
                    </Link>
                  </li>
                  <li className="ft-item">
                    <Link className="ft-nav" href="#">
                      Case Studies
                    </Link>
                  </li>
                  <li className="ft-item">
                    <Link className="ft-nav" href="#">
                      Blog
                    </Link>
                  </li>
                  <li className="ft-item">
                    <Link className="ft-nav" href="#">
                      About
                    </Link>
                  </li>
                  <li className="ft-item">
                    <Link className="ft-nav" href="#">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="col-ft-technology">
              <div className="ft-links-cover">
                <h3>Technologies</h3>
                <Row>
                  <Col xs={6}>
                    <ul className="ft-list">
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Node
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          React
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Angular
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Vue.js
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          React Native
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col xs={6}>
                    <ul className="ft-list">
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Symfony
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Laravel
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="#">
                          Ai
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="col-ft-about">
              <div className="footer-logo">
                <Link className="footer-logo" href="/">
                  <img
                    src="images/bluberry-logo-footer.png"
                    alt="BluBerry Footer"
                  />
                </Link>
                <h3>
                  Book a Free
                  <br />
                  Consultation
                  <br />
                  Now!
                </h3>
              </div>
            </Col>
          </Row>
          <Row className="mt-xxl-5">
            <Col className="col-ft-subscribe" xs={12}>
              <div className="subscribe-cover">
                <h3>Dont miss out updates</h3>
                <div className="news-letter">
                  <InputGroup className="mb-4">
                    <Form.Control
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <button className="btn btn-shine btn-send" href="#">
                      <span className="btn-label">Send</span>
                      <span className="btn-icon">
                        <FiArrowRight />
                      </span>
                    </button>
                  </InputGroup>
                  <div className="policy-input">
                    <Form.Check
                      type="radio"
                      id="option2"
                      name="options"
                      label="I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy."
                      value="option2"
                      checked={selectedOption === 'option2'}
                      onChange={handleOptionChange}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-ft-social" xs={12}>
              <div className="footer-social">
                <h3>Follow Us</h3>
                <ul className="social-list">
                  <li className="soc-item">
                    <Link
                      className="soc-link"
                      href="https://www.facebook.com/people/Thebblabs/100092399283850/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="soc-item">
                    <Link
                      className="soc-link"
                      href="https://www.instagram.com/thebblabs/?igshid=ZDdkNTZiNTM%3D"
                      target="_blank"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                  <li className="soc-item">
                    <Link
                      className="soc-link"
                      href="https://twitter.com/TheBluBerryLabs?t=VXlPhTzqlW0PeyUOvoc-rw&s=08"
                      target="_blank"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="soc-item">
                    <Link
                      className="soc-link"
                      href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fm%2Fcompany%2Fthebblabs"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li className="soc-item">
                    <Link className="soc-link" href="#">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="mt-xxl-5">
            <Col lg={6} xs={12}>
              <div className="copyright">
                &copy; {currentYear} BluberryLabs LLC &nbsp; | &nbsp; All Rights
                Reserved
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <ul class="btm-list">
                <li class="btm-item">
                  <Link class="btm-link" href="#">
                    Terms & Conditions
                  </Link>
                </li>
                <li class="btm-item">
                  <Link class="btm-link" href="#">
                    Privacy policy
                  </Link>
                </li>
                <li class="btm-item">
                  <Link class="btm-link" href="#">
                    Cookies
                  </Link>
                </li>
                <li class="btm-item">
                  <Link class="btm-link" href="#">
                    Copyrights
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      <ScrollToTopButton />
    </>
  );
}
