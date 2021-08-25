import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    footer: {
        display: 'flex',
        width: '1404px',
        height: '300px',
        backgroundColor: '#573ba3',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    block1: {

    },
    text1: {
        marginTop: '40px',
        color: 'white',
        fontSize: '20px',
        fontWeight: 500,
    },
    icons: {
        color: 'white',
        marginTop: '40px',
        cursor: 'pointer'
    }
});

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.footer}>
            <div className={classes.block1}>
                <Link to={'/aboutus'} style={{ textDecoration: 'none' }}> <div className={classes.text1}>About Us</div></Link>
                <div className={classes.text1}>Support/Help</div>
                <div className={classes.text1}>Become an affiliate</div>
            </div>
            <div className={classes.block1}>
                <Link to={'/contactus'} style={{ textDecoration: 'none' }}><div className={classes.text1}>Contacts</div></Link>
                <div className={classes.text1}>Gift cards</div>
                <div className={classes.text1}>Terms of use</div>
            </div>
            <div className={classes.block1}>
                {/* <div className={classes.text1}>Privacy notice</div> */}
                <div className={classes.text1}>Bookshop for authors</div>
                <div className={classes.text1}>Bookshop for bookstores</div>
                <Button href="https://www.instagram.com/bookshop_org/">
                    <InstagramIcon className={classes.icons} />
                </Button>
                <Button href="https://www.facebook.com/bookshop.org/">
                    <FacebookIcon className={classes.icons} />
                </Button>
                <Button href="https://twitter.com/bookshop_org">
                    <TwitterIcon className={classes.icons} />
                </Button>
            </div>
        </div>
    );
};