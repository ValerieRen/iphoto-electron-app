import React, { ReactNode, memo } from "react";

interface ControlProps {
  children: ReactNode;
}

const MapControl = ({ children }: ControlProps) => {
  return <div>{children}</div>;
};

export default memo(MapControl);
