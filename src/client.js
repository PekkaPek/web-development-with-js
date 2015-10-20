// Funktionaalista ohjelmointia

// Hyvä tyyli:
// Tila tulee ulkopuolelta, sillä se on uudelleenkäytettävää

require('./client.css');
// require ('puuppa')(pokale);
// Käytetään moduulijärjestelmää

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function getTussit() {
    return axios.get('/api/tussi').then((response) => {
        return response.data;
    });
}

// Luodaan muuttuja
// Otetaan React-classista funktio
const HelloWorld = React.createClass({
    // nimi täytyy olla render
    render: function() {
        // returnissa vain yksi div
        return (
            <div>Hello {this.props.name}
            </div>
            );
    }
});


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
        getTussit().then((data) => {
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
                {names.map(name => <HelloWorld name={name}/> )}

                <Counterizer
                    count={this.state.count}
                    onIncrementCounter={this.incrementCounter}/>
                <MegaCounterizer
                    count={this.state.count}
                    onIncrementCounter={this.incrementCounter}/>
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

// Huom ClassName
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

const losot = ['Panu', 'Panu2', 'Panu32'];
// taulukko tulee takaisin (muutettuna)
const laihdutetut = losot.map(loso => 'laihempi' + loso);

// reduce on mapin kaveri
// ottaa kokoilman, ja palauttaa yksi asia
const PanunPerhe = laihdutetut.reduce(
    (r, loso) => {
    return r + loso;
    },
    ''
);
// toinen reduce esimerkki
const luvut = [5, 7, 3, 6,2, 9];
const keskiarvo = luvut.reduce(
    (r, num) => {
    return r + num;
    // 0 on alkuarvo r:lle
    },
    0
);


console.log(PanunPerhe);


// Aaltosulkeet JSX-notaatiota
// Ei siis object literal
ReactDOM.render(
    <HelloWorldApp/>,
    document.getElementById('app')
);
