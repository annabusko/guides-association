import React, { Fragment } from 'react';

import SimpleSlider from '../components/Slider';
import PeopleMain from '../components/PeopleMain';
import RoutesBlock from '../components/Routes';
import ReasonsBlock from '../components/Reasons';

const img_set = [ 
     {
        url: require('../assets/images/slider/2.webp'),
    },  
    {
        url: require('../assets/images/slider/3.webp'),
    },
    {
        url: require('../assets/images/slider/4.webp'),
    },
    {
        url: require('../assets/images/slider/5.webp'),
    },
    {
        url: require('../assets/images/slider/6.webp'),
    },
    {
        url: require('../assets/images/slider/7.webp'),
    },
    {
        url: require('../assets/images/slider/8.webp'),
    },
];

const HomePage = () => (
    <Fragment>
        <SimpleSlider images={img_set} />
        <PeopleMain />
        <RoutesBlock /> 
        <ReasonsBlock />
    </Fragment>
);


export default HomePage;