import { ThemeContext } from "../../themeContext/ThemeContext";
import { useContext } from "react";
import { themes } from "../../themeContext/ThemeContext";
import LogoLottie from "../../LogoLotties/LogoLottie";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, TextField, Typography } from "@mui/material";
import WideSubScreen from "./WideSubScreen";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
export default function WideScreen() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };
  return (
    <>
      <div
        className="wideScreenParent"
        style={{
          backgroundColor: `${theme === "light" ? "#ffffff" : "#000000"}`,
        }}
      >
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
          <StyledTextField
            size="large"
            variant="standard"
            placeholder="Search movies to watch"
            // fullWidth
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

const StyledTextField = styled.input`
  background-color: rgba(255, 255, 255, 0.01);
  border-radius: 5px;
  border: 1px solid;
  width: 100%;
  padding: 15px;
  outline: none;
  font-size: 20px;
  font-family: "Orbitron", sans-serif;
  color: rgb(103, 102, 102);
`;
