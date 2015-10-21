// Funktionaalista ohjelmointia

// Hyvä tyyli:
// Tila tulee ulkopuolelta, sillä se on uudelleenkäytettävää

require('./client.css');
// require ('puuppa')(pokale);
// Käytetään moduulijärjestelmää

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//
import { Router, Route, Link } from 'react-router'

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
        // linkkitys on tässä "huonommalla" tavalla
        return (
            <Link to={`/hello/${this.props.name}`}>
                <div>Hello {this.props.name}
                </div>
            </Link>
            );
    }
});


// objektiliteraali
const HelloWorldApp = React.createClass({

    // react kutsuu tätä
    // saa alkutilanteen

    /*
    getInitialState: function() {
        return {
            count: 0,
            name: 'Pekkis',
            names: []
        };
    },
    */

    /*
    componentDidMount: function() {
        getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },
    */

    render: function() {
        // array literaali
        const names = this.state.names;

        return(
            <div>
                <h1>Lusso</h1>
                {names.map(name => <HelloWorld name={name}/> )}


                {this.props.children}
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

const MainContent = React.createClass({

    getInitialState: function() {
        return{
            count: 0,
            names: []
        };
    }

    componentDidMount: function() {
        getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    }

    render function() {
        const names = this.state.names;
        return(
            <Counterizer
                count={this.state.count}
                onIncrementCounter={this.incrementCounter}/>
            <MegaCounterizer
                count={this.state.count}
                onIncrementCounter={this.incrementCounter}/>
        );
    }
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

const Greeter = React.createClass({
    render: function() {
        // Katsotaan, mitä kaikkea on saatavilla
        console.log(this.props);
        // Käytetään console propsia
        const name = this.props.params.name;

        return (

            <h2>
                Helloo {name}
            </h2>
        );
    }
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

// Sisältää ankkurihistorian
const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <Route path="/" component={MainContent}></Route>
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

// Aaltosulkeet JSX-notaatiota
// Ei siis object literal
ReactDOM.render(
    routes,
    document.getElementById('app')
);
