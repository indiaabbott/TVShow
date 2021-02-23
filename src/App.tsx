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
      {episodes.map((episode: IEpisode) => {
        return (<div key={episode.id}>
          <h1>{episode.name} - S{episode.season} E{episode.number}</h1>
          <img src = {episode.image.medium} alt={episode.summary} />
          <p>{episode.summary}</p>
          </div>
        )
      })}
      <p>The data has been obtained from <a href="https://tvmaze.com/">TVMaze.com</a></p>
    </div>
  );
}

export default App;
