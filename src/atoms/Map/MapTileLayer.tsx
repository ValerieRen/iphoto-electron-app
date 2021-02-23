import { useContext, useEffect } from "react";
import MapContext from "../../context/MapContext";
import OLTileLayer from "ol/layer/Tile";

interface TileLayerProps {
  source: any;
  zIndex: number;
}

const MapTileLayer = ({ source, zIndex = 0 }: TileLayerProps) => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    const tileLayer = new OLTileLayer({
      source,
      zIndex,
    });

    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);

    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);

  return null;
};

export default MapTileLayer;
