import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

// slick carousel import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function IndustriesSlider() {
  const [indSliderNav, setsliderNav] = useState(0);
  const [indSliderMain, setsliderMain] = useState(0);

  const indSliderNavRef = useRef();
  const indSliderMainRef = useRef();

  const handleSliderOneBeforeChange = (oldIndex, newIndex) => {
    setsliderMain(newIndex);
    indSliderNavRef.current.slickGoTo(newIndex);
  };

  const handleSliderTwoBeforeChange = (oldIndex, newIndex) => {
    setsliderNav(newIndex);
    indSliderMainRef.current.slickGoTo(newIndex);
  };

  const settings01 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    beforeChange: handleSliderTwoBeforeChange,
  };

  const settings02 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: handleSliderOneBeforeChange,
  };

  return (
    <section className="ind-tab-sec">
      <div className="ind-tab-nav">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <Slider
                className="slider slider-nav"
                {...settings01}
                ref={sliderNavRef}
              >
                <div>
                  <div className="nav-link">
                    E-commerce & <br />
                    Retail
                  </div>
                </div>
                <div>
                  <div className="nav-link">
                    Technology & <br />
                    Software
                  </div>
                </div>
                <div>
                  <div className="nav-link">
                    Hospitality & <br />
                    Tourism
                  </div>
                </div>
                <div>
                  <div className="nav-link">
                    Health & <br />
                    Wellness
                  </div>
                </div>
                <div>
                  <div className="nav-link">
                    Education & <br />
                    E-learning
                  </div>
                </div>
                <div>
                  <div className="nav-link">Real Estate</div>
                </div>
                <div>
                  <div className="nav-link">
                    Financial <br />
                    Services
                  </div>
                </div>
                <div>
                  <div className="nav-link">
                    Non-profit <br />
                    Organizations
                  </div>
                </div>
                <div>
                  <div className="nav-link">
                    Public <br />
                    Sector
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid="xxl">
        <Row>
          <Col xs={12}></Col>
        </Row>
      </Container>
    </section>
  );
}
