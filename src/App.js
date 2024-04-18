import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import styles from './App.module.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ToolsSideBar from './components/ToolsSideBar/ToolsSideBar';
import Workspace from './components/Workspace/Workspace';
import Gallery from './components/Gallery/Gallery';
import Rules from "./components/Rules/Rules";

function App(props) {
  const [sticker, setSticker] = useState([]);
  const [pictures, setPictures] = useState([]);

  const addPicture = (picture) => {
    setPictures([...pictures, picture]);
  }

  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <main className={styles.container}>
            <ToolsSideBar sticker={sticker} setSticker={setSticker} />
            <Workspace sticker={sticker} addPicture={addPicture} />
            <Gallery pictures={pictures} />
          </main>
        </Route>
        <Route path="/readme">
          <Rules />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
