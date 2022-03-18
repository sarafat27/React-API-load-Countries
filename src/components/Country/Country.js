import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, area, region, flags } = props.country
    return (
        <div className='country'>
            <h2 style={{ backgroundColor: 'black', padding: '10px' }}>Country name: {name.common}</h2>
            <h4>Capital: {capital}</h4>
            <h6>area: {area}</h6>
            <h6>Region: {region}</h6>
            <img src={flags.png} alt="" />
        </div >
    );
};

export default Country;