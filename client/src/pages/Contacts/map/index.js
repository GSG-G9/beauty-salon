import React from 'react';

import MapComponent from '../../../component/mapComponent';

const mapInfo = {
  geolocation: { lat: 31.515646854025327, long: 34.45370767329849, zoom: 15 },
};
const Map = () => <MapComponent mapInfo={mapInfo} />;
export default Map;
