import { useState, useEffect } from "react";
import { api } from "../utils/api";

const useFetch = (dataUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setIsError(false);

    const fetchData = async () => {
      try {
        const { data } = await api.get(dataUrl, {
          signal: controller.signal,
        });
        setData(data);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setIsError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [dataUrl]);

  return { data, loading, isError };
};

export default useFetch;
