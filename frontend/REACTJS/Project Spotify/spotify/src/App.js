import React, { useContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { Songs } from './components/Context';
import DataSongs from './data/songs.json';
import Playing from './components/Playing';

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  console.log(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    setSong(song)
  }
  return (
    <div className='App' >
      {/* Truyền giá trị value muốn chia sẻ vào  */}
      {/* bao bọc toàn bộ thành phần DOM của component bằng thẻ 
      Provider đồng thời truyền giá trị muốn chia sẻ đến các component */}
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar overflow-hidden' >
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong />

        </div>
        <Playing />
        {/* Playing compo từ thư viện h5 react audio */}
      </Songs.Provider>



    </div>
  );
}

export default App;
