import { ThemeContext } from "../../themeContext/ThemeContext";
import { useContext } from "react";
import { themes } from "../../themeContext/ThemeContext";
import { Switch } from "@mui/material";
import LogoLottie from "../../LogoLotties/LogoLottie";
export default function WideScreen() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    console.log(theme);
  };
  return (
    <div onClick={handleTheme} className="wideScreenParent">
      <div className="titleAppbar">
        <LogoLottie />
        <h1>
          Cine<span>X</span>
        </h1>
      </div>
      <div className="themeSwitch">
        <Switch defaultChecked color="default" />
      </div>
    </div>
  );
}
