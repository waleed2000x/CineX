import { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ThemeContext } from "../themeContext/ThemeContext";

export default function PopularSkeleton() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "150px",
        flexWrap: "wrap",
        width: "99vw",
      }}
    >
      <SkeletonTheme baseColor={`${theme === "light" ? "#d9dadb" : "#474747"}`}>
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
        <Skeleton width={"300px"} height={"200px"} style={{ margin: "10px" }} />
      </SkeletonTheme>
    </div>
  );
}
