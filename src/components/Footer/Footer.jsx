import { Typography } from "@mui/material";
import MyImg from "../media/MyImage.png";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
import FooterLottie from "./FotterLottie/FooterLottie";
import LogoLottie from "../LogoLotties/LogoLottie";
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
        <a href="https://waleeddev.vercel.app" target="blank">
          <div className="imageAndText">
            <div
              className={`${
                theme === "light" ? "gradientLight" : "gradientDark"
              }`}
            ></div>
            <div style={{ zIndex: "3" }}>
              <FooterLottie />
            </div>
            <img src={MyImg} alt="Waleed" />
            <Typography
              variant="h1"
              fontFamily={"inherit"}
              color={`${theme === "light" ? "black" : "white"}`}
            >
              <span>Developed By:</span>
              Waleed Ahmed
            </Typography>
          </div>
        </a>
      </div>
      <div className="descFooter">
        <div className="titleFooter">
          <LogoLottie />
          <Typography
            variant="h1"
            color={theme === "light" ? "black" : "white"}
          >
            Cine<span>X</span>
          </Typography>
        </div>
      </div>
    </div>
  );
}
