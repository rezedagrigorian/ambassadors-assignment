import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import avatar from '../../assets/avatar.jpeg';

const Header = () => {
  return (
    <header className="header">
      <h1>StickerSnap</h1>
      <img src={avatar} alt="avatar" />
      <button>
        Logout
      </button>
    </header>
  );
}

export default Header;
