import React from 'react';

const Counterizer = React.createClass({
    render: function() {

        const { count, name, onIncrementCounter } = this.props;
        // Ei saa olla sulkeita incrementCounterissa
        // onCLick syö callbackin/funktion
        return (
            <div className="tussi">
                {count}
                {name}
                <button onClick={this.props.onIncrementCounter}>MOAR</button>
            </div>
        );
    },
});

export default Counterizer;
