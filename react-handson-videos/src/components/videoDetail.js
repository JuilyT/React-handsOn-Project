import React from 'react';

const videoDetails = (props) => {
    if(!props.video) {
        return <div>Loading...</div>
    }
    const {video} = props;
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}
export default videoDetails;