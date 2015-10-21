import React from 'react';

const SearchOutput = React.createClass({
    render: function() {
        return(
            <div id="output">
                {this.props.SearchOutput}
            </div>
        );
    }
});

export default SearchOutput;
