import React, { useState, useEffect } from 'react';

const Countries = () => {

    const [countries, getCountries] = useState({});

    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then( (response) => {
            console.log(response);
            console.log(response.json().then( (data) => {
                console.log(data); // TODO PROMISE REJECT/RESOLVE
            }));
        })
    })

    let handleClick = () => {
        console.log('getCountries');
    }

    return (
        <div>
            Select country: <select name="country" id="">
                <option value="afg">Afghanistan</option>
                <option value="usa">USA</option>
            </select>
            <button onClick={handleClick}>Get countries</button>
        </div>
    );
}

export default Countries;
