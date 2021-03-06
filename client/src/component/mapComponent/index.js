/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

import PropTypes from 'prop-types';

import useStyles from './style';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const MapComponent = ({ mapInfo }) => {
  const classes = useStyles();
  const {
    geolocation: { lat, long, zoom },
  } = mapInfo;
  const mapContainer = useRef();
  const map = useRef();
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [long, lat],
      zoom,
      interactive: false,
    });
    new mapboxgl.Marker().setLngLat([long, lat]).addTo(map.current);
    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
    return () => {
      map.current.remove();
    };
  }, [lat, long, zoom]);
  return <div ref={mapContainer} className={classes.mapContainer} />;
};
MapComponent.propTypes = {
  mapInfo: PropTypes.shape({
    geolocation: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      long: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MapComponent;
