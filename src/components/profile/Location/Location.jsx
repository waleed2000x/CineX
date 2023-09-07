import { Typography } from "@mui/material";
import UseFetch from "../../useFetch/UseFetch";
import { useContext } from "react";
import { ThemeContext } from "../../themeContext/ThemeContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Location = () => {
  const { theme } = useContext(ThemeContext);
  const { data: ipData, loading, error } = UseFetch("http://ip-api.com/json");

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
        <div className="locationSkeleton">
          <SkeletonTheme
            baseColor={`${theme === "light" ? "#d9dadb" : "#474747"}`}
          >
            <Skeleton
              width={"80%"}
              height={"20px"}
              style={{ margin: "10px" }}
            />
            <Skeleton
              width={"60%"}
              height={"20px"}
              style={{ margin: "10px" }}
            />
            <Skeleton
              width={"40%"}
              height={"20px"}
              style={{ margin: "10px" }}
            />
            <Skeleton
              width={"60%"}
              height={"20px"}
              style={{ margin: "10px" }}
            />
          </SkeletonTheme>
        </div>
      ) : error ? (
        <Typography variant="p" color={"red"} fontFamily={"inherit"}>
          Error: {error.message}
        </Typography>
      ) : (
        <div className="xCftiply-56-info">
          <Typography
            variant="p"
            fontFamily={"inherit"}
            margin={"10px 0px"}
            color={`${theme === "light" ? "black" : "white"}`}
          >
            Internet Service:
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
