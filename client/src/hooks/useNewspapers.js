// import { useState, useEffect } from 'react';

// const useNewspapers = (url) => {
//   const [newspapers, setNewspapers] = useState([]);

//   useEffect(() => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => setNewspapers(data))
//       .catch(error => console.error('Error fetching newspapers:', error));
//   }, [url]); // Dependency on url ensures that if the url changes, the hook will refetch the newspapers

//   return newspapers;
// };

// export default useNewspapers;

// Inside useNewspapers.js
import { useState, useEffect } from 'react';

const useNewspapers = (url) => {
  const [newspapers, setNewspapers] = useState([]);

  useEffect(() => {
    const fetchNewspapers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNewspapers(data);
      } catch (error) {
        console.error('Error fetching newspapers:', error);
      }
    };

    fetchNewspapers();
  }, [url]); // Dependency array with URL to refetch if URL changes

  return newspapers;
};

export default useNewspapers;
