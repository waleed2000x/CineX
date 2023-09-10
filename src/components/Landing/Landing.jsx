import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
import FirstSightVideo from "../Popular/FirstSightVideo";
import Oppenheimer from "../media/Oppenheimer.mp4";
import OppenheimerImg from "../media/oppenheimerImg.jpg";
import Slider from "./Slider";
import axios from "axios";
import { useState } from "react";
import TVshow from "./TVshow";
// import useFetchAPI from "../useFetch/UseFetchAPI";
export default function Landing() {
  const { theme } = useContext(ThemeContext);
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [upcommingMovies, setUpcommingMovies] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          params: {
            api_key: "573180add55876cdd18911a65315f1b3",
          },
        }
      )
      .then((res) => setTopRatedMovies(res.data.results))
      .catch((err) => console.error(err));
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          params: {
            api_key: "573180add55876cdd18911a65315f1b3",
          },
        }
      )
      .then((res) => setUpcommingMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="mainParentPopular">
        <FirstSightVideo
          name={"Openheimer"}
          videoLink={Oppenheimer}
          details={true}
          landingVideo={true}
          thumbnail={OppenheimerImg}
          description={
            "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the worlds first nuclear explosion, forever changing the course of history."
          }
        />
      </div>
      <div className="landingParent">
        <Typography
          variant="h4"
          fontFamily={"inherit"}
          textAlign={"center"}
          width={"100%"}
          textTransform={"uppercase"}
          color={`${theme === "light" ? "black" : "white"}`}
        >
          Top Rated
        </Typography>
        <Slider endpoint={topRatedMovies} />
      </div>
      <div className="landingParent">
        <Typography
          variant="h4"
          fontFamily={"inherit"}
          textAlign={"center"}
          width={"100%"}
          textTransform={"uppercase"}
          color={`${theme === "light" ? "black" : "white"}`}
        >
          Now in Theaters
        </Typography>
        <Slider endpoint={upcommingMovies} />
      </div>
      <TVshow />
    </>
  );
}
