import React from 'react';
import SearchOutput from './searchOutput';

const Movie = React.createClass({

    getInitialState: function() {
        return {
            searchString: 'Tahan tulee hakuteksti'
        };
    },

    setString: function() {
        console.log(this.state);
        // Otetaan input elementistä uusi arvo
        const newSearchString = this.refs.searchElementRef.value.trim();
        this.setState({
            searchString: newSearchString
        });
        console.log(this.state);
    },

    render: function() {
        return (
            <div className="movie">
                <div className="SearchMovie">
                    <h2>Movie site</h2>
                    <form className="searchForm">
                        <input id="searchElement" type="text" ref="searchElementRef" placeholder="Search a movie"/>
                        <button id="searchButton" onClick={this.setString}>Search</button>
                    </form>
                </div>
                <div className="latestSearches">
                    <h2>Latest searches</h2>
                    <SearchOutput searchString={this.state.searchString}/>
                </div>
            </div>
        );
    }
});

export default Movie;
