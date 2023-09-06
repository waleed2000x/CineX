import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Equalizer from "../media/Equalizer.mp4";
import { Button, IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

export default function Popular() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // State to track play/pause status

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: {
        api_key: "573180add55876cdd18911a65315f1b3",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setPopularMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleImageHover = (title) => {
    setIsHovered(true);
    setHoveredImage(title);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
    setHoveredImage(null);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted); // Toggle mute status
  };

  const handleTogglePlayPause = () => {
    setIsPlaying(!isPlaying); // Toggle play/pause status
    const video = document.getElementById("video"); // Get the video element
    if (isPlaying) {
      video.pause(); // Pause the video
    } else {
      video.play(); // Play the video
    }
  };

  const mainShow = popularMovies[4];
  console.log(mainShow);

  return (
    <div className="mainParent">
      {mainShow && (
        <div className="popularFirstSight">
          <motion.div className="imageFirstSight">
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
      )}
      <div className="popularParent">
        <div className="popularMainImage">
          {popularMovies.map((movie, i) => {
            return (
              <div
                key={i}
                className="imageContainer"
                onMouseEnter={() => handleImageHover(movie.original_title)}
                onMouseLeave={handleImageLeave}
              >
                <div>
                  <p className={`imageTitle ${isHovered ? "showTitle" : ""}`}>
                    {hoveredImage}
                  </p>
                  <img
                    style={{ borderRadius: "15px" }}
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.original_title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
