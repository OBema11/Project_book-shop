// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import { useContext } from 'react';
// import { authContext } from '../../contexts/AuthContext';
// import { useHistory, Link } from 'react-router-dom';

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
//     root: {
//         height: '100vh',
//     },
//     image: {
//         backgroundImage: 'url(https://cdn.dribbble.com/users/2140475/screenshots/15528887/media/6cb693316efc9d7da75e7416621c7101.jpg?compress=1&resize=1600x1200)',
//         // backgroundImage: 'url(https://source.unsplash.com/random)',
//         backgroundRepeat: 'no-repeat',
//         backgroundColor:
//             theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//     },
//     paper: {
//         margin: theme.spacing(8, 4),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginTop: '100px'
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: '#573ba3',
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

// export default function Login() {
//     const history = useHistory()
//     const classes = useStyles();

//     const { loginUser } = useContext(authContext)

//     return (
//         <Grid container component="main" className={classes.root}>
//             <CssBaseline />
//             <Grid item xs={false} sm={4} md={7} className={classes.image} />
//             <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                 <div className={classes.paper}>
//                     <Avatar className={classes.avatar}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign in
//                     </Typography>
//                     <form onSubmit={(e) => loginUser(e, history)} className={classes.form} noValidate>
//                         <TextField
//                             variant="outlined"
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="email"
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             autoFocus
//                         />
//                         <TextField
//                             variant="outlined"
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             autoComplete="current-password"
//                         />
//                         <FormControlLabel
//                             control={<Checkbox value="remember" style={{ color: '#573ba3' }} />}
//                             label="Remember me"
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             color="primary"
//                             className={classes.submit}
//                         >
//                             Sign In
//                         </Button>
//                         <Grid container>
//                             <Grid item xs>
//                                 {/* <Link href="#" variant="body2">
//                                     Forgot password?
//                                 </Link> */}
//                             </Grid>
//                             <Grid item>
//                                 <Link to='/register' variant="body2">
//                                     {"Don't have an account? Sign Up"}
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                         <Box mt={5}>
//                             <Copyright />
//                         </Box>
//                     </form>
//                 </div>
//             </Grid>
//         </Grid>
//     );
// }
















import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { Grid, makeStyles, Paper } from "@material-ui/core"
import { useAuth } from "../../contexts/AuthContext"
import { BorderColor } from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
    good: {
        // display: 'flex',
        height: '500px'
    }

}))

const Login = () => {
    const classes = useStyles()

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }
    console.log(currentUser.email)
    return (
        <Paper style={{ background: "url(https://wallpaper.dog/large/238738.png) no-repeat" }}>
            <Grid container justify="center" alignItems="center" style={{ color: "#573ba3", display: 'flex' }}>
                <Card className={classes.good} style={{ display: 'flex' }}>
                    <Card.Body style={{ justifyContent: 'center', alignItems: 'center', marginTop: '180px', marginLeft: '200px' }} >
                        <h2 className="text-center mb-4" style={{ color: "#573ba3", textAlign: 'center' }} >Log In</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Grid container justify="center" align="center">
                            <Form onSubmit={handleSubmit} >
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} type="submit" style={{ width: '300px', color: "white", backgroundColor: "#573ba3" }} >
                                    Log In
                                </Button>
                            </Form>
                        </Grid>
                        <div className="w-100 text-center mt-3" style={{ textAlign: 'center' }}>
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Card.Body>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </Card>
            </Grid>
        </Paper >
    )
}
export default Login;