import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { productContext } from '../../contexts/ProductsContext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import { calcTotalPrice } from '../../helpers/calcPrice';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    paper: {
        maxWidth: 1000,
        // width: '1404px',
        minWidth: '400px',
        margin: '40px auto',
        marginTop: '120px',
        backgroundColor: 'transparent',
    },
    title: {
        backgroundColor: '#573ba3'
    },
    paper3: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover!important",
        backgroundPosition: "center!important"
    }
});

const Cart = () => {
    const classes = useStyles()
    const { cart, getCart, changeProductCount, buy } = useContext(productContext)

    useEffect(() => {
        getCart()
    }, [])

    return (
        <Paper className={classes.paper3} >
            <TableContainer style={{ background: "url(https://wallpaper.dog/large/238738.png)" }} component={Paper} className={classes.paper}>
                <Table className={classes.table} aria-label="spanning table">
                    <TableHead>
                        <TableRow className={classes.title}>
                            <TableCell style={{ color: 'white' }}>Image</TableCell>
                            <TableCell style={{ color: 'white' }} align="right">Title</TableCell>
                            <TableCell style={{ color: 'white' }} align="right">Price</TableCell>
                            <TableCell style={{ color: 'white' }} align="right">Count</TableCell>
                            <TableCell style={{ color: 'white' }} align="right">SubPrice</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.products ? (
                            <>
                                {cart.products.map((elem) => (
                                    <TableRow key={elem.item.id}>
                                        <TableCell><img style={{ width: "50px" }} src={elem.item.image} alt={elem.item.title} /></TableCell>
                                        <TableCell align="right">{elem.item.title}</TableCell>
                                        <TableCell align="right">{elem.item.price}</TableCell>
                                        <TableCell align="right">
                                            <input
                                                type="number"
                                                value={elem.count}
                                                onChange={(e) => changeProductCount(e.target.value, elem.item.id)}
                                            />
                                        </TableCell>
                                        <TableCell align="right">{elem.subPrice}</TableCell>
                                    </TableRow>
                                ))}
                            </>
                        ) : (<h1>Loading...</h1>)}

                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}><Typography variant="h5">Total:</Typography></TableCell>
                            {
                                cart.products ? (
                                    <TableCell align="right"><Typography variant="h5">{calcTotalPrice(cart.products)}</Typography></TableCell>
                                ) : (null)
                            }
                        </TableRow>
                        <TableRow >
                            <Link to='/payment' style={{ textDecoration: 'none' }}><TableCell colSpan={3} align="right">
                                <Button onClick={buy} variant="contained" style={{ color: 'white', backgroundColor: '#573ba3' }}> BUY</Button>
                            </TableCell></Link>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
export default Cart;