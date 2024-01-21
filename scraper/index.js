const axios = require('axios');
const cheerio = require('cheerio');


// A utility function to clean up the title by removing unwanted parts
// const cleanBBCtitle = (title) => {
//     // Regular expression to match the title pattern ending with the year "2023"
//     // and followed by a capital letter, indicating the start of a new sentence.
//     const regexPattern = /(.+?)(\d{4})([A-Z].*)/;
//     const matches = title.match(regexPattern);
  
//     if (matches && matches.length > 1) {
//       // This assumes that the first capturing group is the actual title.
//       return matches[1].trim();
//     }
  
//     // If the regex doesn't match, return the original title.
//     return title.trim();
//   };

// const scrapeArticles = async (newspaper) => {
//   try {
//     const response = await axios.get(newspaper.address);
//     const html = response.data;
//     const $ = cheerio.load(html);
//     const specificArticles = [];

//     $('a:contains("climate")', html).each(function () {
//       let title = $(this).text().trim();
      
//       if (newspaper.name === 'bbc') {
//         title = $("h1:first").text();
//       }

//       const url = $(this).attr('href');
//       specificArticles.push({
//         title,
//         url: newspaper.base ? newspaper.base + url : url,
//         source: newspaper.name
//       });
//     });

//     return specificArticles;
//   } catch (error) {
//     console.error(`Error scraping ${newspaper.name}: ${error}`);
//     throw error;
//   }
// };

// const scrapeArticles = async (newspaper) => {
//     try {
//       const response = await axios.get(newspaper.address);
//       const html = response.data;
//       const $ = cheerio.load(html);
//       const specificArticles = [];
  
//       if (newspaper.name === 'bbc') {
//         // For BBC, we assume that the title is in the first <h1> on the article page.
//         // You need to load each article page separately to get the title.
//         const articleLinks = $('a:contains("climate")', html);
        
//         for (let i = 0; i < articleLinks.length; i++) {
//           const articleUrl = newspaper.base ? newspaper.base + $(articleLinks[i]).attr('href') : $(articleLinks[i]).attr('href');
//           const articleResponse = await axios.get(articleUrl);
//           const articleHtml = articleResponse.data;
//           const article$ = cheerio.load(articleHtml);
//           const title = article$("h1:first").text().trim();
          
//           specificArticles.push({
//             title,
//             url: articleUrl,
//             source: newspaper.name
//           });
//         }
//       } else {
//         // For other newspapers, we can directly use the text of the <a> tag.
//         $('a:contains("climate")', html).each(function () {
//           const title = $(this).text().trim();
//           const url = $(this).attr('href');
//           specificArticles.push({
//             title,
//             url: newspaper.base ? newspaper.base + url : url,
//             source: newspaper.name
//           });
//         });
//       }
  
//       return specificArticles;
//     } catch (error) {
//       console.error(`Error scraping ${newspaper.name}: ${error}`);
//       throw error;
//     }
//   };


const scrapeArticles = async (newspaper) => {
  try {
    const response = await axios.get(newspaper.address);
    const html = response.data;
    const $ = cheerio.load(html);
    const specificArticles = [];

    if (newspaper.name === 'bbc') {
      const articleLinks = $('a:contains("climate")', html).map((i, el) => {
        const url = $(el).attr('href');
        return newspaper.base ? newspaper.base + url : url;
      }).get();

      const articlePromises = articleLinks.map(async (url) => {
        try {
          const articleResponse = await axios.get(url);
          const articleHtml = articleResponse.data;
          const article$ = cheerio.load(articleHtml);
          const title = article$("h1:first").text().trim();

          return {
            title,
            url,
            source: newspaper.name
          };
        } catch (error) {
          console.error(`Error scraping article from ${url}: ${error}`);
          return null;
        }
      });

      // Wait for all the promises to resolve
      const articles = await Promise.all(articlePromises);
      // Filter out any null values if a request failed
      return articles.filter(article => article !== null);
    } else {
      // For other newspapers, we can directly use the text of the <a> tag.
        $('a:contains("climate")', html).each(function () {
          const title = $(this).text().trim();
          const url = $(this).attr('href');
          specificArticles.push({
            title,
            url: newspaper.base ? newspaper.base + url : url,
            source: newspaper.name
          });
        });
      }
  
      return specificArticles;
    
  } catch (error) {
    console.error(`Error scraping ${newspaper.name}: ${error}`);
    throw error;
  }
};




module.exports = { scrapeArticles };
