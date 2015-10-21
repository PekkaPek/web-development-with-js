import React from 'react';
import HelloWorld from './helloWorld';
import Counterizer from './counterizer';
import MegaCounterizer from './megaCounterizer';
import Movie from './movie';

const Index = React.createClass({
    render: function() {
        const { count, names, onIncrementCounter } = this.props;

        return(
            <div>
                {names.map((name,i) =>
                    <HelloWorld key={i} name={name}/>
                )}
                <Counterizer {...this.props}/>
                <Movie/>
                <MegaCounterizer count={count}/>
            </div>
        )
    }
});

export default Index;
