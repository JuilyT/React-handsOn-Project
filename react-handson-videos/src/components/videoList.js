import React from 'react';
import VideoItem from './videoItem';

class videoList extends React.Component {

    onVideoItemSelect = (video) => {
        this.props.onVideoSelect(video);
    }

    render() {
        const videos = this.props.videos.map(video=>{
            return <VideoItem key={video.id.videoId} video={video} onVideoItemSelect = {this.onVideoItemSelect}/>
        });
        return <div className='ui relaxed divided list'>{videos}</div>
    }
}
export default videoList;