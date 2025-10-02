import { useState, useEffect } from "react";
import { api } from "../utils/api";

const useFetch = (dataUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false); // boolean error flag

  useEffect(() => {
    let isSubscribed = true; // prevent state updates if unmounted
    setLoading(true);
    setIsError(false); // reset error for new fetch

    const fetchData = async () => {
      try {
        const res = await api(dataUrl);
        if (isSubscribed) setData(res);
      } catch (err) {
        if (isSubscribed) setIsError(true);
      } finally {
        if (isSubscribed) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isSubscribed = false; // cleanup
    };
  }, [dataUrl]);

  return { data, loading, isError };
};

export default useFetch;
