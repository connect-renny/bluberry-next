import { Container, Row, Col } from "react-bootstrap";

export default function WorkSection() {
  return (
    <section className="brand-story-sec trans-sec">
      <Container fluid="xxl">
        <Row>
          <Col xs={12}>
            <div className="brand-story">
              <div className="section-hd unique-hd">
                <h3>
                  Dream big, and envision the transformative power we can
                  unleash together.
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
