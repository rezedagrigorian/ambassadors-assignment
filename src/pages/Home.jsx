import { useState } from "react";

import styles from '../App.module.css';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ToolsSideBar from '../components/ToolsSideBar/ToolsSideBar';
import Workspace from '../components/Workspace/Workspace';
import Gallery from '../components/Gallery/Gallery';

const Home = () => {
  const [sticker, setSticker] = useState();
  const [pictures, setPictures] = useState([]);
  const [title, setTitle] = useState('');

  const addPicture = (picture) => {
    setPictures([...pictures, { ...picture, title }]);
    setSticker(null);
  }

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <ToolsSideBar
          sticker={sticker}
          setSticker={setSticker}
          title={title}
          setTitle={setTitle}
        />
        <Workspace sticker={sticker} addPicture={addPicture} />
        <Gallery pictures={pictures} setPictures={setPictures} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;