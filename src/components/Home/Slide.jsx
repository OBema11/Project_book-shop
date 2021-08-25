import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from '@material-ui/core';

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
    ppp: {
        width: '451px',
        height: '650px',
    }
}));

export default function Slide() {
    const classes = useStyles();

    return (
        <>
            <div style={{ fontSize: '50px', fontWeight: '800', textAlign: 'center', backgroundColor: '#573ba3', color: 'white' }}>⚡️⚡️⚡️⚡️⚡️⚡️⚡️OUR BEST SELLERS⚡️⚡️⚡️⚡️⚡️⚡️⚡️</div>
            <div className={classes.root}>
                <Paper className={classes.ppp} elevation={0} >
                    <Link href='http://localhost:3000/detail/18'>
                        <img style={{
                            width: '451px',
                            height: '650px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                            src='https://images-na.ssl-images-amazon.com/images/I/81Eb4ewpYaS.jpg' ></img>
                    </Link>
                </Paper>
                <Paper className={classes.ppp} elevation={0} >
                    <Link href='http://localhost:3000/detail/33'>
                        <img style={{
                            width: '451px',
                            height: '650px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                            src='https://www.penguin.co.uk/content/dam/prh/books/188/188200/9780141355078.jpg'></img>
                    </Link>
                </Paper>
                <Paper className={classes.ppp} elevation={0} >
                    <Link href='http://localhost:3000/detail/34'>
                        <img style={{
                            width: '451px',
                            height: '650px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                            src='https://images-na.ssl-images-amazon.com/images/I/71WwqFIHqZL.jpg'></img>
                    </Link>
                </Paper>
            </div>
        </>
    );
}
