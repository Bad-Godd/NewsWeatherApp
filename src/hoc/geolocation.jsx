import { useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

export default function GetCurrentLocationExample() {
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setPosition(JSON.stringify(pos));
      },
      { enableHighAccuracy: true }
    );
  };

  const [position, setPosition] = useState(null);

  return (
    <div>
        <span>Current position:{position}</span>
        <button onClick={getCurrentPosition}></button>
    </div>
  );
}


