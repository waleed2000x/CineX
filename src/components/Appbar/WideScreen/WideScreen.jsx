import { ThemeContext } from "../../themeContext/ThemeContext";
import { useContext } from "react";
import { themes } from "../../themeContext/ThemeContext";
import LogoLottie from "../../LogoLotties/LogoLottie";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, TextField, Typography } from "@mui/material";
import WideSubScreen from "./WideSubScreen";
import { NavLink } from "react-router-dom";
export default function WideScreen() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  const handleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    console.log(theme);
  };
  return (
    <>
      <div className="wideScreenParent">
        <div className="titleAppbar">
          <LogoLottie />
          <NavLink to="/">
            <Typography
              variant="h1"
              color={theme === "light" ? "black" : "white"}
            >
              Cine<span>X</span>
            </Typography>
          </NavLink>
        </div>
        <div className="searchWideScreen">
          <TextField
            size="large"
            label="Search movies to watch"
            variant="standard"
            fullWidth
            color="error"
          />
        </div>
        <div className={`themeSwitch `}>
          <Typography
            variant="h5"
            color={theme === "light" ? "black" : "white"}
          >
            Mode :
          </Typography>
          {theme === "light" ? (
            <IconButton color="inherit" onClick={handleTheme}>
              <DarkModeIcon />
            </IconButton>
          ) : (
            <IconButton color="secondary" onClick={handleTheme}>
              <LightModeIcon style={{ color: "white" }} />
            </IconButton>
          )}
        </div>
      </div>
      <WideSubScreen />
    </>
  );
}
