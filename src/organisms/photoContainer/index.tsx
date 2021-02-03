import React, { ReactNode, useEffect, useState } from "react";
import Container from "../container";

const PhotoContainer = () => {
  const [content, setContent] = useState<ReactNode | undefined>(null);

  useEffect(() => {
    handleOpenMap();
  }, []);

  const handleOpenMap = () => {
    const map = <>map grid</>;
    setContent(map);
  };

  const handleOpenGrid = () => {
    const grid = <>grid</>;
    setContent(grid);
  };

  const buttonList = [
    { name: "Map", onClick: handleOpenMap },
    { name: "Grid", onClick: handleOpenGrid },
  ];

  return <Container buttonList={buttonList}>{content}</Container>;
};

export default PhotoContainer;
