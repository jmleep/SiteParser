const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { JSDOM } = require('jsdom');

const app = express();
app.use(cors());

const fetchSite = async site => axios.get(site, { crossdomain: true }).then(res => res.data);

const parseHTML = (html, site) => {
  const dom = new JSDOM(html);
  const { document } = dom.window;

  const imageElements = [...document.getElementsByTagName('img')];

  const images = imageElements.map(element => {
    if (!element.src.startsWith('http') && !element.src.includes('localhost')) {
      return `${site}${element.src}`;
    }
    return element.src;
  });

  document.querySelectorAll('noscript').forEach(elem => {
    elem.parentNode.removeChild(elem);
  });
  document.querySelectorAll('script').forEach(elem => {
    elem.parentNode.removeChild(elem);
  });

  const text = document.getElementsByTagName('body')[0].textContent;

  const cleanedUpText = text.split(' ').filter(e => e !== '');

  const words = {};
  cleanedUpText.forEach(str => {
    const alphanumeric = str
      .trim()
      .replace(/\\/, '')
      .replace(/[\W_]+/g, ' '); // remove non words/alphanumeric
    const multiWords = alphanumeric.split(' ');

    multiWords.forEach(word => {
      if (word.length > 0) {
        if (words[word]) {
          words[word].push(word);
        } else {
          words[word] = [word];
        }
      }
    });
    //str.replace('/(?:\r\n|\r|\n)*/g', '');
  });
  console.log(words);

  return { images, words };
};

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
