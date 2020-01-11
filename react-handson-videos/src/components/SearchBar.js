import React from 'react';

class SearchBar extends React.Component {
    state = {term:''}

    onChange = (event) => {
        event.preventDefault();
        this.props.onSearchChange(this.state.term);
    }
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onChange}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={(e)=>{this.setState({term: e.target.value})}}></input>
                    </div>
                </form>
            </div>
        );   
    }
}
export default SearchBar;