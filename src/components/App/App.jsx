import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList';

function App() {
  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios.get('/gallery')
      .then(res => {
        setGalleryList(res.data)
        console.log('res.data', res.data)
      })
      .catch(err => {
        console.log('error in GET galleryList', err)
      })
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>My Gallery</p>
        <GalleryList  galleryList={galleryList}/>
      </div>
    );
}

export default App;
