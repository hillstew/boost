import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BoostCard = props => {
  const { img, fetchDogImage, fetchCatImage } = props;
  const dogUrl = 'https://random.dog/' + img;
  const catUrl = 'https://cdn2.thecatapi.com/images/' + img;
  return (
    <div className="BoostCard">
      {fetchCatImage && <button className="BoostCard-button" onClick={() => fetchCatImage()} />}
      {fetchDogImage && <button className="BoostCard-button" onClick={() => fetchDogImage()} />}
      <Link to={`/send-boost/${img}`}>
        {fetchCatImage && <img src={catUrl} width="300px" alt="cat" />}
        {fetchDogImage && <img src={dogUrl} width="300px" alt="dog" />}
      </Link>

    </div>
  );
};

BoostCard.propTypes = {
  img: PropTypes.string,
  fetchDogImage: PropTypes.func
};
