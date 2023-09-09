import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IconButton } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Slider({ endpoint }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="sliderParent">
      <Swiper
        slidesPerView={4.4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {endpoint &&
          // eslint-disable-next-line react/prop-types
          endpoint.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ position: "relative" }}
              className="swiper"
            >
              <div
                className={`${
                  theme === "light" ? "sliderShaderLight" : "sliderShaderDark"
                }`}
              >
                <IconButton
                  style={{
                    position: "absolute",
                    right: "0px",
                    top: "0px",
                  }}
                >
                  <InfoOutlinedIcon />
                </IconButton>
              </div>
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
