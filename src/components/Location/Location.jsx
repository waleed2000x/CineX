// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Location() {
//   const [location, setLocation] = useState();
//   useEffect(() => {
//     axios
//       .get(
//         "https://api.ipgeolocation.io/ipgeo?apiKey=6e0ede14791a4ac98a8672caf19c1882"
//       )
//       .then((res) => setLocation(res.data))
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(location);
//   return <div>Location</div>;
// }
import React, { useEffect, useState } from "react";

export default function Location() {
  // Working properly done good

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://api.ipapi.com/api/check?access_key=7c90ec971a7f0cd7ff7a25818262fd7a"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(location);

  return <div>Location</div>;
}
