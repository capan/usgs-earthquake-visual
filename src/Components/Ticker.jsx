import React, { useState, useEffect } from 'react';
import Ticker from 'react-ticker';
import './EventCard.scss';
import usgsSvg from '../Extras/usgs_logo.svg';

const GetEarthQuakeFromAPI = () => {
    const [data, setData] = useState(['⚡Fetching significant earthquakes of last week!⚡']);
    useEffect(() => {
        async function fetchData() {
            const rawDataFromAPI = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
            const jsonData = await rawDataFromAPI.json();
            const dataFeatures = jsonData.features.map((el) => (`Magnitude: ${el.properties.mag}  Location: ${el.properties.place} Time: ${new Date(el.properties.time).toLocaleString('tr-TR')}`));
            setData(dataFeatures);
        }
        if (data[0] === '⚡Fetching significant earthquakes of last week!⚡') {
            fetchData();
        }
    });
    return data ? (
        <h6 style={{ whiteSpace: 'nowrap' }}>
            {data.join(' ⚡ ')}
            {' '}
            ⚡
            {' '}
        </h6>
    ) : (
            <p style={{ visibility: 'hidden' }}>Loading last week data!</p>
        );
};

function EQTicker() {
    return (
        <div className="row">
            <div className="col-md-3" style={{ marginTop: '5px', textAlign: 'left' }}>
                <div className="row">
                    <div className="col-md-3">
                        <img alt="usgslogo" src={usgsSvg} height="100%" width="100%" />
                    </div>
                    <div className="col-md-9">
                        <p>
                            Significant earthquakes of the last week
                                <span role="img" aria-label="clock">🕙</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-9" style={{ marginTop: '10px' }}>
                <Ticker offset="run-in" speed={5} mode="smooth">
                    {() => <GetEarthQuakeFromAPI />}
                </Ticker>
            </div>
        </div>
    );
}

export default EQTicker;
