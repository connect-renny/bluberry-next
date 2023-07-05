import { Container, Row, Col } from "react-bootstrap";

// import { PiPaperPlaneTiltFill } from "react-icons/pi";

export default function thankYou() {
  return (
    <>
      <main className="py-4 py-lg-5 py-xl-7">
        <section>
          <Container fluid="xl">
            <Row>
              <Col xs={12}>
                <div className="thanks-cover">
                  <figure>
                    <div className="thank-graphics">
                      <div className="graph-item graph-item-01">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 32 32"
                          className="thank-ptc-svg"
                        >
                          <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
                        </svg>
                      </div>
                      <div className="graph-item graph-item-02">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 32 32"
                          className="thank-ptc-svg"
                        >
                          <path className="st0" d="M3.2 3.2H28.9V28.9H3.2z" />
                        </svg>
                      </div>
                      <div className="graph-item graph-item-03">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 45 45"
                          className="thank-ptc-svg"
                        >
                          <path d="M29.8 22L40.4 32.6 33.4 39.7 22.8 29.1 12.1 39.7 5.1 32.6 15.7 22 5.1 11.4 12.1 4.3 22.8 14.9 33.4 4.3 40.4 11.4z" />
                        </svg>
                      </div>
                      <div className="graph-item graph-item-04">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 32 32"
                          className="thank-ptc-svg"
                        >
                          <circle cx="16" cy="16" r="13.1" />
                        </svg>
                      </div>
                    </div>
                    <div className="thanks-icon">
                      <img src="images/paper-plane.svg" alt="Thank You" />
                    </div>
                  </figure>
                  <div className="thanks-body">
                    <h2>
                      <span className="color-red">Thank You</span> <br /> for
                      your submission
                    </h2>
                    <p>Your response was submitted. Awesome!</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
