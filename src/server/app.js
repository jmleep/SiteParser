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
    const img = {};
    if (!element.src.startsWith('http') && !element.src.includes('localhost')) {
      img.url = `${site}${element.src}`;
    } else {
      img.url = element.src;
    }

    img.height = element.height;
    img.width = element.width;

    return img;
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
      .replace(/[.,/#!$%^&?"*;:{}=\-_`~()]/g, '')
      .replace(/\\/, '');
      // .replace(/[\W_]+/g, ' '); // remove non words/alphanumeric
    const multiWords = alphanumeric.split(' ');

    multiWords.forEach(word => {
      if (word.length > 0) {
        if (words[word]) {
          words[word] += 1;
        } else {
          words[word] = 1;
        }
      }
    });
  });

  const wordCounts = [];
  Object.entries(words).forEach(([key, value]) => {
    wordCounts.push({
      word: key,
      count: value
    });
  });

  wordCounts.sort((a, b) => b.count - a.count);
  return { images, words: wordCounts };
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
