import React, { useState, useEffect } from 'react';
import Ticker from 'react-ticker';

const GetEarthQuakeFromAPI = () => {
    const [data, setData] = useState(['Fetching significant earthquakes of last week!']);
    useEffect(() => {
        async function fetchData() {
            const rawDataFromAPI = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
            const jsonData = await rawDataFromAPI.json();
            const dataFeatures = jsonData.features.map((el) => (`Magnitude: ${el.properties.mag}  Location: ${el.properties.place} Time: ${new Date(el.properties.time).toLocaleString('tr-TR')}`));
            setData(dataFeatures);
        }
        if (data[0] === 'Fetching significant earthquakes of last week!') {
            fetchData();
        }
    }, []);
    return data ? (
        <p style={{ whiteSpace: 'nowrap' }}>
            {data.join(' 🔴 ')}
            {' '}
            🔴
            {' '}
        </p>
    ) : (
            <p style={{ visibility: 'hidden' }}>Loading last week data!</p>
        );
};

function EQTicker() {
    return (
        <Ticker offset="run-in" speed={5} mode="smooth">
            {() => <GetEarthQuakeFromAPI />}
        </Ticker>
    );
}

export default EQTicker;
