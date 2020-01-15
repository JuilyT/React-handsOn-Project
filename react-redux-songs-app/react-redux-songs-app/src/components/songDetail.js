import React from 'react';
import { connect } from 'react-redux';

const songDetail = ({song}) => {
    if(!song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>{song.title}</p>
            <br/>
            <p>{song.duration}</p>
        </div>
    );
}

const mapStatetoProps = (state)=> {
    return {song:state.selectedSong};
}

export default connect(mapStatetoProps)(songDetail);