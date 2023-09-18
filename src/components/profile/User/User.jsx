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
    </div>
  );
}
