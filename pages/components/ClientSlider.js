import Slider from 'react-slick';

// slick carousel import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
          <img src="images/customer-icon-01.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="images/customer-icon-02.png" alt="Image" />
        </div>
      </div>
      <div>
        <div>
          <div className="client-item">
            <img src="images/customer-icon-03.png" alt="Image" />
          </div>
          <div className="client-item">
            <img src="images/customer-icon-04.png" alt="Image" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <di className="client-item">
            <img src="images/customer-icon-05.png" alt="Image" />
          </di>
          <div className="client-item">
            <img src="images/customer-icon-06.png" alt="Image" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="client-item">
            <img src="images/customer-icon-07.png" alt="Image" />
          </div>
          <div className="client-item">
            <img src="images/customer-icon-08.png" alt="Image" />
          </div>
        </div>
      </div>
      <div>
        <div className="client-item">
          <img src="images/customer-icon-01.png" alt="Image" />
        </div>
        <div className="client-item">
          <img src="images/customer-icon-02.png" alt="Image" />
        </div>
      </div>
      <div>
        <div>
          <div className="client-item">
            <img src="images/customer-icon-03.png" alt="Image" />
          </div>
          <div className="client-item">
            <img src="images/customer-icon-04.png" alt="Image" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <di className="client-item">
            <img src="images/customer-icon-05.png" alt="Image" />
          </di>
          <div className="client-item">
            <img src="images/customer-icon-06.png" alt="Image" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="client-item">
            <img src="images/customer-icon-07.png" alt="Image" />
          </div>
          <div className="client-item">
            <img src="images/customer-icon-08.png" alt="Image" />
          </div>
        </div>
      </div>
    </Slider>
  );
}
