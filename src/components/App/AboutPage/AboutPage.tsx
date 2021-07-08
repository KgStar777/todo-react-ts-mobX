import React from 'react';

import classes from './AboutPage.module.scss';

const AboutPage = () => (
  <div className={classes.AboutWrapper}>
    <div className={classes.PhotoWrapper}>
      {/* <img alt="me" src={photo} /> */}
    </div>
    <h1>Daniil Sychev</h1>
    <p style={{ textAlign: 'center' }}>
      {/* eslint-disable-next-line */}
      At this project I have implemented GET's from <a href="https://jsonplaceholder.typicode.com/">jsonplaseholder</a>
    </p>
  </div>
);

export default AboutPage;
