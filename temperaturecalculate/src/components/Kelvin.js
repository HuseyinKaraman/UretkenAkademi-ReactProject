import React, { Component } from 'react';

class Kelvin extends Component {

    celciusToKelvin = ()=>{
        return (this.props.temperature+ 273.15).toFixed(2);
    }

    render() {
        return (
            <h4>
                Kelvin  ({this.celciusToKelvin()} &#8490;)
            </h4>
        );
    }
}

export default Kelvin;