const parseImages = () => {};

const parseHTML = html => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(html, 'text/html');

  const imageElements = [...htmlDoc.getElementsByTagName('img')];
  const imageSources = imageElements.map(element => element.src);

  return imageSources;
};

export default parseHTML;
