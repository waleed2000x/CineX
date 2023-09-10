import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button, IconButton, Typography } from "@mui/material";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// eslint-disable-next-line react/prop-types
export default function Slider({ endpoint, poster_path }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="sliderParent">
      {/* <div className="leftArrow">
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <div className="rightArrow">
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div> */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="Swiper"
      >
        {endpoint === undefined ? (
          <div
            className="sliderSkeleton"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <SkeletonTheme
              baseColor={`${theme === "light" ? "#d9dadb" : "#474747"}`}
            >
              <Skeleton
                width={"400px"}
                height={"200px"}
                style={{ margin: "10px" }}
              />
              <Skeleton
                width={"400px"}
                height={"200px"}
                style={{ margin: "10px" }}
              />
              <Skeleton
                width={"400px"}
                height={"200px"}
                style={{ margin: "10px" }}
              />
              <Skeleton
                width={"400px"}
                height={"200px"}
                style={{ margin: "10px" }}
              />
            </SkeletonTheme>
          </div>
        ) : (
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
                <div
                  className="landingItemButtons"
                  style={{
                    position: "absolute",
                    display: "none",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton>
                    <InfoOutlinedIcon style={{ fontSize: "30px" }} />
                  </IconButton>
                  <Button variant="text">
                    <Typography
                      variant="p"
                      color={"black"}
                      fontFamily={"inherit"}
                      fontWeight={"600"}
                    >
                      Watch Now
                    </Typography>
                  </Button>
                </div>
                <Typography
                  className="title"
                  variant="p"
                  fontFamily={"inherit"}
                  fontWeight={"800"}
                  style={{
                    position: "absolute",
                    left: "5px",
                    bottom: "0px",
                  }}
                  color={`${theme === "light" ? "black" : "white"}`}
                >
                  {item.original_title || item.name}
                </Typography>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${
                  item.backdrop_path || poster_path
                }`}
                alt={item.original_title}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
