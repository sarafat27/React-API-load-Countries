import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props)
    const { name, capital, area, region } = props.country
    return (
        <div className='country'>
            <h2 style={{ backgroundColor: 'black', padding: '10px' }}>Country name: {name.common}</h2>
            <h4>Capital: {capital}</h4>
            <h6>area: {area}</h6>
            <h6>Region: {region}</h6>
        </div>
    );
};

export default Country;