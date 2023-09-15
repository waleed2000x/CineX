import Lottie from "lottie-react";
import ReactLottie from "../FotterLottie/ReactLotties.json";

export default function FooterLottie() {
  return (
    <div className="footerLottie">
      <Lottie animationData={ReactLottie} />
    </div>
  );
}
