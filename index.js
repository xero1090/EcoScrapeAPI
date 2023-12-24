const PORT = process.env.PORT || 8000 //for deployment on heroku
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const {response} = require("express");
const app = express()

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

const articles = []

newspapers.forEach(newspaper => {
    axios.get(newspaper.address)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            $('a:contains("climate")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: newspaper.base + url,
                    source: newspaper.name
                })
            })

        })
})

app.get('/', (req, res) => {
    res.json(`Welcome to EcoScrapeAPI! Add /news to the end of the URL to proceed!`)

})

app.get('/news', (req, res) => {
    res.json(articles)
})

app.get('/news/:newspaperId', (req, res) => {
    const newspaperId = req.params.newspaperId
    const newspaperAddress = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].address
    const newspaperBase = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].base

    axios.get(newspaperAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []

            $('a:contains("climate")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificArticles.push({
                    title,
                    url: newspaperBase + url,
                    source: newspaperId
                })
            })
            res.json(specificArticles)
        }).catch(err => console.log(err))
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
