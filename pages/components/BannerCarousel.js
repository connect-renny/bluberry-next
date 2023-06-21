import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

import Slider from "react-slick";

// slick carousel import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerCarousel() {
  // Bootstra carousel hover pause
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Banner Word
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: false,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <>
      <section className="banner-sec">
        <div className="banner-cover">
          <div className="slider-img">
            <div className="banner-slider">
              <Carousel
                pause={!isHovering}
                fade
                controls={false}
                indicators={false}
              >
                <Carousel.Item>
                  <img src="/images/slider-01.jpg" alt="First Slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/images/slider-02.jpg" alt="Second Slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/images/slider-03.jpg" alt="Third Slide" />
                </Carousel.Item>
              </Carousel>
              <div className="slider-overlay">
                <img src="/images/slider-mask.png" alt="Slider Mask" />
              </div>
            </div>
          </div>
          <div className="slider-con">
            <div className="slider-hd">
              <h1>
                Smarter
                <br />
                <Slider className="slider " {...settings}>
                  <div>
                    <div>
                      <h1>Custom</h1>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1>Design</h1>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1>Strategy</h1>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1>Approach</h1>
                    </div>
                  </div>
                </Slider>
              </h1>
              <Link className="btn btn-book" href="#">
                <span className="btn-label">Book a Virtual Meeting Today!</span>
                <span className="btn-icon">
                  <FiArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
