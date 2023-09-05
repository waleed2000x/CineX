import axios from "axios";
import Appbar from "../Appbar/Appbar";
import { useEffect, useState } from "react";

export default function Home() {
  // const options = {
  //   method: "GET",
  //   url: "https://api.themoviedb.org/3/authentication",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzMxODBhZGQ1NTg3NmNkZDE4OTExYTY1MzE1ZjFiMyIsInN1YiI6IjY0ZjZjZmQ4NWYyYjhkMDBhYmNiZDcxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fb9Iw-2JaPM8_9Wk1FPiYcRgsQqlL3ak1v12FimF7TA",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // const [popularMovies, setPopularMovies] = useState([]);
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://api.themoviedb.org/3/movie/popular",
  //     params: {
  //       api_key: "573180add55876cdd18911a65315f1b3",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setPopularMovies(response.data.results);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  // console.log(popularMovies);
  return (
    <div>
      <Appbar />
      <p>Home</p>
    </div>
  );
}
