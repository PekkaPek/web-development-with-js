import React from 'react';
import SearchOutput from './searchOutput';

const Movie = React.createClass({
    propTypes: {
        searchStrings: React.PropTypes.array.isrequired
    },

    getInitialState: function() {
        return {
            searchStrings: ['testileffas']
        };
    },

    setString: function() {
        console.log(this.state);
        // Otetaan input elementistä uusin hakustringi talteen hakukentästä
        let newSearchString = this.refs.searchElementRef.value.trim();
        // Otetaan taulukko vanhoista hauista
        let newArray = this.state.searchStrings.slice();
        // Lisätään uusi hakustingi
        newArray.push(newSearchString);
        newArray.reverse();

        // Päivitetään vanhojen hakujen tila
        this.setState({
            searchStrings: newArray
        });

        // Otetaan vanha haku pois inputista
        this.refs.searchElementRef.value = '';
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
                    <SearchOutput searchStrings={this.state.searchStrings}/>
                </div>
            </div>
        );
    }
});

export default Movie;
