import React, { Component } from 'react';

class Celcius extends Component {
    render() {
        return (
            <h4>
                Celcius ({this.props.temperature} &#8451;)
            </h4>
        );
    }
}

export default Celcius;