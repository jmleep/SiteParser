import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => (
  <Carousel dynamicHeight={false}>
    {images.map(imgUrl => (
      <div key={imgUrl} style={{ height: '500px' }}>
        <img src={imgUrl} style={{ height: '100%' }} />
      </div>
    ))}
  </Carousel>
);

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageCarousel;
