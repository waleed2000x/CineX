import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../themeContext/ThemeContext";
import { NavLink } from "react-router-dom";
import Genres from "./Genres";

export default function WideSubScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="subBarWidescreen">
      <div
        className="subCenter"
        style={{
          backgroundColor: `${
            theme === "light"
              ? "rgba(255, 255, 255, 0.5)"
              : "rgba(0, 0, 0, 0.5)"
          }`,
        }}
      >
        <NavLink to="/">
          <Button variant="text" size="small" color="error">
            <Typography
              variant="p"
              color={theme === "light" ? "black" : "white"}
            >
              Home
            </Typography>
          </Button>
        </NavLink>
        <NavLink to="/popular">
          <Button variant="text" size="small" color="error">
            <Typography
              variant="p"
              color={theme === "light" ? "black" : "white"}
            >
              Popular
            </Typography>
          </Button>
        </NavLink>
        <NavLink to="/releases">
          <Button variant="text" size="small" color="error">
            <Typography
              variant="p"
              color={theme === "light" ? "black" : "white"}
            >
              New Releases
            </Typography>
          </Button>
        </NavLink>
        <Genres />
        <NavLink to="/profile">
          <Button variant="text" size="small" color="error">
            <Typography
              variant="p"
              color={theme === "light" ? "black" : "white"}
            >
              Profile
            </Typography>
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
