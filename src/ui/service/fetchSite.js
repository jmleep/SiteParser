const fetchSite = async siteUrl => {
  return fetch(`http://localhost:8080?site=${siteUrl}`, {
    mode: 'cors'
  }).then(res => res.json());
};

export default fetchSite;
