import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BoostCard = ({ img, fetchDogImage }) => {
  const url = 'https://random.dog/';
  return (
    <div className="BoostCard">
      <Link to={`/send-boost/${img}`}>
        <img src={url + img} width="300px" alt="dog" />
      </Link>
      <button className="BoostCard-button" onClick={() => fetchDogImage()} />
    </div>
  );
};

BoostCard.propTypes = {
  img: PropTypes.string,
  fetchDogImage: PropTypes.func
};
