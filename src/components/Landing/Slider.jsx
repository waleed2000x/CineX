import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";

export default function Slider({ popularMovies }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="sliderParent">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {popularMovies &&
          popularMovies.map((item, index) => (
            <SwiperSlide key={index} style={{ position: "relative" }}>
              <div
                className={`${
                  theme === "light" ? "sliderShaderLight" : "sliderShaderDark"
                }`}
              ></div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item.original_title}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
