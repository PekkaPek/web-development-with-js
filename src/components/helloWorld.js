import React from 'react';
import { Link } from 'react-router';

// Luodaan muuttuja
// Otetaan React-classista funktio
const HelloWorld = React.createClass({
    // nimi täytyy olla render
    render: function() {
        // returnissa vain yksi div
        // linkkitys on tässä "huonommalla" tavalla
        return (
            <div>
                <Link to={`/hello/${this.props.name}`}>
                    Hello {this.props.name}
                </Link>
            </div>
            );
    }
});

export default HelloWorld;

// ota tänne api.getTussit();
