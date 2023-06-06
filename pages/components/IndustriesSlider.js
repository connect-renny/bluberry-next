import React from 'react';
import Link from 'next/link';

import Slider from 'react-slick';

// slick carousel import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Industries carousel
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function IndustriesSlider() {
  return (
    <div
      className="industries-carousel"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <Slider className="slider " {...settings}>
        <div>
          <Link href="#" className="industries-item">
            <figure>
              <img src="images/industries-item-01.jpg" alt="Image" />
              <div className="counter">01</div>
            </figure>
            <div className="ind-body">
              <div className="ind-title">
                <h4>E-commerce & Retail</h4>
              </div>
              <div className="ind-content">
                <p>
                  For businesses in the health and wellness sector, building
                  trust and credibility is vital.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="industries-item">
            <figure>
              <img src="images/industries-item-02.jpg" alt="Image" />
              <div className="counter">02</div>
            </figure>
            <div className="ind-body">
              <div className="ind-title">
                <h4>Technology & Software</h4>
              </div>
              <div className="ind-content">
                <p>
                  For businesses in the health and wellness sector, building
                  trust and credibility is vital.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="industries-item">
            <figure>
              <img src="images/industries-item-03.jpg" alt="Image" />
              <div className="counter">03</div>
            </figure>
            <div className="ind-body">
              <div className="ind-title">
                <h4>Health & Wellness</h4>
              </div>
              <div className="ind-content">
                <p>
                  For businesses in the health and wellness sector, building
                  trust and credibility is vital.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="industries-item">
            <figure>
              <img src="images/industries-item-04.jpg" alt="Image" />
              <div className="counter">04</div>
            </figure>
            <div className="ind-body">
              <div className="ind-title">
                <h4>Financial Services</h4>
              </div>
              <div className="ind-content">
                <p>
                  For businesses in the health and wellness sector, building
                  trust and credibility is vital.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="industries-item">
            <figure>
              <img src="images/industries-item-01.jpg" alt="Image" />
              <div className="counter">05</div>
            </figure>
            <div className="ind-body">
              <div className="ind-title">
                <h4>Hospitality and Tourism</h4>
              </div>
              <div className="ind-content">
                <p>
                  We understand that in the competitive hospitality and tourism
                  industry, captivating your audience is essential.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="industries-item">
            <figure>
              <img src="images/industries-item-02.jpg" alt="Image" />
              <div className="counter">06</div>
            </figure>
            <div className="ind-body">
              <div className="ind-title">
                <h4>Education and E-learning</h4>
              </div>
              <div className="ind-content">
                <p>
                  In the digital age, education has transcended traditional
                  boundaries. We work with educational
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="industries-item">
            <figure>
              <img src="images/industries-item-03.jpg" alt="Image" />
              <div className="counter">07</div>
            </figure>
            <div className="ind-body">
              <div className="ind-title">
                <h4>Real Estate</h4>
              </div>
              <div className="ind-content">
                <p>
                  The real estate industry demands a powerful online presence to
                  showcase properties and attract
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="industries-item">
            <figure>
              <img src="images/industries-item-04.jpg" alt="Image" />
              <div className="counter">08</div>
            </figure>
            <div className="ind-body">
              <div className="ind-title">
                <h4>Non-profit Organizations</h4>
              </div>
              <div className="ind-content">
                <p>
                  We are dedicated to supporting non-profit organizations in
                  their mission to make a positive impact.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="industries-item">
            <figure>
              <img src="images/industries-item-01.jpg" alt="Image" />
              <div className="counter">09</div>
            </figure>
            <div className="ind-body">
              <div className="ind-title">
                <h4>Public Sector</h4>
              </div>
              <div className="ind-content">
                <p>
                  We are also ready to collaborate with government agencies,
                  municipalities, and public
                </p>
              </div>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
}
