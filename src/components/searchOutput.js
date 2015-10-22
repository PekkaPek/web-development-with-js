import React from 'react';

const SearchOutput = React.createClass({
    render: function() {
        // Otetaan hakustringit
        let searchedString = this.props.searchStrings;
        // Taulukko, johon laitetaan hakustinrgit ja li-tagit
        let taulukko = [];
        for(let key in searchedString) {
            taulukko.push(<li>{searchedString[key]}</li>);
        }
        return <ul>{taulukko}</ul>;
    }
});

export default SearchOutput;
