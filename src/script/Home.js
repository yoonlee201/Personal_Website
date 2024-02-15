import React, {Fragment, useLayoutEffect, useState } from 'react';

import '../stylesheet/Home.css'
import '../stylesheet/App.css'

import About from "./About";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Contact from "./Contact";
import Education from "./Education";

function Home() {
    return (
        <Fragment>
            <div className={"website"}>
                <section className={'home relative'} id="home">
                    <div className='home-banner'>
                        <img className={'home-banner-image'} id="skyline-to-korea"
                            src="/img/Skyline-to-Korea-2023.jpeg"
                        alt={'Skyline-to-Korea'} />
                </div>
                <h1 className={'home-name absolute college'} align="right">Yoonje<br />Lee</h1>
                </section>
                <ShowWindowDimensions />
                <About />
                <Skills />
                <Experiences />
                <Education/>
                <Contact />
            </div>
        </Fragment>
    );
}


function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return <span>Window size: {width} x {height}</span>;
}



export default Home;
