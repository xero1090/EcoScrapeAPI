const express = require('express');
const { scrapeArticles } = require('../scraper');
//const newspapers = require('../newspapers'); // Assume you have a newspapers.js or JSON file

const router = express.Router();

const newspapers =
    [
        {
            name: 'thetimes',
            address: 'https://www.thetimes.co.uk/environment/climate-change',
            base: ''
        },
        {
            name: 'theguardian',
            address: 'https://www.theguardian.com/environment/climate-crisis',
            base: 'https://www.theguardian.com'
        },
        {
            name: 'bbc',
            address: 'https://www.bbc.com/news/topics/cmj34zmwm1zt',
            base: 'https://www.bbc.com'
        },
        {
            name: 'cityam',
            address: 'https://www.cityam.com/london-must-become-a-world-leader-on-climate-change-action/',
            base: ''
        },
        {
            name: 'nyt',
            address: 'https://www.nytimes.com/international/section/climate',
            base: '',
        },
        {
            name: 'latimes',
            address: 'https://www.latimes.com/environment',
            base: '',
        },
        {
            name: 'sun',
            address: 'https://www.thesun.co.uk/topic/climate-change-environment/',
            base: ''
        },
        {
            name: 'dm',
            address: 'https://www.dailymail.co.uk/news/climate_change_global_warming/index.html',
            base: ''
        },
        {
            name: 'nyp',
            address: 'https://nypost.com/tag/climate-change/',
            base: ''
        }


    ]

// Utility function to clean article titles
function cleanTitle(title) {
  const datePattern = /(\b\d{2} \b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b \d{4})/g;
  let cleanTitle = title.replace(datePattern, '').trim();
  cleanTitle = cleanTitle.replace(/^[\.,-\/#!$%\^&\*;:{}=\-_`~()]/, '');
  cleanTitle = cleanTitle.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]$/, '');
  return cleanTitle;
}

// API Routes

// router.get('/', async (req, res) => {
//   try {
//     const articles = await Promise.all(newspapers.map(scrapeArticles));
//     res.json(articles.flat());
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching articles" });
//   }
// });

router.get('/', async (req, res) => {
  try {
    let allArticles = await Promise.all(newspapers.map(scrapeArticles));
    allArticles = allArticles.flat().map(article => ({
      ...article,
      title: cleanTitle(article.title),
    }));
    res.json(allArticles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles" });
  }
});

router.get('/filtername/:newspaperId', async (req, res) => {
  const newspaperId = req.params.newspaperId;
  const newspaper = newspapers.find(newspaper => newspaper.name === newspaperId);

  if (!newspaper) {
    return res.status(404).json({ message: "Newspaper not found" });
  }

  try {
    let articles = await scrapeArticles(newspaper);
    articles = articles.map(article => ({
      ...article,
      title: cleanTitle(article.title),
    }));
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: `Error fetching articles from ${newspaperId}` });
  }

  // try {
  //   const articles = await scrapeArticles(newspaper);
  //   res.json(articles);
  // } catch (error) {
  //   res.status(500).json({ message: `Error fetching articles from ${newspaperId}` });
  // }
});



router.get('/newspaperssource', (req, res) => {
  // Assuming 'newspapers' is an array of newspaper objects available in this scope
  const newspaperList = newspapers.map(newspaper => ({
    name: newspaper.name
  }));

  res.json(newspaperList);
});


module.exports = router;
