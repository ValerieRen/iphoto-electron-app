import React, { useEffect, useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile } from "@material-ui/core";
import { Image } from "../../models";

interface Props {
  images: Image[];
}

const ImageList = ({ images }: Props) => {
  const classes = useStyles();
  const [urls, setUrls] = useState<any[]>([]);

  useEffect(() => {
    images.map((image) => {
      import(`../../resource/${image.src}`).then((url) => {
        console.log(urls, url.default);
        setUrls([...urls, url.default]);
      });
    });
  }, []);
  // const handleOpenImage = (image: string) => {};

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {urls.map((url, index) => (
          <GridListTile key={index} cols={1}>
            <img src={url} />
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
    },
    gridList: {
      width: 500,
      height: 450,
    },
  })
);

export default ImageList;
