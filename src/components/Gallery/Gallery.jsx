import React, { useState } from 'react';
import { createUseStyles } from "react-jss";

import styles from './Gallery.module.css';
import globalStyles from '../../App.module.css';

const Gallery = (props) => {
  const { pictures, setPictures } = props;

  const sharePicture = (picture) => {
  }

  const downloadPicture = (picture) => {
    const link = document.createElement('a');
    link.href = picture.dataUri;
    link.download = picture.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  const deletePicture = (index) => {
    setPictures(pictures.filter((picture, i) => i !== index));
  }

  return (
    <>
      <section className={globalStyles.sidebar}>
        <h2>Gallery</h2>
        {pictures.length === 0 && (
          <div className={styles.empty}>
            <p>No pictures captured yet</p>
          </div>
        )}
        <div className={styles.scroller}>
          {pictures.map((picture, index) => (
            <div key={index} className={styles.picture}>
              <img src={picture.dataUri} />
              <div className={styles.controls}>
                <button onClick={() => deletePicture(index)} class={styles.delete} />
                <button onClick={() => sharePicture(picture)} class={styles.share} />
                <button onClick={() => downloadPicture(picture)} class={styles.download} />
              </div>
              <h3>{picture.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
