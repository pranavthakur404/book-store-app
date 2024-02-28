import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetching = async () => {
    const res = await fetch(url);
    const resData = await res.json();
    setData(resData);
    setLoading(false);
  };

  useEffect(() => {
    fetching();
  }, []);

  return { data, loading };
};

export default useFetch;
