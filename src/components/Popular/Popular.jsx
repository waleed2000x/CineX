import axios from "axios";
import { useEffect, useState } from "react";

export default function Popular() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
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
        console.log(response.data.results);
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

  return (
    <div className="mainParent">
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
