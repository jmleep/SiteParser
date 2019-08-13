/**
 * This function parses the images from a html document
 */
const parseImages = (site, document) => {
  // Spread the images into a javascript array
  const imageElements = [...document.getElementsByTagName('img')];

  // Map over each image and set the url appropriately. If the
  // url is set to the site's static directory and excludes the full
  // url, prepend the site's url.
  const images = imageElements.map(element => {
    const img = {};
    if (!element.src.startsWith('http') && !element.src.includes('localhost')) {
      img.url = `${site}${element.src}`;
    } else {
      img.url = element.src;
    }

    img.alt = element.alt;
    return img;
  });

  return images;
};

module.exports = parseImages;
