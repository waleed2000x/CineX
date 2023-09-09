// useFetchAPI.js
import { useEffect, useState } from "react";
import axios from "axios";

function useFetchAPI(url, params) {
  const [data, setData] = useState(null); // Initialize data as null
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url,
      params,
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url, params]);

  return { data, isLoading, error };
}

export default useFetchAPI;
