import { Typography } from "@mui/material";
import MyImg from "../media/MyImage.png";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="footerParent">
      <div
        className="imageFooter"
        style={{
          borderRight: `1px solid ${theme === "light" ? "black" : "white"}`,
        }}
      >
        <div className="imageAndText">
          <img src={MyImg} alt="Waleed" />
          <Typography
            variant="h1"
            fontFamily={"inherit"}
            color={`${theme === "light" ? "black" : "white"}`}
          >
            Waleed Ahmed
          </Typography>
        </div>
      </div>
      <div
        className="descFooter"
        style={{
          borderRight: `1px solid ${theme === "light" ? "black" : "white"}`,
        }}
      ></div>
      <div className="joinFooter"></div>
    </div>
  );
}
