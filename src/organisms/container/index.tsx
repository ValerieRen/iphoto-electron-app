import React, {ReactNode} from "react";
import Header from "../../atoms/Header";
import {HeaderButtons} from "../../models";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

interface Props {
    children: ReactNode;
    buttonList: HeaderButtons[];
}

const Container = ({children, buttonList}: Props) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
          <Grid item xs={12}>
              <div className={classes.header}>
                <Header buttonList={buttonList}/>
              </div>
          </Grid>
          <div>{children}</div>
      </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        header: {
            margin: theme.spacing(2, 0, 0),
            justifyContent: 'center',
        }
    }),
);

export default Container;
