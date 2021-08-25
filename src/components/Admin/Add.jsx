import { Button, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto',
        marginTop: '-604px',
        position: 'absolute',
        marginLeft: '470px',
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
            marginLeft: '50px'
        }
    },
    wal: {
        position: 'relative',
        width: '1404px',
        height: '720px',
        backgroundColor: '#573ba3',
    }
}))

const Add = () => {
    const classes = useStyles()
    let history = useHistory()
    const [values, setValues] = useState({
        title: '',
        image: '',
        price: '',
        type: '',
        description: '',
        coments: []
    })

    const { addProduct } = useContext(productContext)

    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        if (!values.image) values.image = "https://data.whicdn.com/images/322210088/original.png"
        addProduct(values)
        history.push('/')
    }

    return (
        <div>
            <Paper className={classes.wal}>
                <img style={{
                    width: '1404px',
                    height: '720px',
                }}
                    src="https://wallpaper.dog/large/238738.png" />
                <Paper style={{ backgroundColor: 'transparent' }} elevation={3} className={classes.paper}>
                    <h1 style={{ textAlign: 'center' }}>Add product</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around', color: 'black' }}>
                        <div>
                            {/* <img style={{ width: '400px', marginLeft: '20px' }} src={values.image ? values.image : "https://data.whicdn.com/images/322210088/original.png"} /> */}
                        </div>

                        <div
                            style={{
                                width: '450px',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                            <form className={classes.root} noValidate autoComplete='off'>
                                <TextField name='title' onChange={handleInp} value={values.title} variant='outlined' label='Title' />
                                <TextField name='image' onChange={handleInp} value={values.image} variant='outlined' label='Image' />
                                <TextField name='type' onChange={handleInp} value={values.type} variant='outlined' label='Type' />
                                <TextField name='price' onChange={handleInp} value={values.price} variant='outlined' label='Price' />
                                <TextField name='description' onChange={handleInp} value={values.description} variant='outlined' label='Description' />
                            </form>
                            <Link to={'/list'}>
                                <IconButton aria-label='share' onClick={handleSave}>
                                    <Button variant="contained" color="secondary" style={{ backgroundColor: '#573ba3' }}>Add</Button>
                                </IconButton>
                            </Link>
                        </div>
                    </div>
                </Paper>
            </Paper>
        </div>
    );
};

export default Add;