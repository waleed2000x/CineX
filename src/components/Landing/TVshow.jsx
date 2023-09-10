import { Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Slider from "./Slider";
import { ThemeContext } from "../themeContext/ThemeContext";

export default function TVshow() {
  const { theme } = useContext(ThemeContext);
  const [TV1, setTV1] = useState([]);
  const [TV2, setTV2] = useState([]);
  useEffect(() => {
    const options1 = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/tv",
      params: {
        include_adult: "false",
        include_null_first_air_dates: "false",
        language: "en-US",
        page: "2",
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzMxODBhZGQ1NTg3NmNkZDE4OTExYTY1MzE1ZjFiMyIsInN1YiI6IjY0ZjZjZmQ4NWYyYjhkMDBhYmNiZDcxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fb9Iw-2JaPM8_9Wk1FPiYcRgsQqlL3ak1v12FimF7TA",
      },
    };

    axios
      .request(options1)
      .then(function (response) {
        setTV1(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
    const options2 = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/tv",
      params: {
        include_adult: "false",
        include_null_first_air_dates: "false",
        language: "en-US",
        page: "2",
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzMxODBhZGQ1NTg3NmNkZDE4OTExYTY1MzE1ZjFiMyIsInN1YiI6IjY0ZjZjZmQ4NWYyYjhkMDBhYmNiZDcxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fb9Iw-2JaPM8_9Wk1FPiYcRgsQqlL3ak1v12FimF7TA",
      },
    };

    axios
      .request(options2)
      .then(function (response) {
        setTV2(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const allTVshows1 = [...TV1, ...TV2];
  return (
    <>
      <div className="landingParent">
        <Typography
          variant="h4"
          fontFamily={"inherit"}
          textAlign={"center"}
          width={"100%"}
          textTransform={"uppercase"}
          color={`${theme === "light" ? "black" : "white"}`}
        >
          TV Shows
        </Typography>
        <Slider endpoint={allTVshows1} />
      </div>
    </>
  );
}
