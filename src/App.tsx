import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import Category from "./organisms/categories";
import {Route, Switch} from "react-router-dom";
import PhotoContainer from "./organisms/photoContainer";
import PlaceContainer from "./organisms/placeContainer";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {PhotoLibraryOutlined, PlaceOutlined} from "@material-ui/icons";
import {CATEGORY_LIBRARY_PHOTOS, CATEGORY_LIBRARY_PLACES, CATEGORY_LIBRARY_TITLE} from "./constants/layout";

interface Props {}

const routes = [
    {
        path: "/",
        exact: true,
        main: <PhotoContainer />
    },
    {
        path: "/photos",
        icon: (<PhotoLibraryOutlined fontSize="small" color="primary" style={{ backgroundColor: 'white' }} />),
        primaryText: CATEGORY_LIBRARY_PHOTOS,
        main: <PhotoContainer />
    },
    {
        path: "/places",
        icon: (<PlaceOutlined fontSize="small" color="primary" style={{ backgroundColor: 'white' }} />),
        primaryText: CATEGORY_LIBRARY_PLACES,
        main: <PlaceContainer />
    },
    {
        path: "*",
        main: <div>404 Not found!</div>
    }

];

function App({}: Props) {
    const classes = useStyles();
    return (
    <div className="App">
        <Grid container spacing={3}>
            <Grid item xs={3} className={classes.nav}>
                <Category title={CATEGORY_LIBRARY_TITLE} routes={routes} />
            </Grid>
            <Grid item xs={9} className={classes.container}>
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
            </Grid>
        </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        nav: {
            height: window.screen.height,
            backgroundColor: theme.palette.background.default,
        },
        container: {
            height: window.screen.height,
            // backgroundColor: theme.palette.background.default,
        },
    }),
);

export default App;
