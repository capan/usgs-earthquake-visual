/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import * as MapboxGL from 'mapbox-gl';
import Lottie from 'react-lottie';
import './App.css';
import SplitScreen from './Components/SplitScreen';
import EventCardsHolder from './Components/EventCardsHolder';
import EventCard from './Components/EventCard';
import * as animationData from './Extras/loading.json';


const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoicmFnZWFnYWluc3R0aGVtYWNoaW5lIiwiYSI6ImNqcjh1dXAzZzBhNm40NWw4M2owMTA5aHMifQ.Bk987UmMmjAQbboX2PAHwA',
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geojsonLayer: null,
      startDate: null,
      endDate: null,
      mapCenter: [32.836386, 39.924712],
      mapZoom: [6],
      geojsonData: null,
    };
    this.mapRef = React.createRef();
    this.requestMaker = this.requestMaker.bind(this);
    this.markerGenerator = this.markerGenerator.bind(this);
    this.onCardMouseOver = this.onCardMouseOver.bind(this);
    this.onDragEndHandler = this.onDragEndHandler.bind(this);
    this.onZoomEndHandler = this.onZoomEndHandler.bind(this);
    this.onStyleLoadHandler = this.onStyleLoadHandler.bind(this);
    this.defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  }

  componentWillMount() {
    let sixMonthsBefore = new Date();
    let today = new Date();
    sixMonthsBefore.setMonth(today.getMonth() - 6);
    today = today.toISOString();
    sixMonthsBefore = sixMonthsBefore.toISOString();
    this.setState({
      startDate: sixMonthsBefore,
      endDate: today,
    });
  }

  componentDidMount() {
    this.requestMaker(this.mapRef, this.state.startDate, this.state.endDate);
  }

  onZoomEndHandler(e) {
    const { lat, lng } = e.getCenter();
    const zoom = e.getZoom();
    this.setState({
      mapCenter: [lng, lat],
      mapZoom: [zoom],
    });
    this.requestMaker(this.mapRef, this.state.startDate, this.state.endDate);
  }

  onDragEndHandler(e) {
    const { lat, lng } = e.getCenter();
    const zoom = e.getZoom();
    this.setState({
      mapCenter: [lng, lat],
      mapZoom: [zoom],
    });
    this.requestMaker(this.mapRef, this.state.startDate, this.state.endDate);
  }

  onStyleLoadHandler(mapInstance) {
    // let hoveredStateId = null;
    this.requestMaker(mapInstance, this.state.startDate, this.state.endDate);
    // debugger
    // if (!this.mapRef.current) {
    //   this.mapRef.state.map.on('mousemove', 'mygeolayer', (e) => {
    //     if (e.features.length > 0) {
    //       if (hoveredStateId) {
    //         this.mapRef.setFeatureState(
    //           { source: 'mygeolayer', id: hoveredStateId },
    //           { hover: false },
    //         );
    //       }
    //       hoveredStateId = e.features[0].id;
    //       this.mapRef.setFeatureState(
    //         { source: 'mygeolayer', id: hoveredStateId },
    //         { hover: true },
    //       );
    //     }
    //   });
    // }
  }

  onCardMouseOver(e) {
    this.mapRef.props.children.props.circlePaint['circle-color'] = 'blue';
  }

  async requestMaker(mapInstance, startTime, endTime) {
    if (mapInstance.state && mapInstance.state.ready) {
      const bounds = mapInstance.state.map.getBounds();
      const queryPart = `starttime=${startTime}&endtime=${endTime}&minlatitude=${bounds._sw.lat}&maxlatitude=${bounds._ne.lat}&minlongitude=${bounds._sw.lng}&maxlongitude=${bounds._ne.lng}`;
      const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&${queryPart}`;
      const data = await fetch(url);
      const dataJson = await data.json();
      this.markerGenerator(dataJson);
    }
  }

  markerGenerator(coordinateList) {
    MapboxGL.SymbolLayout = {
      'text-field': '{place}',
      'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
      'text-offset': [0, 0.6],
      'text-anchor': 'top',
    };
    const symbolLayout = MapboxGL.SymbolLayout;
    MapboxGL.SymbolPaint = {
      'text-color': 'black',
    };
    const symbolPaint = MapboxGL.SymbolPaint;
    MapboxGL.CircleLayout = { visibility: 'visible' };
    const circleLayout = MapboxGL.CircleLayout;
    MapboxGL.CirclePaint = {
      'circle-color': 'rgba(255, 0, 0, 0.3)',
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        0, ['get', 'mag'],
        22, ['*', 10, ['get', 'mag']],
      ],
    };
    const circlePaint = MapboxGL.CirclePaint;
    const geojsonObject = {
      type: 'FeatureCollection',
      features: [],
    };
    for (let i = 0; i < coordinateList.features.length; i += 1) {
      geojsonObject.features.push(coordinateList.features[i]);
    }
    this.setState({
      geojsonLayer: <GeoJSONLayer
        id="mygeolayer"
        source="mygeolayer"
        key="GeoJSONLayerKey"
        data={geojsonObject}
        symbolLayout={symbolLayout}
        symbolPaint={symbolPaint}
        circleLayout={circleLayout}
        circlePaint={circlePaint}
        circleOnClick={this.onClickCircle}
      />,
      geojsonData: coordinateList,
    });
  }

  render() {
    let cards = null;
    if (this.state.geojsonData) {
      cards = this.state.geojsonData.features.map((feature) => (
        <EventCard
          onCardMouseOver={this.onCardMouseOver}
          detail={feature}
        />
      ));
    }
    return (
      <SplitScreen
        totalNumber={this.state.geojsonData ? this.state.geojsonData.features.length : 0}
        leftPane={this.state.geojsonData
          ? <EventCardsHolder>{cards}</EventCardsHolder> : (
            <Lottie
              options={this.defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}
            />
          )}
        rightPane={
          (
            <Map
              onStyleLoad={() => this.onStyleLoadHandler(this.mapRef)}
              ref={(map) => { this.mapRef = map; }}
              style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
              center={this.state.mapCenter}
              zoom={this.state.mapZoom}
              containerStyle={{
                height: '100vh',
                width: '50vw',
              }}
              onDragEnd={this.onDragEndHandler}
              onZoomEnd={this.onZoomEndHandler}
            >
              {this.state.geojsonLayer}
            </Map>
          )
        }
      />
    );
  }
}

export default App;
