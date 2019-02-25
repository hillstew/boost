import React from 'react';
import { Link } from 'react-router-dom';

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
