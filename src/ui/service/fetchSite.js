/**
 * This function accepts a website url and returns a promise that resolves to the json data
 * provided by the service. If an error occurs, the response is set
 * to empty arrays.
 * @param {String} siteUrl
 */
const fetchSite = async siteUrl =>
  fetch(`http://localhost:8080?site=${siteUrl}`, {
    mode: 'cors'
  })
    .then(res => res.json())
    .catch(() => ({ images: [], words: [] }));

export default fetchSite;
