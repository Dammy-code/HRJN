import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    <div className="w-full ">
      <div className="w-full ">
        <Carousel infiniteLoop showThumbs={false} autoPlay={true} className=''>
          {slides.map((slide, index) => {
            return (
              <img
                className = 'w-[100%] w-[60vh] lg:h-[100vh]'
                key={index}
                src={slide.image}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageSlider;
