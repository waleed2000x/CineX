import axios from "axios";
import { useEffect, useState } from "react";
import FirstSightVideo from "./FirstSightVideo";

export default function Popular() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(null);

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
    setHoveredImage(title);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="mainParent">
      <FirstSightVideo />
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
                  <p className="imageTitle">{hoveredImage}</p>
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
        <div className="polularMovies">
          {popularMovies.map((movie, i) => {
            return (
              <img
                key={i}
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}