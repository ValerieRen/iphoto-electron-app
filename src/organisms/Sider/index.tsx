import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Routes } from "../../models";

interface SiderProps {
  routes: Routes[];
  title: string;
}

const Sider = ({ title, routes }: SiderProps) => {
  const classes = useStyles();
  const dense = true;
  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <div className={classes.list}>
          <List dense={dense}>
            {routes.map((route, index) => (
              <ListItem key={index} className={classes.item}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <Link to={`${route.path}`} replace>
                  <ListItemText
                    primary={route.primaryText}
                    className={classes.itemText}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(2, 0, 0),
    },
    list: {},
    item: {
      flexDirection: "row",
    },
    itemText: {
      textDecorationColor: theme.palette.primary.main,
      textDecorationLine: "none",
    },
  })
);

export default Sider;
