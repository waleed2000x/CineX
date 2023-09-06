// // import axios from "axios";
// // import { useEffect, useState } from "react";

// // export default function Location() {
// //   const [location, setLocation] = useState();
// //   useEffect(() => {
// //     axios
// //       .get(
// //         "https://api.ipgeolocation.io/ipgeo?apiKey=6e0ede14791a4ac98a8672caf19c1882"
// //       )
// //       .then((res) => setLocation(res.data))
// //       .catch((err) => console.log(err));
// //   }, []);
// //   console.log(location);
// //   return <div>Location</div>;
// // }
// import React, { useEffect, useState } from "react";

// export default function Location() {
//   // Working properly done good

//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "http://api.ipapi.com/api/check?access_key=7c90ec971a7f0cd7ff7a25818262fd7a"
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setLocation(data);
//       } catch (error) {
//         console.error("Error fetching location data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(location);

//   return <div>Location</div>;
// }

import { useEffect, useState } from "react";
import axios from "axios";

const Location = () => {
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://ip-api.com/json`)
      .then((response) => {
        setIpData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching IP geolocation:", error);
      });
  }, []);
  console.log(ipData);
  return (
    <div>
      <h1>IP Geolocation Information</h1>
      {ipData ? (
        <div>
          <p>Your IP Address: {ipData.ip}</p>
          <p>
            Location: {ipData.city}, {ipData.region}, {ipData.country_name}
          </p>
          <p>Latitude: {ipData.latitude}</p>
          <p>Longitude: {ipData.longitude}</p>
          <p>ISP: {ipData.isp}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Location;
