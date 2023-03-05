import React, { Component } from 'react';

class Fahrenheit extends Component {

    celciusToFahrenheit = ()=>{
        return (this.props.temperature *  1.8 + 32).toFixed(2);
    }

    render() {
        return (
            <h4>
                Fahrenheit  ({this.celciusToFahrenheit()} &#8457;)
            </h4>
        );
    }
}

export default Fahrenheit;