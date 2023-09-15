import axios from "axios";
import FirstSightVideo from "../Popular/FirstSightVideo";
import AfterEverything from "../media/AFTEREVERYTHING.mp4";
import AfterEverythingImg from "../media/After-Everything.jpg";
import { useEffect, useState } from "react";

export default function Releases() {
  const [releases, setReleases] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/all/day",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzMxODBhZGQ1NTg3NmNkZDE4OTExYTY1MzE1ZjFiMyIsInN1YiI6IjY0ZjZjZmQ4NWYyYjhkMDBhYmNiZDcxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fb9Iw-2JaPM8_9Wk1FPiYcRgsQqlL3ak1v12FimF7TA",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setReleases(response.data.results);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  return (
    <div className="mainParentPopular">
      <FirstSightVideo
        videoLink={AfterEverything}
        details={true}
        name={"After Everything"}
        thumbnail={AfterEverythingImg}
        description={
          "The fifth and final installment of the AFTER franchise finds Hardin struggling to move forward. Besieged by writer's block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past - and to find himself."
        }
      />
    </div>
  );
}
