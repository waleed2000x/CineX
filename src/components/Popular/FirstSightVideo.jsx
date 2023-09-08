/* eslint-disable react/prop-types */
import { IconButton, Typography } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { useContext, useState } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";

export default function FirstSightVideo({
  videoLink,
  details,
  name,
  description,
  landingVideo,
  thumbnail,
}) {
  const { theme } = useContext(ThemeContext);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleTogglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const video = document.getElementById("video");
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };
  return (
    <div className="popularFirstSight">
      <div className="imageFirstSight">
        <div
          className={`${theme === "light" ? "shaderLight" : "shaderDark"}`}
        ></div>
        <video
          id="video"
          width="100%"
          height="100%"
          loop
          autoPlay
          muted={isMuted}
          poster={thumbnail}
        >
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="detailBox">
          <Typography
            variant="h2"
            fontFamily={"inherit"}
            color={`${theme === "light" ? "black" : "white"}`}
            fontWeight={"600"}
          >
            {name}
          </Typography>
          {!isPlaying && (
            <>
              <Typography
                variant="p"
                marginLeft={"10px"}
                fontFamily={"inherit"}
                color={`${theme === "light" ? "black" : "white"}`}
              >
                {description}
              </Typography>
              <Typography
                variant="h6"
                color={`${theme === "light" ? "black" : "white"}`}
                fontFamily={"inherit"}
              >
                Rated :<span>16+</span>
              </Typography>
            </>
          )}
        </div>
        {details && (
          <>
            {landingVideo ? (
              <div className="landingButtonPlay">
                {isPlaying ? (
                  <div
                    className="landingPlayer"
                    onClick={handleTogglePlayPause}
                  ></div>
                ) : (
                  <IconButton onClick={handleTogglePlayPause}>
                    <PlayCircleOutlineIcon />
                  </IconButton>
                )}
              </div>
            ) : (
              <div className="videoButtons">
                <IconButton onClick={handleTogglePlayPause}>
                  {isPlaying ? (
                    <PauseCircleOutlineIcon
                      style={{
                        fontSize: "50px",
                        color: "white",
                      }}
                    />
                  ) : (
                    <PlayCircleOutlineIcon
                      style={{
                        fontSize: "50px",
                        color: "white",
                      }}
                    />
                  )}
                </IconButton>
                <IconButton onClick={handleToggleMute}>
                  {isMuted ? (
                    <VolumeOffIcon
                      style={{
                        fontSize: "50px",
                        color: "white",
                      }}
                    />
                  ) : (
                    <VolumeUpIcon
                      style={{
                        fontSize: "50px",
                        color: "white",
                      }}
                    />
                  )}
                </IconButton>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
