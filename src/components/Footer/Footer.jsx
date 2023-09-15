import { Typography } from "@mui/material";
import MyImg from "../media/MyImage.png";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="footerParent">
      <div className="imageFooter">
        <div className="imageAndText">
          <div className="image">
            <img src={MyImg} alt="Waleed" />
          </div>
          <div className="text">
            <Typography
              variant="h1"
              color={`${theme === "light" ? "black" : "white"}`}
            >
              Waleed Ahmed
            </Typography>
          </div>
        </div>
      </div>
      <div className="descFooter"></div>
      <div className="joinFooter"></div>
    </div>
  );
}
