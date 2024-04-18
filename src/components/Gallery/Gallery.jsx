import React from 'react';

import { toast } from 'react-toastify';

import './gallery.scss'
import Sidebar from '../Sidebar/Sidebar';

const Gallery = (props) => {
  const { pictures, setPictures } = props;

  const sharePicture = (picture) => {
    toast.info('Sharing picture is not implemented yet');
  }

  const downloadPicture = (picture) => {
    const link = document.createElement('a');
    link.href = picture.dataUri;
    link.download = picture.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Picture downloaded');
  }

  const deletePicture = (index) => {
    setPictures(pictures.filter((picture, i) => i !== index));
  }

  return (
    <Sidebar title="Gallery">
      {pictures.length === 0 && (
        <div className="gallery_placeholder">
          <p>No pictures captured yet</p>
        </div>
      )}
      <div className="scroller">
        {pictures.map((picture, index) => (
          <div key={index} className="picture__wrapper">
            <div className="picture">
              <img src={picture.dataUri} alt={picture.title} />
              <div className="controls">
                <button onClick={() => deletePicture(index)} className="delete" />
                <button onClick={() => sharePicture(picture)} className="share" />
                <button onClick={() => downloadPicture(picture)} className="download" />
              </div>
            </div>
            <h3>{picture.title}</h3>
          </div>
        ))}
      </div>
    </Sidebar>
  );
}

export default Gallery;
