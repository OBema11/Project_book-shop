import { Grid, Button, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import ComentsCard from './ComentsCard';
import { API } from '../../helpers/constants';
import { useAuth } from '../../contexts/AuthContext';
import { productContext } from '../../contexts/ProductsContext';


const useStyles = makeStyles((theme) => ({
    comentWindow: {
        width: 600,
        height: 300,
        border: 'solid 2px black',
        padding: 10,
        overflow: 'scroll'
    },
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    input: {
        width: 550
    }
}))
const Coments = () => {
    const classes = useStyles()
    const { currentUser } = useAuth()
    const { getProducts, detail, getDetail } = useContext(productContext)
    const [value, setValue] = useState('')
    const { id } = useParams()
    const [product, setProduct] = useState('')
    const [coment, setComent] = useState('')
    const handleInp = (e) => {
        let coment = {
            comment: e.target.value,
            user: currentUser.email
        }
        setComent(coment)
        setValue(e.target.value)
    }
    useEffect(() => {
        getDetail(id)
    }, [])
    const addComent = async () => {
        detail.comments.push(coment)
        setProduct(detail)
        const data = await axios.patch(`${API}/products/${id}`, product)
        setValue('')
    }

    // const dar = new Date(date,hours)
    // console.log(dar)
    return (
        <>

            <Grid style={{ marginTop: '100px' }} container justify="center">
                <Grid className={classes.comentWindow}>
                    {detail.comments ? (detail.comments.map((item) => (
                        <ComentsCard item={item} />
                    ))
                    ) : (
                        <div className={classes.root}>
                            <CircularProgress color="secondary" />
                        </div>
                    )}
                </Grid>
                <TextField value={value} className={classes.input} onChange={handleInp} />
                <Button onClick={() => addComent(product.id)}>Send</Button>
            </Grid>

        </>
    );
};

export default Coments;