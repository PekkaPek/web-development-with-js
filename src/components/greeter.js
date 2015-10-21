import React from 'react';

const Greeter = React.createClass({
    render: function() {
        // Katsotaan, mitä kaikkea on saatavilla
        console.log(this.props);
        // Käytetään console propsista namea
        const name = this.props.params.name;

        return (

            <h2>
                Helloo {name}
            </h2>
        );
    }
});

export default Greeter;
