import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Popular() {
  const [popularMovies, setPopularMovies] = useState([]);
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

  console.log(popularMovies);
  return (
    <div className="popularParent">
      <div className="popularMainImage">
        {popularMovies.map((movie, i) => {
          return (
            <div key={i}>
              <Marquee>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  />
                </div>
              </Marquee>
            </div>
          );
        })}
      </div>
      <p>Popular</p>
    </div>
  );
}
