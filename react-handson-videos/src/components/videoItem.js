import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
    onVideoItemSelect = ()=> {
        this.props.onVideoItemSelect(this.props.video);
    }

    render() {
        const {snippet} = this.props.video;
        return (
            <div className='video-item item' onClick={this.onVideoItemSelect}>
                <img alt={snippet.title} className='ui image' src={snippet.thumbnails.medium.url}/>
                <div className='content'>
                    <div className='header'>{snippet.title}</div>
                </div>
            </div>
        );
    }
}
export default VideoItem;