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
  const { sticker, setSticker, title, setTitle } = props;
  console.log(sticker);
  return (
    <section className={globalStyles.sidebar}>
      <h2>The best title!</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2>And the best sticker!</h2>
      <div className={styles.stickers}>
        {stickers.map((sticker, index) => (
          <button key={index} onClick={() => setSticker(sticker)}>
            <img src={sticker.url} alt={`sticker-${index}`} />
          </button>
        ))}
      </div>
    </section>
  );
}

export default ToolsSideBar;
