import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
import FirstSightVideo from "../Popular/FirstSightVideo";
import Oppenheimer from "../media/Oppenheimer.mp4";
export default function Landing() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="mainParentPopular">
        <FirstSightVideo
          name={"Openheimer"}
          videoLink={Oppenheimer}
          details={true}
          landingVideo={true}
          description={
            "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the worlds first nuclear explosion, forever changing the course of history."
          }
        />
      </div>
      <div className="landingParent">
        <Typography
          variant="h1"
          fontFamily={"inherit"}
          color={`${theme === "light" ? "black" : "white"}`}
        >
          Landing
        </Typography>
      </div>
    </>
  );
}
