import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Map, Source, Layer, useMap, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Lottie from 'lottie-react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import SplitScreen from './Components/SplitScreen';
import EventCardsHolder from './Components/EventCardsHolder';
import EventCard from './Components/EventCard';
import animationData from './Extras/loading.json';
import RangeSlider from './Components/RangeSlider';
import Switcher from './Components/Switcher';
import ButtonAppBar from './Components/Navbar';
import EQTicker from './Components/Ticker';

const muiTheme = createTheme();

const MAPBOX_TOKEN = import.meta.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// Hash function for IDs
const hashCode = (s) => s.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);

// Circle layer style for earthquakes
const circleLayer = {
  id: 'earthquake-circles',
  type: 'circle',
  source: 'earthquakes',
  paint: {
    'circle-color': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      '#459880',
      'rgba(255, 0, 0, 0.5)'
    ],
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['zoom'],
      0,
      ['get', 'mag'],
      22,
      ['*', 11, ['get', 'mag']]
    ],
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
};

// Symbol layer for place labels
const symbolLayer = {
  id: 'earthquake-labels',
  type: 'symbol',
  source: 'earthquakes',
  layout: {
    'text-field': ['get', 'place'],
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top',
    'text-size': 12
  },
  paint: {
    'text-color': 'black',
    'text-halo-color': 'white',
    'text-halo-width': 1
  }
};

