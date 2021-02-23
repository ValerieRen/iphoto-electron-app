import React, { ReactNode, useEffect, useState, memo } from "react";
import Container from "../container";

const PlaceContainer = () => {
  const [content, setContent] = useState<ReactNode | undefined>(null);

  useEffect(() => {
    handleOpenAll();
  }, []);

  const handleOpenYears = () => {
    const yearGrid = <>grid</>;
    setContent(yearGrid);
  };

  const handleOpenMonths = () => {
    const monthGrid = <>grid</>;
    setContent(monthGrid);
  };

  const handleOpenDays = () => {
    const dayGrid = <>grid</>;
    setContent(dayGrid);
  };

  const handleOpenAll = () => {
    const allGrid = <>all grid</>;
    setContent(allGrid);
  };

  const buttonList = [
    { name: "Years", onClick: handleOpenYears },
    { name: "Months", onClick: handleOpenMonths },
    { name: "Days", onClick: handleOpenDays },
    { name: "All Photos", onClick: handleOpenAll },
  ];

  return <Container buttonList={buttonList}>{content}</Container>;
};

export default memo(PlaceContainer);
