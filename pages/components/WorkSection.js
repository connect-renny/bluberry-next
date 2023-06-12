import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowDownRight } from 'react-icons/fi';

export default function WorkSection() {
  return (
    <section className="brand-work-sec pt-4 pt-lg-5 pt-xl-5" data-aos="fadeIn">
      <Container fluid className="px-0">
        <Row>
          <Col xs={12}>
            <div className="section-hd text-center">
              <h6>Featured projects</h6>
              <h3>Our Work</h3>
            </div>
            <div className="brand-work-hd">
              <h4>
                But don&lsquo;t just take our word for it - let our work speak
                for itself.
              </h4>
              <p>
                Check out our portfolio of projects that have transformed
                businesses just like yours.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="gx-0">
          <Col xs={6} px="0">
            <Link className="feature-item" href="#">
              <figure>
                <Image
                  src="images/portfolio-thumb-lg-01.jpg"
                  alt="Image"
                  layout="intrinsic"
                  width={920}
                  height={450}
                />
              </figure>
              <div className="fe-overlay"></div>
              <div className="fe-arrow">
                <FiArrowDownRight />
              </div>
            </Link>
          </Col>
          <Col xs={6}>
            <Row className="gx-0">
              <Col xs={6}>
                <Link className="feature-item" href="#">
                  <figure>
                    <Image
                      src="images/portfolio-thumb-sm-01.jpg"
                      alt="Image"
                      layout="intrinsic"
                      width={450}
                      height={450}
                    />
                  </figure>
                  <div className="fe-overlay"></div>
                  <div className="fe-arrow">
                    <FiArrowDownRight />
                  </div>
                </Link>
              </Col>
              <Col xs={6}>
                <Link className="feature-item" href="#">
                  <figure>
                    <Image
                      src="images/portfolio-thumb-sm-02.jpg"
                      alt="Image"
                      layout="intrinsic"
                      width={450}
                      height={450}
                    />
                  </figure>
                  <div className="fe-overlay"></div>
                  <div className="fe-arrow">
                    <FiArrowDownRight />
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <Row className="gx-0">
              <Col xs={6}>
                <Link className="feature-item" href="#">
                  <figure>
                    <Image
                      src="images/portfolio-thumb-sm-03.jpg"
                      alt="Image"
                      layout="intrinsic"
                      width={450}
                      height={450}
                    />
                  </figure>
                  <div className="fe-overlay"></div>
                  <div className="fe-arrow">
                    <FiArrowDownRight />
                  </div>
                </Link>
              </Col>
              <Col xs={6}>
                <Link className="feature-item" href="#">
                  <figure>
                    <Image
                      src="images/portfolio-thumb-sm-04.jpg"
                      alt="Image"
                      layout="intrinsic"
                      width={450}
                      height={450}
                    />
                  </figure>
                  <div className="fe-overlay"></div>
                  <div className="fe-arrow">
                    <FiArrowDownRight />
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <Link className="feature-item" href="#">
              <figure>
                <Image
                  src="images/portfolio-thumb-lg-02.jpg"
                  alt="Image"
                  layout="intrinsic"
                  width={920}
                  height={450}
                />
              </figure>
              <div className="fe-overlay"></div>
              <div className="fe-arrow">
                <FiArrowDownRight />
              </div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="feature-footer-nav">
              <Link className="btn btn-shine btn-explore" href="#">
                <span className="btn-label">Explore our works</span>
                <span className="btn-icon">
                  <FiArrowRight />
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
