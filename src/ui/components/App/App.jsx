import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Header from '../Header/Header';
import WordCountTable from '../WordCountTable/WordCountTable';
import styles from './App.css';
import fetchSite from '../../service/fetchSite';

document.body.style.margin = 0;

/**
 * This starting component retrieves a website using the fetchSite function
 * and sets the returned data using React hooks
 */
const App = () => {
  const [siteUrl, setSiteUrl] = useState('https://www.experient-inc.com/');
  const [siteImages, setSiteImages] = useState(null);
  const [siteWords, setSiteWords] = useState(null);
  const [searching, setSearching] = useState(false);

  /*
   * On click of the search button, execute the request and
   * set the data into the appropriate fields
   */
  const buttonClicked = async () => {
    setSearching(true);
    setSiteImages(null);
    setSiteWords(null);

    const { images, words } = await fetchSite(siteUrl);

    setSiteImages(images);
    setSiteWords(words);
    setSearching(false);
  };

  /*
   * Handle onKeyPress of enter in the textfield and search
   */
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      buttonClicked();
    }
  };

  return (
    <div>
      <Header />
      <br />
      <div className={styles.search}>
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
      {searching ? (
        <div className={styles.content}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.imageCarouselHolder}>
            {siteImages && <ImageCarousel images={siteImages} />}
          </div>
          <div>{siteWords && <WordCountTable words={siteWords} />}</div>
        </div>
      )}
    </div>
  );
};

export default App;
