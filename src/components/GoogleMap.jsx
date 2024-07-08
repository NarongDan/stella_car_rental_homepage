import { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const origin = {
  lat: 13.6924127259907, // ละติจูดของตำแหน่งที่ต้องการ
  lng: 100.75059081404096, // ลองจิจูดของตำแหน่งที่ต้องการ
};

function MapComponent({ center = origin }) {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  // สร้าง Marker เมื่อแผนที่โหลดเสร็จ
  const onLoad = (map) => {
    setMap(map);
    const marker = new window.google.maps.Marker({
      position: center,
      map: map,
      title: "My Marker",
    });
    setMarker(marker);
  };

  // ซูมเข้าไปยังตำแหน่งของ Marker เมื่อ Marker ถูกสร้าง
  useEffect(() => {
    if (map && marker) {
      map.panTo(marker.getPosition());
      map.setZoom(15); // ซูมเข้าไปใกล้มากขึ้น (ตัวอย่าง)
    }
  }, [map, marker]);

  // อัพเดตตำแหน่งของ Marker เมื่อ center เปลี่ยนแปลง
  useEffect(() => {
    if (marker) {
      marker.setPosition(center);
      map.panTo(center); // Optional: Move the map to the new center
    }
  }, [center, marker, map]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_API_GOOGLEMAPAPIKEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
      />
    </LoadScript>
  );
}

export default MapComponent;
