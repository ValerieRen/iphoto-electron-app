import React, { ReactNode, useEffect, useState, memo } from "react";
import Container from "../container";
import { foldRemoteData, useGetImages, useGetImagesData } from "../../api";
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
import { getMovies } from "../../store/image/actions";
import { ImageModel } from "../../models";

const PhotoContainer = () => {
  const [content, setContent] = useState<ReactNode | undefined>(null);
  const [center, setCenter] = useState<number[]>([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState<number>(9);
  const [imageRemote] = useGetImages();
  const [imageRemoteData] = useGetImagesData();
  console.log("imageRemoteData", imageRemoteData);
  useEffect(() => {
    getMovies();
    handleOpenMap();
  }, []);

  const handleOpenMap = () => {
    const combos = getCoordinatesByImages(imageRemoteData);
    console.log("combos", combos);

    const getImageMarkers =
      combos.length > 0
        ? combos.map((combo, index) => {
            console.log("combo", combo);
            return <MapMarkerLayer combo={combo} />;
          })
        : null;

    const map = (
      <div style={{ height: "90%" }}>
        <Map center={fromLonLat(center)} zoom={zoom}>
          <MapLayers>
            <MapTileLayer source={new olSource.OSM()} zIndex={1} />
            {/*<MapMarkerLayer coordinate={center} zIndex={0} />*/}
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
      imageRemote,
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
