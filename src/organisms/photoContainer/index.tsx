import React from "react";
import Container from "../container";

const PhotoContainer = () => {
    const handleOpenMap = () => {

    }

    const handleOpenGrid = () => {

    }
    const buttonList = [{name: 'Map', onClick: handleOpenMap}, {name: 'Grid', onClick: handleOpenGrid}];

    return (
        <Container buttonList={buttonList}>
            container
        </Container>
    );
}

export default PhotoContainer;
