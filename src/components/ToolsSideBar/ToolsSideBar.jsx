import React from 'react';

import './tools_sidebar.scss';
import Sidebar from '../Sidebar/Sidebar';

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
    <Sidebar title="Settings">
      <div className="settings">
        <div className="sub_header">
          Art name
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your art title!"
        />
        <div className="sub_header">
          Stickers
        </div>
        <div className="stickers__wrapper">
          <div className="stickers">
            {stickers.map((stick, index) => (
              <button
                key={index}
                onClick={() => setSticker(stick)}
                className={(sticker && sticker.url === stick.url) ? 'active' : ''}
              >
                <img src={stick.url} alt={`sticker-${index}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default ToolsSideBar;
