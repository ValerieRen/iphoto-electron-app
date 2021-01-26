import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Category from "../../organisms/categories";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import PhotoContainer from "../../organisms/photoContainer";
import PlaceContainer from "../../organisms/placeContainer";

const MainWindow = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Router>
                <Grid item xs={3} className={classes.nav}>
                   <Category />
                </Grid>
                <Grid item xs={9} className={classes.container}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={(props: any) => <PhotoContainer {...props} />}
                            // render={(props: any) => <PhotoContainer {...props} />}
                        />
                        <Route
                            exact
                            path="/photos"
                            // component={(props: any) => <PhotoContainer {...props} />}
                            render={(props: any) => <PhotoContainer {...props} />}
                        />
                        <Route
                            exact
                            path="/places"
                            // component={(props: any) => <PlaceContainer {...props} />}
                            render={(props: any) => <PlaceContainer {...props} />}
                        />
                    </Switch>
                </Grid>
            </Router>
        </Grid>
    );
};

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

export default MainWindow;
