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
        unpaddedNumber < 10 ? `0${unpaddedNumber}` : unpaddedNumber
    )

}

function Episode(props: IEpisode) {
    return (
        <div className="Episodes" key={props.id} id={`${props.id}`}>
            <div>
                <h1>{props.name} - S{padEpisode(props.season)} E{padEpisode(props.number)}</h1>
                <img src={props.image.medium} alt={props.summary} />
                <p>{props.summary}</p>
            </div>

        </div>
    );
};

function selectEpisode(props: IEpisode) {
    return (<option value={props.id} key={props.id}>S{padEpisode(props.season)}E{padEpisode(props.number)} - {props.name}</option>)
}

function scrollingToEpisode(event: React.ChangeEvent<HTMLSelectElement>) {
    //console.log(event.target.value)
    const element = document.getElementById(`${event.target.value}`);
    element?.scrollIntoView()
}


//EpisodeList returns the input textbox and a list of episodes
function EpisodeApp() {


    //onChange related stuff
    const [userInput, setUserInput] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value)
    }





    //filter stuff!
    function checkEpisodes(episode: IEpisode) {
        let lowerCaseName = episode.name.toLowerCase();
        let lowerCaseSummary = episode.summary.toLowerCase();
        let lowerCaseUserInput = userInput.toLowerCase();
        return lowerCaseName.includes(lowerCaseUserInput) || lowerCaseSummary.includes(lowerCaseUserInput);
    }


    let filteredEpisodes = episodes.filter(checkEpisodes)
    let episodeList = filteredEpisodes.map(Episode)

    return <div>
    <div className="input-block">
        <select onChange={scrollingToEpisode}>{episodes.map(selectEpisode)}</select>
        <input value={userInput} onChange={handleChange} />
        <p>Displaying {filteredEpisodes.length}/{episodes.length} episodes</p>
    </div>
        {episodeList}
    </div>
}

//

export default EpisodeApp;