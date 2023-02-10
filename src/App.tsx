import React from 'react';
import './App.css';
import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import MainContainer from './components/MainContainer';

const items = ["Fleedwood Mac","Discover Weekly","Slow Jams","Liked from radio","Billboard Hot 100", "Rock Hits"]

function App() {
  return (
    <div className="App bg-gray-800">
      <header className="App-header">
      </header>
      <div className="flex">
        <SideBar items={items}/>
      <div className="w-full">
        <NavBar/>
        <MainContainer/>
      </div>
      </div>
    </div>
  );
}

export default App;
