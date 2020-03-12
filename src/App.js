
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
import RangeSlider from './Components/RangeSlider';
import Switcher from './Components/Switcher';

debugger
const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geojsonLayer: null,
      startDate: null,
      endDate: null,
      // mapCenter: [35, 41],
      // mapZoom: [4.5],
      mapCenter: [36, 37.5],
      mapZoom: [10],
      geojsonData: null,
      dragSearch: true,
      bounds: undefined,
    };
    this.mapRef = React.createRef();

    // mapbox-gl doesn't work with Id's in string. We sould hash the incoming id from the API
    // eslint-disable-next-line no-bitwise
    this.hashCode = (s) => s.split('').reduce((a, b) => (((a << 5) - a) + b.charCodeAt(0)) | 0, 0);
    this.requestMaker = this.requestMaker.bind(this);
    this.onCardMouseOut = this.onCardMouseOut.bind(this);
    this.markerGenerator = this.markerGenerator.bind(this);
    this.onCardMouseOver = this.onCardMouseOver.bind(this);
    this.onDragEndHandler = this.onDragEndHandler.bind(this);
    this.onZoomEndHandler = this.onZoomEndHandler.bind(this);
    this.cardClickHandler = this.cardClickHandler.bind(this);
    this.onStyleLoadHandler = this.onStyleLoadHandler.bind(this);
    this.sliderChangeHandler = this.sliderChangeHandler.bind(this);
    this.earthQuakeHoverHandler = this.earthQuakeHoverHandler.bind(this);
    this.paginationChangeHandler = this.paginationChangeHandler.bind(this);
    this.defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    this.currentPage = undefined;
    this.pageLimit = undefined;
  }

  UNSAFE_componentWillMount() {
    let sixMonthsBefore = new Date();
    let today = new Date();
    sixMonthsBefore.setMonth(today.getMonth() - 6);
    sixMonthsBefore.setHours(0);
    sixMonthsBefore.setMinutes(0);
    sixMonthsBefore.setSeconds(0);
    sixMonthsBefore.setMilliseconds(0);
    today.setHours(23);
    today.setMinutes(59);
    today.setSeconds(59);
    today.setMilliseconds(999);
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
    this.requestMaker(mapInstance, this.state.startDate, this.state.endDate);
  }

  onCardMouseOver(e) {
    const { id } = e.target;
    if (id) {
      this.mapRef.state.map.setFeatureState(
        { source: 'mygeolayer', id },
        { hover: true },
      );
    }
  }

  onCardMouseOut(e) {
    const { id } = e.target;
    if (id) {
      this.mapRef.state.map.setFeatureState(
        { source: 'mygeolayer', id },
        { hover: false },
      );
    }
  }

  paginationChangeHandler(paginationData) {
    this.currentPage = paginationData.currentPage;
    this.pageLimit = paginationData.pageLimit;
  }

  switcherChangeHandler(state) {
    this.setState({
      dragSearch: !state,
    });
  }

  cardClickHandler(coords) {
    const [lat, lon] = coords;
    this.setState({
      mapCenter: [lat, lon],
      mapZoom: [10],
    });
  }

  sliderChangeHandler(e) {
    const [startDate, endDate] = e;
    if (this.state.startDate !== startDate || this.state.endDate !== endDate) {
      this.setState({
        startDate,
        endDate,
      }, () => this.requestMaker(this.mapRef, this.state.startDate, this.state.endDate));
    }
  }

  earthQuakeHoverHandler(e) {
    if (e.type === 'mouseenter') {
      this.setState({
        hoveredEQId: this.hashCode(e.features[0].properties.net + e.features[0].properties.code),
      });
      const el = document.getElementById(this.state.hoveredEQId);
      el.style.setProperty('box-shadow', '10px 10px 5px black');
    } else if (e.type === 'mouseleave') {
      const el = document.getElementById(this.state.hoveredEQId);
      el.style.removeProperty('box-shadow');
    }
  }

  async requestMaker(mapInstance, startTime, endTime) {
    if (mapInstance.state && mapInstance.state.ready) {
      let bounds;
      if (this.state.dragSearch) {
        bounds = mapInstance.state.map.getBounds();
        this.setState({
          bounds,
        });
      } else {
        bounds = this.state.bounds;
      }
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
    MapboxGL.CircleLayout = {
      visibility: 'visible',
    };
    const circleLayout = MapboxGL.CircleLayout;
    MapboxGL.CirclePaint = {
      'circle-color': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        'rgba(0, 0, 255, 0.8)',
        'rgba(255, 0, 0, 0.3)',
      ],
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        0, ['get', 'mag'],
        22, ['*', 11, ['get', 'mag']],
      ],
    };
    const circlePaint = MapboxGL.CirclePaint;
    const geojsonObject = {
      type: 'FeatureCollection',
      features: [],
    };
    for (let i = 0; i < coordinateList.features.length; i += 1) {
      geojsonObject.features.push(coordinateList.features[i]);
      geojsonObject.features[i].id = this.hashCode(coordinateList.features[i].id);
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
        circleOnMouseEnter={this.earthQuakeHoverHandler}
        circleOnMouseLeave={this.earthQuakeHoverHandler}
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
          onCardMouseOut={this.onCardMouseOut}
          detail={feature}
          onCardClick={this.cardClickHandler}
          key={Math.ceil(Math.random() * 10000000)}
        />
      ));
    }
    return (
      <SplitScreen
        totalNumber={this.state.geojsonData ? this.state.geojsonData.features.length : 0}
        leftPane={this.state.geojsonData
          ? (
            <EventCardsHolder
              totalRecords={this.state.geojsonData ? this.state.geojsonData.features.length : 0}
              pageChangeHandler={this.paginationChangeHandler}
              currentPage={this.currentPage}
              pageLimit={this.pageLimit}
            >
              {cards}
            </EventCardsHolder>
          ) : (
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
            <div>
              <div className="slider">
                <RangeSlider onSliderChange={this.sliderChangeHandler} />
              </div>
              <div className="switcher">
                <Switcher onSwitcherChanged={(state) => this.switcherChangeHandler(state)} />
              </div>
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
            </div>
          )
        }
      />
    );
  }
}

export default App;
