import React from "react";
import {List, Grid, Typography, ListItem, ListItemText, ListItemIcon} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Library} from "../../models";
import {Link} from "react-router-dom";

interface Props {
    title: string;
    dense: boolean;
    list: Library[];
}

const PrimaryList = ({title, list, dense}: Props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
                {title}
            </Typography>
            <div className={classes.list}>
                <List dense={dense}>
                    {list.map( l => (
                        <ListItem className={classes.item}>
                            <ListItemIcon>
                                {l.icon}
                            </ListItemIcon>
                            <Link to={`/${l.path}`}>
                                <ListItemText primary={l.primaryText} className={classes.itemText} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Grid>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            margin: theme.spacing(2, 0, 1),
        },
        list: {

        },
        item: {
            flexDirection: 'row',
        },
        itemText: {
            textDecorationColor: theme.palette.primary.main,
            textDecorationLine: 'none',
        },
    }),
);

export default PrimaryList;
