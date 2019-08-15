const { JSDOM } = require('jsdom');
const parseImages = require('./parseImages');
const parseWords = require('./parseWords');

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

module.exports = parseHTML;
