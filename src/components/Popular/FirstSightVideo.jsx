import { motion } from "framer-motion";
import Equalizer from "../media/Equalizer.mp4";
import { IconButton, Typography } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { useContext, useState } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";

export default function FirstSightVideo() {
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
      <motion.div className="imageFirstSight">
        <div className="shader"></div>
        <video
          id="video"
          width="100%"
          height="100%"
          loop
          autoPlay
          muted={isMuted}
        >
          <source src={Equalizer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="detailBox">
          <Typography variant="h1" fontFamily={"inherit"} color={"white"}>
            The Equalizer 3
          </Typography>
        </div>
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
      </motion.div>
    </div>
  );
}
