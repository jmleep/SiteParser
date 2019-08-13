const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { JSDOM } = require('jsdom');
const parseImages = require('./parseImages');
const parseWords = require('./parseWords');

const app = express();
app.use(cors());

const fetchSite = async site => axios.get(site, { crossdomain: true }).then(res => res.data);

const parseHTML = (html, site) => {
  const dom = new JSDOM(html);
  const { document } = dom.window;

  const images = parseImages(site, document);

  // Remove possible elements that may be parsed for words
  document.querySelectorAll('noscript').forEach(elem => {
    elem.parentNode.removeChild(elem);
  });
  document.querySelectorAll('script').forEach(elem => {
    elem.parentNode.removeChild(elem);
  });
  document.querySelectorAll('style').forEach(elem => {
    elem.parentNode.removeChild(elem);
  });

  const words = parseWords(document);

  return { images, words };
};

/**
 * This is the default route for the web service that accepts
 * a query parameter (?site=https://www.example.com) containing
 * the desired website to search for.
 * The data is parsed and returned as json.
 */
app.get('/', async (req, res) => {
  const { site } = req.query;
  console.log(`Request for ${site}`);
  try {
    const data = await fetchSite(site);

    const parsedData = parseHTML(data, site);

    res.json(parsedData);
  } catch (e) {
    res.send(e);
  }
});

app.listen(8080, () => {
  console.log('Backend started on port 8080');
});
