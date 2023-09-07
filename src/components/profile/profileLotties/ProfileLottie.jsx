import Lottie from "lottie-react";
import DarkProfile from "./DarkProfile.json";
import LightProfile from "./LightProfile.json";
import { useContext } from "react";
import { ThemeContext } from "../../themeContext/ThemeContext";

export default function ProfileLottie() {
  const { theme } = useContext(ThemeContext);
  const animationData = theme === "light" ? LightProfile : DarkProfile;

  return (
    <div className="profileLottie">
      <Lottie animationData={animationData} />
    </div>
  );
}
