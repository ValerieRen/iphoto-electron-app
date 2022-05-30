import React, { useEffect, useState, memo } from "react";
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import { GridList, GridListTile, useMediaQuery } from "@material-ui/core";
import { ImageModel } from "../../models";

interface Props {
  images: ImageModel[];
}

const ImageList = ({ images }: Props) => {
  const theme = useTheme();
  const screenExtraLarge = useMediaQuery(theme.breakpoints.only("xl"));
  const screenLarge = useMediaQuery(theme.breakpoints.only("lg"));
  const screenMedium = useMediaQuery(theme.breakpoints.only("md"));
  const screenSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const screenExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));
  const screenNarrow = useMediaQuery("(max-width:340px)");

  const classes = useStyles();
  const [urls, setUrls] = useState<any[]>([]);

  useEffect(() => {
    images.map((image) => {
      import(`../../resource/${image.src}`).then((url) => {
        if (urls.indexOf(url.default) === -1) {
          setUrls((urls) => [...urls, url.default]);
        }
      });
    });
  }, []);
  // const handleOpenImage = (image: string) => {};

  const getGridListCols = () => {
    if (screenExtraLarge) {
      return 6;
    } else if (screenNarrow) {
      return 1;
    } else if (screenLarge) {
      return 5;
    } else if (screenMedium) {
      return 4;
    } else if (screenSmall) {
      return 3;
    } else if (screenExtraSmall) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={180}
        cols={getGridListCols()}
        spacing={15}
        className={classes.gridList}
      >
        {urls.length === 0 && <span>No Photos!</span>}
        {urls &&
          urls.length > 0 &&
          urls.map((url, index) => (
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
      width: "95%",
    },
  })
);

export default memo(ImageList);
