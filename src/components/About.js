import React from 'react';

export const About = () => {
  const url = require('../images/good-things.jpg');
  return (
    <div className="About">
      <h1>About Be the Boost </h1>
      <p>
        Sometimes in life, you find it hard to encourage your friend going through a hard time, of having a bad day.
        Boost is a way to send your friend a picture of a dog (cats coming soon!) and message.
      </p>
      <img src={url} alt="good news is coming" />
    </div>
  );
};
