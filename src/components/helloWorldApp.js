import React from 'react';
import api from '../api';

// objektiliteraali
const HelloWorldApp = React.createClass({

    // react kutsuu tätä
    // saa alkutilanteen
    getInitialState: function() {
        return {
            count: 0,
            name: 'Pekkis',
            names: []
        };
    },

    componentDidMount: function() {
        api.getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },

    render: function() {
        // array literaali
        const names = this.state.names;

        return(
            <div>
                <h1>Lusso</h1>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        names: this.state.names,
                        count: this.state.count,
                        onIncrementCounter: this.incrementCounter
                    }
                )}
            </div>
        );
    },

    incrementCounter: function() {
        // Tätä käytetään muuttamaan komponentin statea
        this.setState({
            count: this.state.count + 1
        });
    },
});

export default HelloWorldApp;

// config.dev.js
// Lisää: 'cheap-module-eval-source-map'
