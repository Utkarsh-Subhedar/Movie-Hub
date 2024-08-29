import { useEffect, useState } from "react";
import { api } from "../utils/api";

const useFetch = (dataURL) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await api(dataURL);
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setErr("Something went wrong");
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [dataURL]);
  return { data, err, loading };
};

export default useFetch;
