// Funktionaalista ohjelmointia

// Hyvä tyyli:
// Tila tulee ulkopuolelta, sillä se on uudelleenkäytettävää

require('./client.css');
// require ('puuppa')(pokale);
// Käytetään moduulijärjestelmää

// Näitä haetaan nodemodulesista automaattisesti
import React from 'react';
import ReactDOM from 'react-dom';

//
import { Router, Route, Link, IndexRoute } from 'react-router'

// Omat moduulit
// moduulit, joita ei haeta node_modules:sta
import HelloWorld from './components/helloWorld';
import MegaCounterizer from './components/megaCounterizer';
import Greeter from './components/greeter';
import Counterizer from './components/counterizer';
import Index from './components/index';
import HelloWorldApp from './components/helloWorldApp';

// Kutsuu apista asioita
/*function getTussit() {
    return axios.get('/api/tussi').then((response) => {
        return response.data;
    });
}*/

/*const MainContent = React.createClass({

    getInitialState: function() {
        return{
            count: 0,
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
}); */

/*
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
*/

/*
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
*/

/*const Greeter = React.createClass({
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
*/

/*
const Index = React.createClass({
    render: function() {
        const { count, names, onIncrementCounter } = this.props;

        return(
            <div>
                {names.map((name,i) =>
                    <HelloWorld key={i} name={name}/>
                )}
                <Counterizer {...this.props}/>
                <MegaCounterizer count={count}/>
            </div>
        )
    }
});
*/

/*************************
**************** Testailua
**************************

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

**************************/

// Sisältää ankkurihistorian
// ks. indexroute (simopot)
const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index}/>
            <Route path="hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

// Aaltosulkeet JSX-notaatiota
// Ei siis object literal
ReactDOM.render(
    routes,
    document.getElementById('app')
);
