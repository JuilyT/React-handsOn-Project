import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

class App extends React.Component {

    state = {videos:[],selectedVideo:null};

    componentDidMount() {
        this.onSearchChange('buildings');
    }
    
    onSearchChange = (term) => {
        youtube.get('/search', {
            params:{
                part:'snippet',
                maxresults:5,
                key:'AIzaSyDca5HeJk3xenbW4G-mx1nQJnd14plguwA',
                type:'videos',
                q: term
            }
        }).then(response => {
            this.setState({videos:response.data.items, selectedVideo:response.data.items[0]});
        });
    };

    onVideoSelect = (selectedVideo) => {
        this.setState({selectedVideo : selectedVideo});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchChange={this.onSearchChange}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video = {this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect = {this.onVideoSelect}/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;