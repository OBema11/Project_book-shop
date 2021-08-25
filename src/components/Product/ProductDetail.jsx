import { IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';
import Coments from '../Coments/Coments';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        // margin: '40px auto',
        maxWidth: 1000,
        height: 'auto',
        margin: '100px'
    },
    paper1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover!important",
        backgroundPosition: "center!important"
    },
    text: {
        marginLeft: '120px'
    }
}))

const ProductDetail = () => {
    const { id } = useParams()
    const { detail, getDetail } = useContext(productContext)
    const classes = useStyles()

    useEffect(() => {
        getDetail(id)
    }, [])

    return (
        <Paper style={{ background: "url(https://wallpaper.dog/large/238738.png) no-repeat" }} className={classes.paper1} >
            <Paper style={{ backgroundColor: 'transparent' }} elevation={3} className={classes.paper}>
                <h1 style={{ textAlign: 'center', color: 'rgb(100, 84, 105)' }}>Detail</h1>
                {
                    detail ? (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <img style={{ width: '500px' }} src={detail.image} alt="" />
                            </div>
                            <div style={{
                                width: '450px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center'
                            }}>
                                <div className={classes.text}>
                                    <Typography style={{ fontSize: '40px', fontWeight: 600 }} variant='h3' gutterBottom>{detail.title}</Typography>
                                    <Typography variant='subtitle1' gutterBottom>{detail.type}</Typography>
                                    <Typography variant='h4' gutterBottom>{detail.price}</Typography>
                                    <Typography variant='body1' gutterBottom>{detail.description}</Typography>
                                </div>
                            </div>
                        </div>

                    ) : (<h1>Loading...</h1>)
                }
                <Coments />
            </Paper>
        </Paper>
    );
};
export default ProductDetail;