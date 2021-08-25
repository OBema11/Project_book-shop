// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { useContext } from 'react';
// import { authContext } from '../../contexts/AuthContext';
// import { useHistory, Link } from 'react-router-dom';
// import { Paper } from '@material-ui/core';

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginTop: '90px',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: '#573ba3',
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(3),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//         backgroundColor: '#573ba3'
//     },
//     reg: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundSize: "cover!important",
//         backgroundPosition: "center!important"
//     }
// }));

// export default function Register() {
//     const classes = useStyles();
//     const history = useHistory();

//     const { registerUser } = useContext(authContext)


//     return (
//         <Paper style={{ background: "url(https://wallpaper.dog/large/238738.png) no-repeat" }} className={classes.reg} >
//             <Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '550px', backgroundColor: 'transparent' }}>
//                 <Container component="main" maxWidth="xs">
//                     <CssBaseline />
//                     <div className={classes.paper}>
//                         <Avatar className={classes.avatar}>
//                             <LockOutlinedIcon />
//                         </Avatar>
//                         <Typography component="h1" variant="h5">
//                             Sign up
//                         </Typography>
//                         <form onSubmit={(e) => registerUser(e, history)} className={classes.form} noValidate>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         autoComplete="fname"
//                                         name="firstName"
//                                         variant="outlined"
//                                         required
//                                         fullWidth
//                                         id="firstName"
//                                         label="First Name"
//                                         autoFocus
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         variant="outlined"
//                                         required
//                                         fullWidth
//                                         id="lastName"
//                                         label="Last Name"
//                                         name="lastName"
//                                         autoComplete="lname"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         variant="outlined"
//                                         required
//                                         fullWidth
//                                         id="email"
//                                         label="Email Address"
//                                         name="email"
//                                         autoComplete="email"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         variant="outlined"
//                                         required
//                                         fullWidth
//                                         name="password"
//                                         label="Password"
//                                         type="password"
//                                         id="password"
//                                         autoComplete="current-password"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <FormControlLabel
//                                         control={<Checkbox value="allowExtraEmails" style={{ color: '#573ba3' }} />}
//                                         label="I want to receive inspiration, marketing promotions and updates via email."
//                                     />
//                                 </Grid>
//                             </Grid>
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 color="primary"
//                                 className={classes.submit}
//                             >
//                                 Sign Up
//                             </Button>
//                             <Grid container justifyContent="flex-end">
//                                 <Grid item>
//                                     <Link to='/login' variant="body2">
//                                         Already have an account? Sign in
//                                     </Link>
//                                 </Grid>
//                             </Grid>
//                         </form>
//                     </div>
//                     <Box mt={5}>
//                         <Copyright />
//                     </Box>
//                 </Container>
//             </Paper>
//         </Paper>
//     );
// }



















import { Grid, makeStyles, Paper } from "@material-ui/core"
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const useStyles = makeStyles((theme) => ({
    size: {
        width: '500px',
        height: '350px',

    },
    grid: {
        height: '500px'
    },
    color: {
        color: '#573ba3',
        textDecoration: 'none'
    },
    btn: {

        width: '400px',
        height: '25px',
        marginTop: '3px',
        border: 0
    },
    reg: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover!important",
        backgroundPosition: "center!important"
    }
}))

const Signup = () => {
    const classes = useStyles()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/login")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <Paper style={{ background: "url(https://wallpaper.dog/large/238738.png) no-repeat" }} className={classes.reg}>
            <Grid className={classes.grid} style={{ display: 'flex', marginTop: '100px' }} >
                <Grid container alignItems="center" align="center" justify="center">
                    <Card className={classes.size}>
                        <Card.Body>
                            <h2 className="text-center mb-4" style={{ color: "#573ba3" }}>Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>
                                <Button disabled={loading} className={classes.btn} type="submit" style={{ color: "white", backgroundColor: "#573ba3" }} >
                                    Sign Up
                                </Button>
                            </Form>
                        </Card.Body>
                        <div className="w-100 text-center mt-2">
                            Already have an account? <Link className={classes.color} to="/login">Log In</Link>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default Signup;