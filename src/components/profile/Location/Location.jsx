import { Typography } from "@mui/material";
import UseFetch from "../../useFetch/UseFetch";
import { useContext } from "react";
import { ThemeContext } from "../../themeContext/ThemeContext";

const Location = () => {
  const { theme } = useContext(ThemeContext);
  const { data: ipData, loading, error } = UseFetch("http://ip-api.com/json");
  console.log(ipData);
  return (
    <div className="xCftiply-56">
      <Typography
        variant="h5"
        fontFamily={"inherit"}
        fontWeight={"600"}
        color={`${theme === "light" ? "black" : "white"}`}
      >
        IP Geolocation Information
      </Typography>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="xCftiply-56-info">
          <Typography
            variant="p"
            fontFamily={"inherit"}
            margin={"10px 0px"}
            color={`${theme === "light" ? "black" : "white"}`}
          >
            Internet Sercive :
            <span style={{ color: "red", marginLeft: "8px" }}>
              {ipData.isp}
            </span>
          </Typography>
          <Typography
            variant="p"
            fontFamily={"inherit"}
            margin={"10px 0px"}
            color={`${theme === "light" ? "black" : "white"}`}
          >
            City:
            <span style={{ color: "red", marginLeft: "8px" }}>
              {ipData.city}
            </span>
          </Typography>
          <Typography
            variant="p"
            fontFamily={"inherit"}
            margin={"10px 0px"}
            color={`${theme === "light" ? "black" : "white"}`}
          >
            Country:
            <span style={{ color: "red", marginLeft: "8px" }}>
              {ipData.country}
            </span>
          </Typography>
          <Typography
            variant="p"
            fontFamily={"inherit"}
            margin={"10px 0px"}
            color={`${theme === "light" ? "black" : "white"}`}
          >
            Region:
            <span style={{ color: "red", marginLeft: "8px" }}>
              {ipData.regionName}
            </span>
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Location;
