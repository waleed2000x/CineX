import Lottie from "lottie-react";
import LogoLightTheme from "./LogoLightTheme.json";
// import LogoDarkTheme from "./LogoDarkTheme.json";
export default function LogoLottie() {
  return (
    <div className="logoLottie">
      <Lottie animationData={LogoLightTheme} loop={true} />
    </div>
  );
}
