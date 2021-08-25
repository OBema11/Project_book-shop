import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    map: {
        width: '1400px',
        height: '600px',
    },
    mapBody: {
        // marginTop: '50px'
        backgroundColor: '#573ba3'
    }
}))

const Map = () => {

    const classes = useStyles()

    return (
        <div className={classes.mapBody}>
            <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.0580297881547!2d74.58473861478224!3d42.87161931063523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8241b52669f%3A0xb8b43841ad54c50b!2zMjkg0YPQu9C40YbQsCDQotCw0LHRi9GI0LDQu9C40LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1629873146156!5m2!1sru!2skg" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>
    );
};

export default Map;