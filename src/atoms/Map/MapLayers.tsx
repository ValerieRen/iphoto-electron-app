import React, { ReactNode, memo } from "react";

interface LayerProps {
  children: ReactNode;
}

const MapLayers = ({ children }: LayerProps) => {
  return <div>{children}</div>;
};

export default memo(MapLayers);
