import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>SlapSticker</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/readme">readme</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
