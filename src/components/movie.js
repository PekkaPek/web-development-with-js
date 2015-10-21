import React from 'react';
import SearchBar from './searchBar';
import SearchOutput from './searchOutput';

const Movie = React.createClass({

    getInitialState: function() {
        return {
            searchString: 'Tahan tulee hakuteksti'
        };
    },

    stringChanger: function() {
        this.setState({
            searchString: this.state.searchString
        });
    },



    render: function() {
        return (
            <div className="movie">
                <h2>Movie site</h2>
                <img src="/home/user/web-development-with-js/src/assets/img" alt="Planes poster image"/>
                <SearchBar/>
                <button id="searchButton" onClick={this.stringChanger}>Search</button>
                <SearchOutput searchString={this.state.searchString}/>
            </div>
        );
    }
});

export default Movie;
