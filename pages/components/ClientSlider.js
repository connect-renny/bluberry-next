import Slider from "react-slick";

// slick carousel import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Industries carousel
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
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

export default function ClientSlider() {
  return (
    <Slider className="slider " {...settings}>
      <div>
        <div className="client-item">
          <img src="/images/customer-icon-01.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="/images/customer-icon-02.png" alt="Image" />
        </div>
      </div>
      <div>
        <div className="client-item">
          <img src="/images/customer-icon-03.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="/images/customer-icon-04.png" alt="Image" />
        </div>
      </div>
      <div>
        <di className="client-item">
          <img src="/images/customer-icon-05.png" alt="Image" />
        </di>
        <div className="client-item">
          <img src="/images/customer-icon-06.png" alt="Image" />
        </div>
      </div>
      <div>
        <div className="client-item">
          <img src="/images/customer-icon-07.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="/images/customer-icon-08.png" alt="Image" />
        </div>
      </div>
      <div>
        <div className="client-item">
          <img src="/images/customer-icon-09.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="/images/customer-icon-10.png" alt="Image" />
        </div>
      </div>
      <div>
        <div className="client-item">
          <img src="/images/customer-icon-11.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="/images/customer-icon-12.png" alt="Image" />
        </div>
      </div>
      <div>
        <di className="client-item">
          <img src="/images/customer-icon-13.png" alt="Image" />
        </di>
        <div className="client-item">
          <img src="/images/customer-icon-14.png" alt="Image" />
        </div>
      </div>
      <div>
        <div className="client-item">
          <img src="/images/customer-icon-15.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="/images/customer-icon-16.png" alt="Image" />
        </div>
      </div>
      <div>
        <div className="client-item">
          <img src="/images/customer-icon-17.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="/images/customer-icon-18.png" alt="Image" />
        </div>
      </div>
      <div>
        <div className="client-item">
          <img src="/images/customer-icon-19.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="/images/customer-icon-20.png" alt="Image" />
        </div>
      </div>
      <div>
        <div className="client-item">
          <img src="/images/customer-icon-21.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="/images/customer-icon-22.png" alt="Image" />
        </div>
      </div>
      <div>
        <div className="client-item">
          <img src="/images/customer-icon-23.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="/images/customer-icon-24.png" alt="Image" />
        </div>
      </div>
    </Slider>
  );
}
