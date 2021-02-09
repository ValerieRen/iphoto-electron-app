import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile } from "@material-ui/core";
import { Image } from "../../models";

interface Props {
  images: Image[];
}

const ImageList = ({ images }: Props) => {
  const classes = useStyles();
  // const handleOpenImage = (image: string) => {};

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {images.map((image) => (
          <GridListTile key={image.id}>
            <img src={`${image.path}`} alt="" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

export default ImageList;
