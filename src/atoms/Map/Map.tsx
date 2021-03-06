import React, { useRef, useState, useEffect, ReactNode, memo } from "react";
import "./Map.css";
import MapContext from "../../context/MapContext";
import * as ol from "ol";

interface MapProps {
  children: ReactNode;
  zoom: any;
  center: any;
}

const Map = ({ children, zoom, center }: MapProps) => {
  const mapRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [map, setMap] = useState<any>(null);

  // on component mount
  useEffect(() => {
    const options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [],
    };

    const mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);

    return () => mapObject.setTarget(undefined);
  }, []);

  // zoom change handler
  useEffect(() => {
    if (!map) return;

    map.getView().setZoom(zoom);
  }, [zoom]);

  // center change handler
  useEffect(() => {
    if (!map) return;

    map.getView().setCenter(center);
  }, [center]);

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  );
};

export default memo(Map);
