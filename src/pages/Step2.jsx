import { useState } from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMarker = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}></Marker>
  );
};

const Step2 = () => {
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState(null);

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Input
          placeholder="Enter building address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker position={position} setPosition={setPosition} />
        </MapContainer>
        <Button colorScheme="blue" onClick={() => alert(`Address: ${address}, Position: ${position}`)}>
          Confirm Address
        </Button>
      </VStack>
    </Box>
  );
};

export default Step2;