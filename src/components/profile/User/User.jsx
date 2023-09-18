import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../themeContext/ThemeContext";

export default function User() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="User">
      <Typography
        variant="h4"
        fontWeight={"600"}
        color={`${theme === "light" ? "black" : "white"}`}
        fontFamily={"inherit"}
      >
        User Information
      </Typography>
      <div className="userInfo">
        <Typography
          variant="p"
          color={`${theme === "light" ? "black" : "white"}`}
          fontFamily={"inherit"}
          marginTop={"10px"}
        >
          Name: User Name
        </Typography>
        <Typography
          variant="p"
          color={`${theme === "light" ? "black" : "white"}`}
          fontFamily={"inherit"}
          marginTop={"10px"}
        >
          Email: someone@something@Cmail.com
        </Typography>
        <Typography
          variant="p"
          color={`${theme === "light" ? "black" : "white"}`}
          fontFamily={"inherit"}
          marginTop={"10px"}
        >
          Contact: +XX XXX XXXXXXXX
        </Typography>
      </div>
    </div>
  );
}
