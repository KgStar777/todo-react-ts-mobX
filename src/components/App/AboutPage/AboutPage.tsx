import React, { useEffect, useState } from 'react';

import classes from './AboutPage.module.scss';

const AboutPage = () => (
  <div className={classes.AboutWrapper}>
    <div className={classes.PhotoWrapper}>
      <img className="image-container" alt="me" src="https://picsum.photos/600/300" />
    </div>
    <h1>Daniil Sychev</h1>
    <p style={{ textAlign: 'center' }}>
      {/* eslint-disable-next-line */}
      At this project I have implemented GET's from <a href="https://jsonplaceholder.typicode.com/">jsonplaseholder</a>
      <br />
      App built using antd, typrscript, react, mobx
    </p>
  </div>
);

export default AboutPage;
