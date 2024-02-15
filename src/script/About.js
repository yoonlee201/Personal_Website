import React, {Fragment} from "react";
import '../stylesheet/About.css'
import '../stylesheet/App.css'
function About() {

    return (
        <Fragment>
            <section className={'about relative'} id="about">
                <div className='about-container flex flex-wrap justify-content-stretch relative inner-container '>
                    <WindowProfile image='/img/YJ-NewYear-2024.jpeg'/>
                    <div className={'about-objective flex flex-column justify-content-center'}>
                        <h1 className={'about-title relative college my-0'}>ABOUT ME</h1>
                        <p className={"about-text"}>
                            Hi, I’m Yoonje Lee, a junior at Virginia Tech, from South Korea.
                            At Virginia Tech, I am majoring in Computer Science and minoring in Human-Computer Interaction,
                            combining a devotion to computing with artistic flair. I have a great passion for full-stack and software engineering
                            and have a deep understanding of HTML/CSS/JS, React.js/Node.js, and MongoDB, but not limited to them only.
                            Besides Computer Science, I enjoy baking in my free time and challenging myself with crocheting.
                            My goal is to create a mini scarf by October. I am an ambitious learner who enjoys technological challenges,
                            having learning opportunities, and doing them with passion.
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

function WindowProfile({image}) {
    return (
        <Fragment>
            <div className='about-profile relative flex align-center justify-content-center'>
                <svg className="window-back relative" viewBox="0 0 28 40">
                    <path d="M 0 14 C 0 6.268 6.268 0 14 0
                                       C 21.732  0 28 6.268 28 14 V 26
                                       C 28 33.732 21.732 40 14 40
                                       C 6.268 40 0 33.732 0 26 V 18 Z"
                    />
                    {/*<path d="M10 18 C 10 10.268 16.268 4 24 4C31.732 4 38 10.268 38 18V30C38 37.732 31.732 44 24 44C16.268 44 10 37.732 10 30V18Z"/>*/}
                    {/*<path d="M 0 18 C 0 10.268 6.268 4 14 4 C 21.732 4 28 10.268 28 18 V 30 C28 37.732 21.732 44 14 44 C 6.268 44 0 37.732 0 30V18Z"/>*/}
                </svg>
                <svg className="window-front" viewBox="0 0 28 40">
                    {/*https://css-tricks.com/adding-shadows-to-svg-icons-with-css-and-svg-filters/*/}
                    <path d="M 0 14 C 0 6.268 6.268 0 14 0
                                       C 21.732  0 28 6.268 28 14 V 26
                                       C 28 33.732 21.732 40 14 40
                                       C 6.268 40 0 33.732 0 26 V 18 Z"
                    />
                </svg>
                <img className={'about-profile-image absolute'} id="yoonje-lee-main-page" src={image} alt={image} />
                <svg width="0" height="0" className={'main-home-profile-clip'}>
                    <defs>
                        <clipPath id="myClip" clipPathUnits="userSpaceOnUse"
                                  transform="scale(9.5)" >
                            <path d="M 0 14 C 0 6.268 6.268 0 14 0 C 21.732  0 28 6.268 28 14
                                            V 26 C 28 33.732 21.732 40 14 40 C 6.268 40 0 33.732 0 26
                                            V 18 Z" />
                        </clipPath>
                    </defs>5
                </svg>
                <svg className="window-front-inner" viewBox="0 0 28 40">
                    {/*https://css-tricks.com/adding-shadows-to-svg-icons-with-css-and-svg-filters/*/}
                    <path d="M 0 14 C 0 6.268 6.268 0 14 0
                                       C 21.732  0 28 6.268 28 14 V 26
                                       C 28 33.732 21.732 40 14 40
                                       C 6.268 40 0 33.732 0 26 V 18 Z"
                    />
                </svg>
                <svg className={"shadow"}>
                    <filter id='image-shadow'>
                        <feOffset dx='0' dy='0' />
                        <feGaussianBlur stdDeviation='4' result='offset-blur' />
                        <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse' />
                        <feFlood
                            floodColor='black'
                            floodOpacity='.65'
                            result='color'
                        />
                        <feComposite
                            operator='in'
                            in='color'
                            in2='inverse'
                            result='shadow'
                        />
                    </filter>
                    <filter id='inset-shadow'>
                        <feOffset
                            dx='0'
                            dy='0'
                        />
                        <feGaussianBlur
                            stdDeviation='4'
                            result='offset-blur'
                        />
                        <feComposite
                            operator='out'
                            in='SourceGraphic'
                            in2='offset-blur'
                            result='inverse'
                        />
                        <feFlood
                            floodColor='black'
                            floodOpacity='.95'
                            result='color'
                        />
                        <feComposite
                            operator='in'
                            in='color'
                            in2='inverse'
                            result='shadow'
                        />
                        <feComposite
                            operator='over'
                            in='shadow'
                            in2='SourceGraphic'
                        />
                        <feDropShadow
                            stdDeviation="3"
                            floodOpacity="0.5" />
                    </filter>
                </svg>
            </div>

        </Fragment>
    );
}



export default About;
