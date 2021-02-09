import React, { ReactNode, useEffect, useState } from "react";
import Container from "../container";
import { foldRemoteData, useGetImages } from "../../api";
import NoData from "../../common/NoData";
import Loader from "../../common/Loader";
import Failure from "../../common/Failure";
import ImageList from "../../atoms/ImageList";

const PhotoContainer = () => {
  const [content, setContent] = useState<ReactNode | undefined>(null);
  const [imageRemoteData] = useGetImages();

  useEffect(() => {
    handleOpenMap();
  }, []);

  const handleOpenMap = () => {
    const map = <>map grid</>;
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

export default PhotoContainer;
