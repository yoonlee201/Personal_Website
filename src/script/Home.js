import React, {Fragment} from "react";
import '../stylesheet/Home.css'
import About from "./About";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Contact from "./Contact";
import Education from "./Education";
function Home() {
    return (
        <Fragment>
            <section className={'home'} id="home">
                <div className='main-home-banner'>
                    <img className={'main-home-banner-image'} id="skyline-to-korea"
                        src="/img/Skyline-to-Korea-2023.jpeg"
                        alt={'Skyline-to-Korea'} />
                </div>
                <h1 className={'name'} align="right">Yoonje<br />Lee</h1>
                <About />
                <Skills />
                <Experiences />
                <Education/>
                <Contact />
            </section>
        </Fragment>
    );
}



export default Home;
