import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Header from '../Header/Header';
import styles from './App.css';
import fetchSite from '../../service/fetchSite';

document.body.style.margin = 0;

const App = () => {
  const [siteUrl, setSiteUrl] = useState('https://www.experient-inc.com/');
  const [siteImages, setSiteImages] = useState(null);

  const buttonClicked = async () => {
    setSiteImages(null);
    const data = await fetchSite(siteUrl);

    setSiteImages(data);
  };

  const onKeyPress = e => {
    console.log(e.key);
    if (e.key === 'Enter') {
      buttonClicked();
    }
  };

  return (
    <div>
      <Header />
      <br />
      <div className={styles.searchContent}>
        <TextField
          placeholder="Search for a website..."
          onChange={e => setSiteUrl(e.target.value)}
          value={siteUrl}
          onKeyPress={e => onKeyPress(e)}
          autoFocus
          style={{ width: '300px' }}
        />
        <div className={styles.button}>
          <Button variant="contained" color="primary" onClick={() => buttonClicked()}>
            Get Site
          </Button>
        </div>
      </div>
      <div className={styles.imageContent}>
        <div className={styles.imageCarouselHolder}>
          {siteImages && <ImageCarousel images={siteImages} />}
        </div>
      </div>
    </div>
  );
};

export default App;
