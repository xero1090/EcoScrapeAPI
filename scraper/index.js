const axios = require('axios');
const cheerio = require('cheerio');

const scrapeArticles = async (newspaper) => {
  try {
    const response = await axios.get(newspaper.address);
    const html = response.data;
    const $ = cheerio.load(html);
    const specificArticles = [];

    $('a:contains("climate")', html).each(function () {
      const title = $(this).text();
      const url = $(this).attr('href');
      specificArticles.push({
        title,
        url: newspaper.base ? newspaper.base + url : url,
        source: newspaper.name
      });
    });

    return specificArticles;
  } catch (error) {
    console.error(`Error scraping ${newspaper.name}: ${error}`);
    throw error;
  }
};

module.exports = { scrapeArticles };
