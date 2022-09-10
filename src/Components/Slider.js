import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import portre2 from '../img/slider/portre2.jpg';
import portre from '../img/slider/portre.jpg';
import boys from '../img/slider/boys.jpg';
import enterior from '../img/slider/enterior.jpg';
import wedding from '../img/slider/wedding.jpg';
import wedding2 from '../img/slider/wedding2.jpg';

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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg shadow-2xl"
      >
        <SwiperSlide><img src={portre2} width={800} height={800} alt="Potré" ></img></SwiperSlide>
        <SwiperSlide><img src={wedding2} width={800} height={800} alt="Portré" ></img></SwiperSlide>
        <SwiperSlide><center><img src={boys} width={330} height={300} alt="Potré" ></img></center></SwiperSlide>
        <SwiperSlide><img src={portre} width={800} height={800} alt="Portré" ></img></SwiperSlide>
        <SwiperSlide><img src={wedding} width={800} height={800} alt="Portré" ></img></SwiperSlide>
        <SwiperSlide><img src={enterior} width={800} height={800} alt="Portré" ></img></SwiperSlide>
      </Swiper>
    );
}

export default Slider;