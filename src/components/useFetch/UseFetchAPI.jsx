// useFetchAPI.js
import { useEffect, useState } from "react";
import axios from "axios";

function useFetchAPI(url) {
  const [data, setData] = useState(null); // Initialize data as null
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .request(url)
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
}

export default useFetchAPI;
