import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";

const Map = () => {
  const position = [47.9234174, 106.9324722];
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
  return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>i am here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
