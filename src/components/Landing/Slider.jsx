import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { useContext, useState } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button, IconButton, Typography } from "@mui/material";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LandingModal from "./LandingModal";

// eslint-disable-next-line react/prop-types
export default function Slider({ endpoint, poster_path }) {
  const { theme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (item) => {
    setModalData(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalData(null);
    setShowModal(false);
  };
  return (
    <div className="sliderParent">
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
                    <InfoOutlinedIcon
                      onClick={() => openModal(item)}
                      style={{ fontSize: "30px" }}
                    />
                  </IconButton>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    style={{ margin: "5px" }}
                    onClick={() => alert("Unavailable")}
                  >
                    <Typography
                      variant="p"
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
      {showModal && (
        <LandingModal open={showModal} onClose={closeModal} data={modalData} />
      )}
    </div>
  );
}
