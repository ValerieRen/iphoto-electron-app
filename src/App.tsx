import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Sider from "./organisms/Sider";
import { Route, Switch } from "react-router-dom";
import PhotoContainer from "./organisms/photoContainer";
import PlaceContainer from "./organisms/placeContainer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { PhotoLibraryOutlined, PlaceOutlined } from "@material-ui/icons";
import {
  SIDER_LIBRARY_PHOTOS,
  SIDER_LIBRARY_PLACES,
  SIDER_LIBRARY_TITLE,
} from "./constants/layout";
import NoRoutePage from "./common/NoRoutePage";

const routes = [
  {
    path: "/",
    exact: true,
    main: <PhotoContainer />,
  },
  {
    path: "/photos",
    icon: (
      <PhotoLibraryOutlined
        fontSize="small"
        color="primary"
        style={{ backgroundColor: "white" }}
      />
    ),
    primaryText: SIDER_LIBRARY_PHOTOS,
    main: <PhotoContainer />,
  },
  {
    path: "/places",
    icon: (
      <PlaceOutlined
        fontSize="small"
        color="primary"
        style={{ backgroundColor: "white" }}
      />
    ),
    primaryText: SIDER_LIBRARY_PLACES,
    main: <PlaceContainer />,
  },
  {
    path: "*",
    main: <NoRoutePage />,
  },
];

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <Sider title={SIDER_LIBRARY_TITLE} routes={routes} />
      </div>
      <div className={classes.container}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={route.main}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    nav: {
      minWidth: "200px",
      maxWidth: "250px",
      height: window.screen.height,
      backgroundColor: theme.palette.background.default,
    },
    container: {
      flexGrow: 1,
      height: window.screen.height,
      overflow: "auto",
      justifySelf: "center",
    },
  })
);

export default App;
