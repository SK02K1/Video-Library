import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(url);
        if (status === 200) {
          setData(data);
        }
      } catch (error) {
        setError(error.response);
      } finally {
        setShowLoader(false);
      }
    })();
  }, [url]);

  return { data, error, showLoader };
};
