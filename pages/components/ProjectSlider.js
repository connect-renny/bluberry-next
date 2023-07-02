import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

// slick carousel import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Projects carousel
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
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
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function ProjectSlider() {
  return (
    <div className="project-carousel">
      <Slider className="slider " {...settings}>
        <div>
          <div className="pro-caro-item">
            <figure>
              <Link href="Case-Studies">
                <Image
                  src="/images/pro-slider-thumb-01.jpg"
                  alt="Image"
                  layout="intrinsic"
                  width={935}
                  height={500}
                />
              </Link>
            </figure>
          </div>
        </div>
        <div>
          <div className="pro-caro-item">
            <figure>
              <Link href="Case-Studies-10x">
                <Image
                  src="/images/pro-slider-thumb-02.jpg"
                  alt="Image"
                  layout="intrinsic"
                  width={935}
                  height={500}
                />
              </Link>
            </figure>
          </div>
        </div>
        <div>
          <div className="pro-caro-item">
            <figure>
              <Link href="Case-Studies-Aydi">
                <Image
                  src="/images/pro-slider-thumb-03.jpg"
                  alt="Image"
                  layout="intrinsic"
                  width={935}
                  height={500}
                />
              </Link>
            </figure>
          </div>
        </div>
        <div>
          <div className="pro-caro-item">
            <figure>
              <Link href="Case-Studies-Irish">
                <Image
                  src="/images/pro-slider-thumb-04.jpg"
                  alt="Image"
                  layout="intrinsic"
                  width={935}
                  height={500}
                />
              </Link>
            </figure>
          </div>
        </div>
        <div>
          <div className="pro-caro-item">
            <figure>
              <Link href="Case-Studies-Maaza">
                <Image
                  src="/images/pro-slider-thumb-05.jpg"
                  alt="Image"
                  layout="intrinsic"
                  width={935}
                  height={500}
                />
              </Link>
            </figure>
          </div>
        </div>
      </Slider>
    </div>
  );
}
