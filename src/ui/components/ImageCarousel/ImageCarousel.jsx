import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import ErrorView from '../ErrorView/ErrorView';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

/**
 * The ImageCarousel component takes a list of images that contains their
 * url and their corresponding alt tag. It creates a react-responsive-carousel by
 * iterating over the images and setting their src tag to the image url.
 */
const ImageCarousel = ({ images }) => (
  <React.Fragment>
    {images.length > 0 && (
      <Chip label={`${images.length} images found`} style={{ marginBottom: '3px' }} />
    )}
    <Paper>
      {images.length > 0 ? (
        <Carousel dynamicHeight={false}>
          {images.map(image => (
            <div key={image.url} style={{ height: '500px' }}>
              <img src={image.url} style={{ height: '100%' }} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      ) : (
        <ErrorView text="No images found.." />
      )}
    </Paper>
  </React.Fragment>
);

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string.isRequired, alt: PropTypes.string })
  ).isRequired
};

export default ImageCarousel;
