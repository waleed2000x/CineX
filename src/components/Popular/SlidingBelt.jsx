import { useState } from "react";
import useFetchAPI from "../useFetch/UseFetchAPI";

export default function SlidingBelt() {
  const {
    data: popularMovies,
    isLoading,
    error,
  } = useFetchAPI("https://api.themoviedb.org/3/movie/popular", {
    api_key: "573180add55876cdd18911a65315f1b3",
  });
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageHover = (title) => {
    setHoveredImage(title);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="popularImageSlider">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : popularMovies !== null ? (
        popularMovies.map((movie, i) => (
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
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
