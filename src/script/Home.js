import React, {Fragment} from "react";
import '../stylesheet/Home.css'
import About from "./About";
import Timeline from "./Timeline";
import Contact from "./Contact";
function Home() {
    return (
        <Fragment>
            <div className={'home'} id="home">
                <div className='main-home-banner'>
                    <img className={'main-home-banner-image'} id="skyline-to-korea"
                        src="/img/Skyline-to-Korea-2023.jpeg"
                        alt={'Skyline-to-Korea'} />
                </div>
                <h1 className={'name'} align="right">Yoonje<br />Lee</h1>
                <About />
                <Timeline />
                <Contact />
            </div>
        </Fragment>
    );
}



export default Home;
