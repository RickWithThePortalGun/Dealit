import { useEffect, useState } from "react";
import * as Location from "expo-location";
useEffect;
const useLocation = () => {
  useEffect(() => {
    getLocation();
  }, []);
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  return location;
};

export default useLocation;
