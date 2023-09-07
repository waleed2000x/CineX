import { useContext } from "react";
import FirstSightVideo from "./FirstSightVideo";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useFetchAPI from "../useFetch/UseFetchAPI";
import { Button, IconButton, Typography } from "@mui/material";
import { ThemeContext } from "../themeContext/ThemeContext";
import { motion } from "framer-motion";
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
      <FirstSightVideo />
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
            <p>Loading...</p>
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
                <div className="imageShader">
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
                  <p
                    style={{
                      color: `${theme === "light" ? "black" : "white"}`,
                    }}
                  >
                    {movie.original_title}
                  </p>
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
