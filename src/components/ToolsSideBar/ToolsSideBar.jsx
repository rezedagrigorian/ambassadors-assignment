import React, { useState } from 'react';

import styles from './ToolsSideBar.module.css';
import globalStyles from '../../App.module.css';

import logo from '../../slap.png';

const stickers = [logo].map((url) => {
  const img = document.createElement("img");
  img.src = url;
  return { img, url };
});

const ToolsSideBar = (props) => {
  const { sticker, setSticker } = props;
  const [title, setTitle] = useState("SLAPPE!");

  return (
    <>
      <section className={globalStyles.sidebar}>
        <div className={styles.steps}>
          Step one: Give it a name
          <input
            type="text"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <div className={styles.stickers}>
            Step two: Select your stickers:
            <button onClick={() => setSticker(stickers[0])}>
              <img src={stickers[0].url} />
            </button>
          </div>
          <button className={styles.captureButton}>
            Make a photo
          </button>
        </div>
      </section>
    </>
  );
}

export default ToolsSideBar;
