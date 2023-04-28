import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const refetch = () => {
    setLoading(true);
    axios
      .get(
        "https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json"
      )
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    refetch();
  }, []);

  return { data, loading, error, refetch };
};
export default useAxios;
