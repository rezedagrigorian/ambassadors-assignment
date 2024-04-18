import React, { useState } from 'react';
import { useWebcamCapture } from "../../useWebcamCapture";

import styles from './Workspace.module.css';

const Workspace = (props) => {
  const { sticker, addPicture } = props;

  const [lastPictureURI, setLastPictureURI] = useState();

  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img);

  if (picture && picture.dataUri !== lastPictureURI) {
    addPicture(picture);
    setLastPictureURI(picture.dataUri);
  }

  return (
    <section className={styles.container}>
      <video ref={handleVideoRef} className={styles.video} />
      <canvas
        className={styles.canvas}
        ref={handleCanvasRef}
        width={2}
        height={2}
        onClick={handleCapture}
      />
    </section>
  );
}

export default Workspace;
