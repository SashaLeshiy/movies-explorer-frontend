import React, { useEffect } from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';


function Main({ setMainPage}) {
    useEffect(() => {
        setMainPage(true);
    })
    return (
        <>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
        </>
    );
}
export default Main;