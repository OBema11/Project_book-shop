import React, { useContext, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Paper, makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        marginRight: '20px',
        marginBottom: '20px',
        minWidth: '170px',
        maxWidth: '350px',
        marginTop: '-70px',
        width: '200px',
        height: '360px'
    }
}))

const Filter = () => {
    const history = useHistory()
    const classes = useStyles()
    const { getProducts } = useContext(productContext)
    const [type, setType] = useState(getType())
    const [price, setprice] = useState(getPrice())

    function getPrice() {
        const search = new URLSearchParams(history.location.search)
        return search.get('price_lte')
    }

    function getType() {
        const search = new URLSearchParams(history.location.search)
        return search.get('type')
    }

    const handleChangePrice = (event, value) => {
        const search = new URLSearchParams(history.location.search)
        search.set('price_lte', value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setprice(value)
    }

    const handleChangeType = (event) => {
        if (event.target.value === 'all') {
            history.push(`${history.location.pathname.replace('type')}`)
            getProducts(history)
            setType(event.target.value)
            return
        }
        const search = new URLSearchParams(history.location.search)
        search.set('type', event.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setType(event.target.value)
    }

    const handleDrop = () => {
        history.push(`${history.location.pathname.replace('type')}`)
        history.push(`${history.location.pathname.replace('price_lte')}`)
        getProducts(history)
        setType(getType())
        setprice(getPrice())
    }

    return (
        <Grid item md={3}>
            <Paper elevation={2} className={classes.paper} style={{
                background: "url(https://wallpaper.dog/large/238738.png) no-repeat",
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover!important",
                backgroundPosition: "center!important"
            }}>
                <FormControl component="fieldset">
                    <FormLabel style={{ fontWeight: '600', marginBottom: '10px' }} component="legend">GENRES</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={type} onChange={handleChangeType}>
                        <FormControlLabel value="Novel" control={<Radio />} label="Novel" />
                        <FormControlLabel value="Horror" control={<Radio />} label="Horror" />
                        <FormControlLabel value="Romance" control={<Radio />} label="Romance" />
                        <FormControlLabel value="Fantasy" control={<Radio />} label="Fantasy" />
                        <FormControlLabel value="Detective" control={<Radio />} label="Detective" />
                        <FormControlLabel value="History" control={<Radio />} label="History" />
                    </RadioGroup>
                </FormControl>

                <Grid>
                    <Slider
                        value={price}
                        onChange={handleChangePrice}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        min={0}
                        max={5000}
                        color='#573ba3'
                    />
                    <Button variant='outlined' style={{ color: '#573ba3' }} onClick={handleDrop} >Drop</Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Filter;