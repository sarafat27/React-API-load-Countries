import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h2 style={{ backgroundColor: 'black', padding: '10px' }}>country name: {props.name}</h2>
            <h4>population: {props.population}</h4>
            <h6>area: {props.area}</h6>
            <h6>region: {props.region}</h6>
        </div>
    );
};

export default Country;