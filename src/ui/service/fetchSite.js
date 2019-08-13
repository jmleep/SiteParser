const fetchSite = async siteUrl => {
  return fetch(`http://localhost:8080?site=${siteUrl}`, {
    mode: 'cors'
  }).then(res => res.json()).catch(() => ({ images: [], words: [] }));
};

export default fetchSite;
