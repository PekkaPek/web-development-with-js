import React from 'react';

const SearchBar = React.createClass({
    render: function() {
        return(
            <form>
                <input id="searchElement" type="text" placeholder="Search a movie"/>
            </form>
        );
    }
});

export default SearchBar;
