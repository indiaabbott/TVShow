import React from 'react';
import './App.css';
import episodes from './episodes.json'

function App() {
  interface IEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    _links: { self: { href: string } };
  }
  return (
    <div className="App">
      <p>Hello World!!</p>
      <p>{episodes.length}</p>
      <p>{episodes[0].name}</p>
      <img src = {episodes[0].image.medium} />
    </div>
  );
}

export default App;
