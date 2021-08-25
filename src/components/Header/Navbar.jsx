// import React, { useContext } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import { alpha, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import { Badge, Button, FormControlLabel, FormGroup, Grid, Menu, MenuItem, Switch } from '@material-ui/core';
// import { AccountCircle } from '@material-ui/icons';
// import { useState } from 'react';
// import BurgerMenu from './BurgerMenu';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import { Link, useHistory } from 'react-router-dom';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { productContext } from '../../contexts/ProductsContext';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     art: {
//         backgroundColor: '#573ba3'
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//         display: 'none',
//         textDecoration: 'center',
//         [theme.breakpoints.up('sm')]: {
//             display: 'block',
//         },
//     },
//     text: {
//         flexGrow: 1,
//         display: 'flex',
//         color: 'white',
//         textUnderlinePosition: 'none',
//         textDecoration: 'center',
//         [theme.breakpoints.up('sm')]: {
//             display: 'block',
//         },
//     },
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: alpha(theme.palette.common.white, 0.15),
//         borderRadius: '19px',
//         '&:hover': {
//             backgroundColor: alpha(theme.palette.common.white, 0.25),
//         },
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(1),
//             width: 'auto',
//         },
//         marginRight: 580
//     },
//     searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             width: '12ch',
//             '&:focus': {
//                 width: '20ch',
//             },
//         },
//     },
// }));

// export default function Navbar() {
//     const classes = useStyles();
//     const [auth, setAuth] = useState(true);
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const { getProducts, cartLength, getCartLength, openSidebar, setBar } = useContext(productContext);
//     const [searchVal, setSearchVal] = useState(getSearchVal() || '');
//     const history = useHistory();

//     const handleChange = (event) => {
//         setAuth(event.target.checked);
//     };

//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     function getSearchVal() {
//         const search = new URLSearchParams(history.location.search)
//         return search.get('q')
//     };

//     const handleValue = (e) => {
//         const search = new URLSearchParams(history.location.search)
//         search.set('q', e.target.value)
//         history.push(`${history.location.pathname}?${search.toString()}`)
//         setSearchVal(e.target.value)
//         getProducts(history)
//     };

//     return (
//         <Grid>
//             <div className={classes.root}>
//                 <AppBar className={classes.art} position="fixed">
//                     <Toolbar>
//                         <IconButton
//                             edge="start"
//                             className={classes.menuButton}
//                             color="inherit"
//                             aria-label="open drawer"
//                         >
//                             <BurgerMenu />
//                         </IconButton>
//                         <Typography className={classes.title} variant="h6" noWrap>
//                             <img style={{
//                                 width: '50px',
//                                 height: '50px',
//                                 marginTop: '8px'
//                             }} src='https://image.flaticon.com/icons/png/512/867/867912.png'></img>
//                         </Typography>
//                         <Link to={'/'}>
//                             <Typography className={classes.text} variant="h6" noWrap >𝐁𝐨𝐨𝐤-𝐒𝐡𝐨𝐩</Typography>
//                         </Link>
//                         <div className={classes.search}>
//                             <div className={classes.searchIcon}>
//                                 <SearchIcon />
//                             </div>
//                             <InputBase
//                                 placeholder="Search…"
//                                 classes={{
//                                     root: classes.inputRoot,
//                                     input: classes.inputInput,
//                                 }}
//                                 inputProps={{ 'aria-label': 'search' }}
//                                 value={searchVal}
//                                 onChange={handleValue}
//                             />
//                         </div>

//                         <Link to="/cart" style={{ color: "white" }}>
//                             <IconButton aria-label="show 4 new mails" color="white">
//                                 <Button
//                                     href='/cart'
//                                     style={{ color: "white" }}
//                                 >
//                                     <Badge badgeContent={cartLength} color="secondary">
//                                         <ShoppingCartIcon />
//                                     </Badge>
//                                 </Button>
//                             </IconButton>
//                         </Link>

//                         <InstagramIcon style={{ marginRight: '20px' }} />
//                         {auth && (
//                             <div>
//                                 <IconButton
//                                     aria-label="account of current user"
//                                     aria-controls="menu-appbar"
//                                     aria-haspopup="true"
//                                     onClick={handleMenu}
//                                     color="inherit"
//                                 >
//                                     <AccountCircle />
//                                 </IconButton>
//                                 <Menu
//                                     id="menu-appbar"
//                                     anchorEl={anchorEl}
//                                     anchorOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                     keepMounted
//                                     transformOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                     open={open}
//                                     onClose={handleClose}
//                                 >
//                                     <MenuItem onClick={handleClose}>Profile</MenuItem>
//                                     <MenuItem onClick={handleClose}>My account</MenuItem>
//                                 </Menu>
//                             </div>
//                         )}
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         </Grid>
//     )
// }
















import React, { useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from 'react';
import { productContext } from '../../contexts/ProductsContext';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BurgerMenu from './BurgerMenu';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    art: {
        backgroundColor: '#573ba3'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        textDecoration: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        borderRadius: '19px',
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        marginRight: 580,
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '12ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    jew: {
        color: 'white'
    },
}));

export default function Navbar({ item }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const history = useHistory();
    const [searchVal, setSearchVal] = useState(getSearchVal() || '')
    const { getProducts, cartLength, getCartLength, openSidebar, setBar, bar, favoritesLength, getFavoritesLength } = useContext(productContext)
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleClick = () => {
        setBar(!bar)
    }

    function getSearchVal() {
        const search = new URLSearchParams(history.location.search)
        return search.get('q')
    }

    const handleValue = (e) => {
        const search = new URLSearchParams(history.location.search)
        search.set('q', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setSearchVal(e.target.value)
        getProducts(history)
    }

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const goSignIn = () => {
        history.push('/login')
        handleMenuClose()
    };

    const goSignUp = () => {
        history.push('/register')
        handleMenuClose()
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={goSignUp}>Registration</MenuItem>
            <MenuItem onClick={goSignIn}>Sign In</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar className={classes.art} position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleClick}
                    >
                        <img style={{
                            width: '50px',
                            height: '50px',
                            marginTop: '-8px'
                        }} src='https://image.flaticon.com/icons/png/512/867/867912.png'></img>
                    </IconButton>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography className={classes.title} variant="h5" noWrap>𝐁𝐨𝐨𝐤-𝐒𝐡𝐨𝐩</Typography>
                    </Link>
                    <div className={classes.search} >
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchVal}
                            onChange={handleValue}
                        />
                    </div>
                    <Link to='/list' style={{ textDecoration: 'none' }}>
                        <Button className={classes.jew}>GENRES</Button>
                    </Link>
                    <Link to={'/add'} style={{ textDecoration: 'none' }}>
                        <Button className={classes.jew}>ADMIN</Button>
                    </Link>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link to="/cart" style={{ color: "white" }}>
                            <IconButton href='/cart'
                                style={{ color: "white" }} aria-label="show 4 new mails" color="white">
                                <Badge badgeContent={cartLength} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Link to={'/favorite'} style={{ color: 'white' }}>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={favoritesLength} color="secondary">
                                    <FavoriteIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}