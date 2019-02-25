import React from 'react';

export const BoostCard = ({ img }) => {
  const url = 'https://random.dog/';
  return (
    <div className="BoostCard">
      <img src={url + img} width="300px" alt="dog" />
      <button className="BoostCard-button" />
    </div>
  );
};
