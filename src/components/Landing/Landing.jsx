import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
import FirstSightVideo from "../Popular/FirstSightVideo";
import Oppenheimer from "../media/Oppenheimer.mp4";
import OppenheimerImg from "../media/oppenheimerImg.jpg";
import Slider from "./Slider";
import useFetchAPI from "../useFetch/UseFetchAPI";
export default function Landing() {
  const {
    data: popularMovies,
    // eslint-disable-next-line no-unused-vars
    isLoading,
    // eslint-disable-next-line no-unused-vars
    error,
  } = useFetchAPI(
    "https://api.themoviedb.org/3/movie/popular&apiKey=573180add55876cdd18911a65315f1b3"
  );
  const { theme } = useContext(ThemeContext);
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
          color={`${theme === "light" ? "black" : "white"}`}
        >
          Landing
        </Typography>
        <Slider endpoint={popularMovies} />
      </div>
    </>
  );
}
