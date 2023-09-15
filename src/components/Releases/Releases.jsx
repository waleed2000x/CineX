import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FirstSightVideo from "../Popular/FirstSightVideo";
import AfterEverything from "../media/AFTEREVERYTHING.mp4";
import AfterEverythingImg from "../media/After-Everything.jpg";
import { useContext, useState } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import useFetchAPI from "../useFetch/UseFetchAPI";
import PopularSkeleton from "../Popular/PopularSkeleton";
import { motion } from "framer-motion";
import PopularModal from "../Popular/PopularModal";
import { ThemeContext } from "../themeContext/ThemeContext";
export default function Releases() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { theme } = useContext(ThemeContext);
  const {
    data: popularMovies,
    isLoading,
    error,
  } = useFetchAPI(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2",
    {
      api_key: "573180add55876cdd18911a65315f1b3",
    }
  );
  // Function to handle opening the modal with the selected movie
  const openModalWithMovie = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  return (
    <div className="mainParentPopular">
      <FirstSightVideo
        videoLink={AfterEverything}
        details={true}
        name={"After Everything"}
        thumbnail={AfterEverythingImg}
        description={
          "The fifth and final installment of the AFTER franchise finds Hardin struggling to move forward. Besieged by writer's block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past - and to find himself."
        }
      />
      <div className="popularParent">
        <div className="PopularTitle">
          <Typography
            variant="h5"
            fontFamily={"inherit"}
            fontWeight={"600"}
            fontSize={"30px"}
            color={`${theme === "light" ? "black" : "white"}`}
          >
            Explore the Latest Blockbusters and Fan Favorites Upcomming Movies
          </Typography>
        </div>
        <div className="popularMoviesList">
          {isLoading ? (
            <PopularSkeleton />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : popularMovies !== null ? (
            popularMovies.map((movie, i) => (
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                key={i}
                className="imageContainer"
              >
                <div
                  className={` imageShader ${
                    theme === "light" ? "imageShaderLight" : "imageShaderDark"
                  }`}
                >
                  <Button
                    onClick={() => openModalWithMovie(movie)}
                    className="watch"
                    variant="filled"
                    color="error"
                    size="small"
                  >
                    <Typography variant="p" fontWeight={"800"} color={"white"}>
                      Watch Now
                    </Typography>
                  </Button>
                  <IconButton
                    className="infoButton"
                    variant="filled"
                    size="small"
                  >
                    <InfoOutlinedIcon />
                  </IconButton>
                  <div className="movieImageTitle">
                    <Typography
                      variant="p"
                      color={`${theme === "light" ? "black" : "white"}`}
                    >
                      {movie.original_title}
                    </Typography>
                  </div>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                />
              </motion.div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
      {selectedMovie && (
        <PopularModal
          open={showModal}
          data={selectedMovie}
          onClose={() => {
            setShowModal(false);
            setSelectedMovie(null);
          }}
        />
      )}
    </div>
  );
}
