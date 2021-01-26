import React from "react";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import PrimaryList from "../../atoms/PrimaryList";
import {CATEGORY_LIBRARY_PHOTOS, CATEGORY_LIBRARY_PLACES, CATEGORY_LIBRARY_TITLE} from "../../constants/layout";
import { PhotoLibraryOutlined, PlaceOutlined } from '@material-ui/icons';

const list = [
    {
        icon: (<PhotoLibraryOutlined fontSize="small" color="primary" style={{ backgroundColor: 'white' }} />),
        primaryText: CATEGORY_LIBRARY_PHOTOS,
        path: "/photos",
    },
    {
        icon: (<PlaceOutlined fontSize="small" color="primary" style={{ backgroundColor: 'white' }} />),
        primaryText: CATEGORY_LIBRARY_PLACES,
        path: "/places",
    },
];

const Category = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
           <PrimaryList title={CATEGORY_LIBRARY_TITLE} list={list} dense={true} />
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

export default Category;
