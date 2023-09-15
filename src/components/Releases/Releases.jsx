import FirstSightVideo from "../Popular/FirstSightVideo";
import AfterEverything from "../media/AFTEREVERYTHING.mp4";
import AfterEverythingImg from "../media/After-Everything.jpg";
export default function Releases() {
  return (
    <div className="mainParentPopular">
      <FirstSightVideo
        videoLink={AfterEverything}
        details={true}
        name={"The Equalizer 3"}
        thumbnail={AfterEverythingImg}
        description={
          "The fifth and final installment of the AFTER franchise finds Hardin struggling to move forward. Besieged by writer's block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past - and to find himself."
        }
      />
    </div>
  );
}
