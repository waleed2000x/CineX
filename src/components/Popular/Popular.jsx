import { useContext } from "react";
import FirstSightVideo from "./FirstSightVideo";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useFetchAPI from "../useFetch/UseFetchAPI";
import Equalizer from "../media/Equalizer.mp4";
import { Button, IconButton, Typography } from "@mui/material";
import { ThemeContext } from "../themeContext/ThemeContext";
import { motion } from "framer-motion";
import PopularSkeleton from "./PopularSkeleton";
export default function Popular() {
  const { theme } = useContext(ThemeContext);
  const {
    data: popularMovies,
    isLoading,
    error,
  } = useFetchAPI("https://api.themoviedb.org/3/movie/popular", {
    api_key: "573180add55876cdd18911a65315f1b3",
  });
  console.log(popularMovies);
  return (
    <div className="mainParentPopular">
      <FirstSightVideo
        videoLink={Equalizer}
        details={true}
        name={"The Equalizer 3"}
        description={
          "Since giving up his life as a government assassin, Robert McCall finds solace in serving justice on behalf of the oppressed. Now living in Southern Italy, he soon discovers his new friends are under the control of local crime bosses. As events turn deadly, McCall becomes their protector by taking on the mafia."
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
            Explore the Latest Blockbusters and Fan Favorites in Our Popular
            Movies Collection
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
    </div>
  );
}
