import React, { ReactNode, useEffect, useState, memo } from "react";
import Container from "../container";
import { foldRemoteData, useGetImages } from "../../api";
import NoData from "../../common/NoData";
import Loader from "../../common/Loader";
import Failure from "../../common/Failure";
import ImageList from "../../atoms/ImageList";
import { fromLonLat } from "ol/proj";
import Map from "../../atoms/Map";
import MapControl from "../../atoms/Map/MapControl";
import MapFullScreenControl from "../../atoms/Map/MapFullScreenControl";
import MapLayers from "../../atoms/Map/MapLayers";
import MapTileLayer from "../../atoms/Map/MapTileLayer";
import * as olSource from "ol/source";
import MapMarkerLayer from "../../atoms/Map/MapMarkerLayer";
import { getCoordinatesByImages } from "../../utils/maps";

const PhotoContainer = () => {
  const [content, setContent] = useState<ReactNode | undefined>(null);
  const [center, setCenter] = useState<number[]>([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState<number>(9);
  const [imageRemoteData] = useGetImages();

  useEffect(() => {
    handleOpenMap();
  }, []);

  const handleOpenMap = () => {
    const getImageMarkers = foldRemoteData(
      imageRemoteData,
      () => <NoData />,
      () => <Loader />,
      (error) => <Failure error={error} />,
      (images) => {
        const coordinates = getCoordinatesByImages(images);
        return (
          // <MapMarkerLayer coordinates={coordinates} images={images} zIndex={0} />
          <div />
        );
      }
    );

    const map = (
      <div style={{ height: "90%" }}>
        <Map center={fromLonLat(center)} zoom={zoom}>
          <MapLayers>
            <MapTileLayer source={new olSource.OSM()} zIndex={1} />
            <MapMarkerLayer coordinate={center} zIndex={0} />
            {getImageMarkers}
          </MapLayers>
          <MapControl>
            <MapFullScreenControl />
          </MapControl>
        </Map>
      </div>
    );
    setContent(map);
  };

  const handleOpenGrid = () => {
    const grid = foldRemoteData(
      imageRemoteData,
      () => <NoData />,
      () => <Loader />,
      (error) => <Failure error={error} />,
      (images) => <ImageList images={images} />
    );
    setContent(grid);
  };

  const buttonList = [
    { name: "Map", onClick: handleOpenMap },
    { name: "Grid", onClick: handleOpenGrid },
  ];

  return <Container buttonList={buttonList}>{content}</Container>;
};

export default memo(PhotoContainer);
