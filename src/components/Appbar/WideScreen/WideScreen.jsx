import { ThemeContext } from "../../themeContext/ThemeContext";
import { useContext } from "react";
import { themes } from "../../themeContext/ThemeContext";

export default function WideScreen() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    console.log(theme);
    console.log(themes);
  };
  return (
    <div onClick={handleTheme} className="wideScreenParent">
      <h1>WideScreen</h1>
    </div>
  );
}
