import { useState, useEffect } from "react";

interface IUseFetchState<T> {
  initialState: T;
  fetch: () => Promise<T>;
}

const useFetchState = <T>({ initialState, fetch }: IUseFetchState<T>) => {
  const [data, setData] = useState<T>(initialState);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setFetching(true);
      const fetchRes = await fetch();
      setData(fetchRes);
    } catch (error) {
      setError(true);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    fetching,
    error,
    fetchData,
  };
};

export { useFetchState };
