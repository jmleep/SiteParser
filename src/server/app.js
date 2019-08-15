const express = require('express');
const axios = require('axios');
const cors = require('cors');
const parseHTML = require('./parseHTML');

const app = express();
app.use(cors());

const fetchSite = async site => axios.get(site, { crossdomain: true }).then(res => res.data);

/**
 * This is the api route for the web service that accepts
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
    res.send({ error: e });
  }
});

app.listen(8080, () => {
  console.log('Backend started on port 8080');
});
