import React from 'react';

const SearchOutput = React.createClass({
    render: function() {
        return(
            <div id="output">
                {searchString}
            </div>
        );
    }
});

export default SearchOutput;
