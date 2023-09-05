import Lottie from "lottie-react";
import LogoLightTheme from "./LogoLightTheme.json";
import LogoDarkTheme from "./LogoDarkTheme.json";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";
export default function LogoLottie() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="logoLottie">
      <Lottie
        animationData={theme === "light" ? LogoLightTheme : LogoDarkTheme}
        loop={true}
      />
    </div>
  );
}
