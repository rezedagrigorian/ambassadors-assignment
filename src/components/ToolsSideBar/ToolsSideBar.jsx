import React, { useState } from 'react';

import styles from './ToolsSideBar.module.css';
import globalStyles from '../../App.module.css';

import logo from '../../assets/stickers/slap.png';
import fun from '../../assets/stickers/fun.png';
import hot from '../../assets/stickers/hot.png';
import loveit from '../../assets/stickers/loveit.png';
import no from '../../assets/stickers/no.png';
import smile from '../../assets/stickers/smile.png';
import vibes from '../../assets/stickers/vibes.png';
import crown from '../../assets/stickers/crown.png';
import err from '../../assets/stickers/err.png';
import party from '../../assets/stickers/party.png';
import usu from '../../assets/stickers/usu.png';

const stickers = [logo, fun, hot, loveit, no, smile, vibes, crown, err, party, usu].map((url) => {
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
          <h3> Give your photo a title</h3>
          <input
            type="text"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <div className={styles.stickersWrapper}>
            <h3>Choose your sticker</h3>
            <div className={styles.stickers}>
              {stickers.map((sticker, index) => (
                <button key={index} onClick={() => setSticker(sticker)}>
                  <img src={sticker.url} alt={`sticker-${index}`} />
                </button>
              ))}
            </div>
          </div>
          <h3>Choose filters for your photo</h3>
          <button className={styles.captureButton}>
            Make a photo
          </button>
        </div>
      </section>
    </>
  );
}

export default ToolsSideBar;
