import { Container, Row, Col } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

import Link from 'next/link';

export default function ContactConsultaion() {
  return (
    <section className="brand-consult-sec py-4 py-lg-5 py-xl-7">
      <Container fluid="xxl">
        <Row>
          <Col xs={12}>
            <div className="brand-consult-cover">
              <h3>Take the first step towards brand brilliance today. </h3>
              <p>
                Connect with us and let us bring your brand to life in ways you
                never thought possible.
              </p>
              <div className="brand-con-nav">
                <Link className="btn btn-shine btn-contact" href="#">
                  <span className="btn-label">Contact Us</span>
                  <span className="btn-icon">
                    <FiArrowRight />
                  </span>
                </Link>
                <Link className="btn btn-shine btn-contact" href="#">
                  <span className="btn-label">Book a Free Consultation</span>
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
  );
}
