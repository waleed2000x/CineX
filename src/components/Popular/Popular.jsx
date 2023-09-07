import { useState } from "react";
import FirstSightVideo from "./FirstSightVideo";
import useFetchAPI from "../useFetch/UseFetchAPI";
import SlidingBelt from "./SlidingBelt";

export default function Popular() {
  const {
    data: popularMovies,
    isLoading,
    error,
  } = useFetchAPI("https://api.themoviedb.org/3/movie/popular", {
    api_key: "573180add55876cdd18911a65315f1b3",
  });

  return (
    <div className="mainParentPopular">
      <FirstSightVideo />

      <div className="popularParent">
        <SlidingBelt />
        <div className="popularMoviesList">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : popularMovies !== null ? (
            popularMovies.map((movie, i) => (
              <div key={i} className="imageContainer">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                />
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}
