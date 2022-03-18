import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Going to travel different countries: {countries.length}</h1>
            {
                console.log(countries)
            }
            {
                countries.map(country => <Country name={country.name.common} population={country.population} area={country.area} region={country.region}></Country>)
            }
        </div>
    );
};

export default Countries;