// utils/formatSourceName.js

const formatSourceName = (sourceKey) => {
    const displayNames = {
      'thetimes': 'The Times',
      'theguardian': 'The Guardian',
      'bbc': 'BBC',
      'cityam' : 'City A.M',
      'nyt' : 'The New York Times',
      'latimes' : 'Los Angeles Times',
      'sun' : 'The Sun',
      'dm' : 'Daily Mail',
      'nyp' : 'New York Post'

      // ...other sources
    };
  
    // Return the display name if it exists, otherwise return the source key
    return displayNames[sourceKey] || sourceKey;
  };
  
  export default formatSourceName;
  