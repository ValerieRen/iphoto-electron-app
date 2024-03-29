import React, { memo, useContext, useEffect } from "react";
import MapContext from "../../context/MapContext";
import Overlay from "ol/Overlay";
import { fromLonLat } from "ol/proj";
import OverlayPositioning from "ol/OverlayPositioning";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface MapMarkerProps {
  combo: any;
  zIndex?: number;
}

const MapMarkerLayer = ({ combo }: MapMarkerProps) => {
  const classes = useStyles();
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (!map) return;
    console.log("combo.coordinate", combo.coordinate);
    const marker = new Overlay({
      position: fromLonLat(combo.coordinate),
      positioning: OverlayPositioning.CENTER_CENTER,
      element: document.getElementById("marker") as HTMLElement,
      stopEvent: false,
    });

    map.addOverlay(marker);

    return () => {
      if (map) {
        map.removeOverlay(marker);
      }
    };
  }, [map]);

  return (
    <div id="marker">
      <img
        src="https://www.hdwallpaper.nu/wp-content/uploads/2015/07/Ocean-wave-stock-image_WEB.jpg"
        // src={`../resource/${combo.src}`}
        className={classes.parentImg}
      />
      {/*<img*/}
      {/*  src="https://www.technocrazed.com/wp-content/uploads/2015/12/HD-purple-wallpaper-image-to-use-as-background-121.jpg"*/}
      {/*  className={classes.childImg}*/}
      {/*/>*/}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    parentImg: {
      width: "55px",
      height: "55px",
      border: "1px solid white",
      borderRadius: "5px",
    },
    childImg: {
      position: "absolute",
      right: "5px",
      top: "5px",
      zIndex: -1,
      width: "55px",
      height: "55px",
      border: "1px solid white",
      borderRadius: "5px",
    },
  })
);

export default memo(MapMarkerLayer);
