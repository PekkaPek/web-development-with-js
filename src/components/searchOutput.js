import React from 'react';

const SearchOutput = React.createClass({
    render: function() {
        const searchedString = this.props.searchString;
        return(
            <div id="output">
                {searchedString}
            </div>
        );
    }
});

export default SearchOutput;
