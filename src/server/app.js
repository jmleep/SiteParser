const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { JSDOM } = require('jsdom');

const app = express();
app.use(cors());

const fetchSite = async site => {
  return axios.get(site, { crossdomain: true }).then(res => res.data);
};

const parseHTML = (html, site) => {
  const dom = new JSDOM(html);

  const imageElements = [...dom.window.document.getElementsByTagName('img')];

  const imageSources = imageElements.map(element => {
    if (!element.src.startsWith('http') && !element.src.includes('localhost')) {
      return `${site}${element.src}`;
    }
    return element.src;
  });

  return imageSources;
};

app.get('/', async (req, res) => {
  const { site } = req.query;
  console.log(`Request for ${site}`);
  try {
    const data = await fetchSite(site);

    const images = parseHTML(data, site);

    res.send(images);
  } catch (e) {
    res.send(e);
  }
});

const server = app.listen(8080, () => {
  const { host, port } = server.address();
  console.log('App started');
});