function MapContent({ geojsonData, onHover, hoveredId }) {
  const { eqMap: mapObj } = useMap();
  const map = mapObj?.getMap();

  useEffect(() => {
    if (map && hoveredId != null) {
      map.setFeatureState({ source: 'earthquakes', id: hoveredId }, { hover: true });
      return () => {
        map.removeFeatureState({ source: 'earthquakes', id: hoveredId }, 'hover');
      };
    }
  }, [map, hoveredId]);

  const onMouseEnter = useCallback((e) => {
    if (e.features && e.features[0]) {
      onHover(e.features[0].id);
    }
  }, [onHover]);

  const onMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  if (!geojsonData) return null;

  // Process features to add numeric IDs
  const processedData = {
    ...geojsonData,
    features: geojsonData.features.map(f => ({
      ...f,
      id: hashCode(f.id)
    }))
  };

  return (
    <Source id="earthquakes" type="geojson" data={processedData} cluster>
      <Layer {...circleLayer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      <Layer {...symbolLayer} />
    </Source>
  );
}

export default function App() {
  const [viewport, setViewport] = useState({
    longitude: 36,
    latitude: 40,
    zoom: 5.2
  });
  const [geojsonData, setGeojsonData] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dragSearch, setDragSearch] = useState(true);
  const [bounds, setBounds] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize dates
  useEffect(() => {
    const today = new Date();
    const sixMonthsBefore = new Date();
    sixMonthsBefore.setMonth(today.getMonth() - 6);
    sixMonthsBefore.setHours(0, 0, 0, 0);
    today.setHours(23, 59, 59, 999);
    setStartDate(sixMonthsBefore.toISOString());
    setEndDate(today.toISOString());
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch earthquake data
  const fetchData = useCallback(async () => {
    if (!mapRef.current || !startDate || !endDate) return;

    const map = mapRef.current.getMap();
    let currentBounds;
    
    if (dragSearch) {
      currentBounds = map.getBounds();
      setBounds(currentBounds);
    } else {
      currentBounds = bounds;
    }

    if (!currentBounds) return;

    const query = `starttime=${startDate}&endtime=${endDate}` +
      `&minlatitude=${currentBounds.getSouth()}&maxlatitude=${currentBounds.getNorth()}` +
      `&minlongitude=${currentBounds.getWest()}&maxlongitude=${currentBounds.getEast()}`;
    
    try {
      const response = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&${query}`);
      const data = await response.json();
      setGeojsonData(data);
    } catch (error) {
      console.error('Error fetching earthquake data:', error);
    }
  }, [startDate, endDate, dragSearch, bounds]);

  // Fetch data when map loads or dates change
  useEffect(() => {
    if (mapLoaded && startDate && endDate) {
      fetchData();
    }
  }, [mapLoaded, startDate, endDate, fetchData]);

  const onMoveEnd = useCallback(() => {
    if (dragSearch) {
      fetchData();
    }
  }, [dragSearch, fetchData]);

  const onCardMouseOver = useCallback((id) => {
    setHoveredId(id);
  }, []);

  const onCardMouseOut = useCallback(() => {
    setHoveredId(null);
  }, []);

  const cardClickHandler = useCallback((coords) => {
    const [lon, lat] = coords;
    setViewport(prev => ({ ...prev, longitude: lon, latitude: lat, zoom: 10 }));
  }, []);

  const sliderChangeHandler = useCallback(([start, end]) => {
    setStartDate(start);
    setEndDate(end);
  }, []);

  const switcherChangeHandler = useCallback((state) => {
    setDragSearch(!state);
  }, []);

  // Generate event cards
  const cards = geojsonData?.features.map((feature) => (
    <EventCard
      onCardMouseOver={onCardMouseOver}
      onCardMouseOut={onCardMouseOut}
      detail={feature}
      onCardClick={cardClickHandler}
      key={feature.id}
    />
  ));

  if (screenWidth <= 800) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<!DOCTYPE html>
          <html>
              <head>
                  <title>Site is down for maintenance</title>
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <style type="text/css">
                      body { text-align: center; padding: 10%; font: 20px Helvetica, sans-serif; color: #333; }
                      h1 { font-size: 50px; margin: 0; }
                      article { display: block; text-align: left; max-width: 650px; margin: 0 auto; }
                      a { color: #dc8100; text-decoration: none; }
                      a:hover { color: #333; text-decoration: none; }
                      @media only screen and (max-width : 480px) {
                          h1 { font-size: 40px; }
                      }
                  </style>
              </head>
              <body>
                  <article>
                      <h1>This app is not mobile compatible yet.</h1>
                      <p>Please check back soon.</p>
                      <p>We apologize for any inconvenience.</p>
                      <img src="https://media0.giphy.com/media/7TtvTUMm9mp20/giphy.webp?cid=ecf05e47uq96gncozmeougz43cimvlyzb6am37154hbiucl6&rid=giphy.webp" alt="terminator ok"/>
                      <p id="signature">&mdash; <a href="mailto:[capanh@gmail.com]">[Huseyin]</a></p>
                  </article>
              </body>
          </html>`,
        }}
      />
    );
  }

  return (
    <ThemeProvider theme={muiTheme}>
    <div>
      <ButtonAppBar />
      <div>
        <SplitScreen
          totalNumber={geojsonData?.features.length || 0}
          leftPane={
            geojsonData ? (
              <EventCardsHolder
                totalRecords={geojsonData.features.length}
                pageChangeHandler={() => {}}
                currentPage={1}
                pageLimit={8}
              >
                {cards}
              </EventCardsHolder>
            ) : (
              <Lottie
                animationData={animationData}
                style={{ height: 400, width: 400 }}
                loop
                autoplay
              />
            )
          }
          rightPane={
            <div>
              <div className="flex-container">
                <div className="slider">
                  <RangeSlider onSliderChange={sliderChangeHandler} />
                </div>
                <div className="switcher">
                  <Switcher onSwitcherChanged={switcherChangeHandler} />
                </div>
              </div>
              <Map
                id="eqMap"
                ref={mapRef}
                {...viewport}
                onMove={evt => setViewport(evt.viewState)}
                onMoveEnd={onMoveEnd}
                onLoad={() => setMapLoaded(true)}
                style={{ height: '85vh', width: '75vw' }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken={MAPBOX_TOKEN}
                maxZoom={12}
                minZoom={5}
              >
                <MapContent 
                  geojsonData={geojsonData} 
                  onHover={setHoveredId}
                  hoveredId={hoveredId}
                />
              </Map>
            </div>
          }
        />
      </div>
      <EQTicker />
    </div>
    </ThemeProvider>
  );
}
