import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#573ba3',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    paper: {
        position: 'relative'
    },
    text: {
        marginTop: '230px',
        position: 'absolute',
        zIndex: '2',
        width: '500px',
    },
    mainText: {
        fontSize: '50px',
        fontWeight: 700,
        marginLeft: '150px',
        color: 'white',
        display: 'flex'
    },
    underText: {
        color: 'white',
        fontSize: '35px',
        fontWeight: 550,
        marginLeft: '150px',
    }
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <Grid>
            <div className={classes.root}>
                <Paper className={classes.paper} style={{
                    width: '1440px',
                    height: '800px',
                    marginTop: '73px'
                }} elevation={0} >
                    <img style={{
                        width: '1388px',
                        height: '800px',
                        borderRadius: '5px'
                    }} src='https://cdn.dribbble.com/users/3470483/screenshots/11306884/media/01dfa93b401427b712b0719478146348.jpg?compress=1&resize=1600x1200'></img>
                </Paper>
                <div className={classes.text}>
                    <h1 className={classes.mainText}> BOOKS ARE MAGIC ✨</h1>
                    <p className={classes.underText}>Let's take break for reading ❤️ </p>
                </div>
            </div>
        </Grid>
    );
}
