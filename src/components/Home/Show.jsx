import React, { useContext, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: '',
        imgPath:
            'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_05/3446539/020121-anticipatedfictionbooks-bd-2x1.jpg',
    },
    {
        label: '',
        imgPath:
            'https://cdn.cnn.com/cnnnext/dam/assets/210104120513-januarybookslead.jpg',
    },
    {
        label: '',
        imgPath:
            'https://harpercollins.co.in/wp-content/uploads/2020/11/set13-07.jpg',
    },
    {
        label: '',
        imgPath:
            'https://assets.penguinrandomhouse.com/wp-content/uploads/2018/12/08221329/Learn-something-new-List-Assets-1200x628_.png',
    },
    {
        label: '',
        imgPath:
            'https://assets.penguinrandomhouse.com/wp-content/uploads/2021/07/30101452/1200x628-homepage-module_GEN_Fall-Books-1.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#573ba3'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: "#573ba3",
    },
    img: {
        height: '670px',
        display: 'block',
        width: '1500px',
        overflow: 'hidden',
        width: '100%',
    },
}));

function Show() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const history = useHistory()
    const { getProducts } = useContext(productContext)
    const [type, setType] = useState(getType())
    const [price, setprice] = useState(getPrice())

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };



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
        <div className={classes.root}>
            <div style={{ fontSize: '50px', fontWeight: '800', textAlign: 'center', backgroundColor: '#573ba3', color: 'white', marginBottom: '10px' }} color="inherit" > 🌟🌟🌟🌟🌟  BEST BOOKS OF ALL TIME 🌟🌟🌟🌟🌟 </div>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 1 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

        </div>
    );
}

export default Show;
