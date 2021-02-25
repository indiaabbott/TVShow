import React, { useState } from "react"
import episodes from '../episodes.json'


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


function padEpisode(unpaddedNumber: number) {
    return (
        unpaddedNumber < 10 ? `0${unpaddedNumber}`:unpaddedNumber
    )

}

function Episode(props: IEpisode) {
    return (
        <div className="Episodes">
            <div key={props.id}>
                <h1>{props.name} - S{padEpisode(props.season)} E{padEpisode(props.number)}</h1>
                <img src={props.image.medium} alt={props.summary} />
                <p>{props.summary}</p>
            </div>
            
        </div>
    );
};

function EpisodeList() {

    const [userInput, setUserInput] = useState("");

    function printUserInput (event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value)

    }

    function filterEpisodes (episode: IEpisode) {
        let nameCheck = episode.name.toLowerCase().includes(userInput.toLowerCase());
        let summaryCheck = episode.summary.toLowerCase().includes(userInput.toLowerCase());
        return nameCheck || summaryCheck

    }
    let throneEpisodes = episodes.filter(filterEpisodes)
    return <div>
        <input value={userInput} onChange={printUserInput}/>
        {throneEpisodes.map(Episode)}</div>
}

//

export default EpisodeList;