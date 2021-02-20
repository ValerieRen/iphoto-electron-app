import React, { useContext, useEffect } from "react";
import { FullScreen } from "ol/control";
import MapContext from "../Map/MapContext";

const MapFullScreenControl = () => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    const fullScreenControl = new FullScreen({});

    map.controls.push(fullScreenControl);

    return () => map.controls.remove(fullScreenControl);
  }, [map]);

  return null;
};

export default MapFullScreenControl;
