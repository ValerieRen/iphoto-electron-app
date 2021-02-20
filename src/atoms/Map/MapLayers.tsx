import React, { ReactNode } from "react";

interface LayerProps {
  children: ReactNode;
}

const MapLayers = ({ children }: LayerProps) => {
  return <div>{children}</div>;
};

export default MapLayers;
