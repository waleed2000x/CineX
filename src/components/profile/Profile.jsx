import { Typography } from "@mui/material";
import Location from "./Location/Location";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
export default function Profile() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="profileParent">
      <div className="profileTitle">
        <Typography
          variant="h4"
          fontFamily={"inherit"}
          fontWeight={"700"}
          fontSize={"40px"}
          color={`${theme === "light" ? "black" : "white"}`}
        >
          Profile
        </Typography>
      </div>
      <Location />
    </div>
  );
}