import React from 'react';
import Wall from './Wall';
import Slide from './Slide';
import Show from './Show';
import Map from '../Map/Map';

const Home = () => {
    return (
        <>
            <Wall />
            <Slide />
            <Show />
            <Map />
        </>
    );
};

export default Home;