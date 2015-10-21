import React from 'react';

const MegaCounterizer = React.createClass({
    render: function() {
    // Ei saa olla sulkeita incrementCounterissa
    // onCLick syö callbackin/funktion
    return (
        <div className="megaTussi">
            {this.props.count}
        </div>
        );
    },
});

export default MegaCounterizer;
