import {combineReducers} from 'redux';

const songListReducer = () => {
    return [
        {title:'Macrena', duration:'2:05'},
        {title: 'I want it that way', duration: '4:05'},
        {title: 'No scrubs', duration:'3:15'},
        {title:'All star', duration: '1:45'}
    ];
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type==='SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs : songListReducer,
    selectedSong : selectedSongReducer
})