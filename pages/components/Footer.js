import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import ScrollToTopButton from "./ScrollToTopButton";

import Image from "next/image";

export default function Footer() {
  // Radio js
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Copyright current year
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  return (
    <>
      <footer className="footer-sec pt-4 pt-lg-5 pt-xl-7 pb-4 pb-lg-5">
        <Container fluid="xxl">
          <Row className="gx-xxl-5">
            <Col className="col-ft-service">
              <div className="ft-links-cover">
                <h3>Services</h3>
                <Row>
                  <Col xs={6}>
                    <ul className="ft-list">
                      <li className="ft-item">
                        <Link className="ft-nav" href="/Branding">
                          Branding
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="/Content">
                          Content
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="/App-Development">
                          App Development
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="/SEO">
                          SEO
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col xs={6}>
                    <ul className="ft-list">
                      <li className="ft-item">
                        <Link className="ft-nav" href="/Graphic-Design">
                          Graphic Design
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link
                          className="ft-nav"
                          href="/Website-Design-Development"
                        >
                          Website Design & Development
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="/Social-Media">
                          Social Media
                        </Link>
                      </li>
                      <li className="ft-item">
                        <Link className="ft-nav" href="/Paid-Ads">
                          Paid Ads
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
                  <Image
                    src="/images/bluberry-logo-footer.png"
                    alt="Slider"
                    layout="intrinsic"
                    width={90}
                    height={110}
                  />
                </Link>

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
                        href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fm%2Fcompany%2Fthebblabs"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-xxl-4">
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
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      <ScrollToTopButton />
    </>
  );
}
