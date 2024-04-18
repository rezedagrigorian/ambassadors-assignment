import React, { useState } from 'react';
import { createUseStyles } from "react-jss";

import styles from './Gallery.module.css';
import globalStyles from '../../App.module.css';

const Gallery = (props) => {
  const { pictures } = props;

  return (
    <>
      <section className={globalStyles.sidebar}>
        <h2>Gallery</h2>
        {pictures.length === 0 && <p>No pictures yet</p>}
        <div className={styles.scroller}>
          {pictures.map((picture, index) => (
            <div key={index} className={styles.picture}>
              <img src={picture.dataUri} />
              <h3>{picture.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
