import { useState, useEffect } from 'react';
import axios from 'axios';

const useArticles = (initialUrl, initialData) => {
  const [articles, setArticles] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setArticles(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return [articles, setUrl];
};

export default useArticles;
