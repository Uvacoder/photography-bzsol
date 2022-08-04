import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import reklam from './img/slider/pickwick.jpg';
import portre from './img/slider/portre.jpg';
import enterior from './img/slider/enterior.jpg';
import epulet from './img/slider/epulet.jpg';


//Esküvő odaillesztése!

const Slider = () => {
    return (
        <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide><img src={reklam} width={800} height={800} alt="Potré" ></img></SwiperSlide>
        <SwiperSlide><img src={portre} width={800} height={800} alt="Portré" ></img></SwiperSlide>
        <SwiperSlide><img src={enterior} width={800} height={800} alt="Portré" ></img></SwiperSlide>
        <SwiperSlide><img src={epulet} width={800} height={800} alt="Portré" ></img></SwiperSlide>
      </Swiper>
    );
}
 
export default Slider;