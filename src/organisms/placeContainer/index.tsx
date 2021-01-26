import Container from "../container";
import React from "react";

const PlaceContainer = () => {
    const handleOpenYears = () => {

    }

    const handleOpenMonths = () => {

    }

    const handleOpenDays = () => {

    }

    const handleOpenAll = () => {

    }

    const buttonList = [
        {name: 'Years', onClick: handleOpenYears},
        {name: 'Months', onClick: handleOpenMonths},
        {name: 'Days', onClick: handleOpenDays},
        {name: 'All Photos', onClick: handleOpenAll}
    ];

    return (
        <Container buttonList={buttonList}>
            container
        </Container>
    );
};

export default PlaceContainer;
