import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import { makeStyles, Typography } from '@material-ui/core';
import './Topbar.css';

const useStyles = makeStyles(theme => ({
    root: theme.mixins.toolbar,
    text: {
        padding: 15,
    }
}))

function TopBar() {

    const classes = useStyles();

    return(
        <div>
            <Appbar position="static" className={classes.root}>
                <Typography variant="h4" className={classes.text}>
                    Space News
                </Typography>
            </Appbar>
        </div>
    )
}

export default TopBar;