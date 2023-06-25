import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import Link from "next/link";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { SlHome } from "react-icons/sl";
import { FiArrowRight } from "react-icons/fi";

export default function NavbarMain() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100 ? setStickyClass("navbar-fixed") : setStickyClass("");
    }
  };

  const router = useRouter();
  const currentRoute = router.pathname;

  const [expanded, setExpanded] = useState(false);
  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      className={`navbar-main ${stickyClass}`}
      bg="light"
      expand="lg"
      expanded={expanded}
    >
      <Container fluid="xxl">
        <div className="logo">
          <Link href="/">
            <img src="/images/bluberry-logo.png" alt="BluBerry Logo" />
          </Link>
        </div>
        <Navbar.Toggle
          className="btn-hamburger"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <svg
            stroke="var(--white)"
            fill="none"
            class="hamburger"
            viewBox="-10 -10 120 120"
          >
            <path
              class="line"
              stroke-width="3"
              // stroke-linecap="round"
              // stroke-linejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            ></path>
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbar-nav info-nav">
            <div className="nav-item">
              <Link className="nav-link" href="tel:+96891269531">
                <span className="nav-icon">
                  <FiPhoneCall />
                </span>
                +1(347)882−8281
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" href="mailto:Hello@thebblabs.com">
                <span className="nav-icon">
                  <GoMail />
                </span>
                Hello@thebblabs.com
              </Link>
            </div>
          </div>
          <div className="navbar-nav main-nav">
            <div className="nav-item">
              <Link
                href="/"
                className={
                  router.pathname == "/"
                    ? "active nav-link nav-home"
                    : "nav-link nav-home"
                }
                onClick={handleLinkClick}
              >
                <SlHome />
              </Link>
            </div>

            <NavDropdown className="menu-mega" title="Services">
              <div className="mega-menu-cover">
                <div className="mega-menu-hd">
                  <h2>Simplifying IT for a complex world.</h2>
                </div>
                <div className="mega-menu-links">
                  <ul className="drop-mega-link">
                    <li className="mg-item">
                      <Link className="mg-nav" href="/Branding">
                        Branding
                      </Link>
                    </li>
                    <li className="mg-item">
                      <Link className="mg-nav" href="/Graphic-Design">
                        Graphic Design
                      </Link>
                    </li>
                    <li className="mg-item">
                      <NavDropdown.Item className="mg-nav" href="/Content">
                        Content
                      </NavDropdown.Item>
                    </li>
                    <li className="mg-item">
                      <Link
                        className="mg-nav"
                        href="/Website-Design-Development"
                      >
                        Website Design & Development
                      </Link>
                    </li>
                    <li className="mg-item">
                      <Link className="mg-nav" href="/App-Development">
                        App Development
                      </Link>
                    </li>
                    <li className="mg-item">
                      <Link className="mg-nav" href="/ Social-Media">
                        Social Media
                      </Link>
                    </li>
                    <li className="mg-item">
                      <Link className="mg-nav" href="/SEO">
                        SEO
                      </Link>
                    </li>
                    <li className="mg-item">
                      <Link className="mg-nav" href="/Paid-Ads">
                        Paid Ads
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="mega-menu-button">
                  <Link className="btn btn-shine btn-schedule" href="">
                    <span className="btn-label">
                      Schedule a Free consultation
                    </span>
                    <span className="btn-icon">
                      <FiArrowRight />
                    </span>
                  </Link>
                </div> */}
              </div>
            </NavDropdown>

            <div className="nav-item">
              <Link
                href="/Industries"
                className={
                  router.pathname == "/Industries"
                    ? "active nav-link"
                    : "nav-link"
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">Industries</span>
              </Link>
            </div>
            <div className="nav-item">
              <Link
                href="/Case-Studies"
                className={
                  router.pathname == "/Case-Studies"
                    ? "active nav-link"
                    : "nav-link"
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">Case Studies</span>
              </Link>
            </div>
            <div className="nav-item">
              <Link
                href="/Blog"
                className={
                  router.pathname == "/Blog" ? "active nav-link" : "nav-link"
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">Blog</span>
              </Link>
            </div>
            <div className="nav-item">
              <Link
                className={
                  router.pathname == "/About" ? "active nav-link" : "nav-link"
                }
                href="/About"
                onClick={handleLinkClick}
              >
                <span className="nav-block">About</span>
              </Link>
            </div>
            <div className="nav-item">
              <Link
                href="/Contact"
                className={
                  router.pathname == "/Contact" ? "active nav-link" : "nav-link"
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">Contact</span>
              </Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
