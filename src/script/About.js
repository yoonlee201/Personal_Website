import React, {Fragment} from "react";
import '../stylesheet/Home.css'
function About() {

    return (
        <Fragment>
            <div className={'about'} id="about">
                <div className='main-home-brief-introduction'>
                    <div className='main-home-container'>
                        <WindowProfile image='/img/YJ-NewYear-2024.jpeg'/>
                        <div className={'about-me-container'}>
                            <h1 className={'about-me-title'}>ABOUT ME</h1>
                            <p>Hi, my name is Yoonje Lee. I am a Junior studying computer science at Virginia Tech. </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

function WindowProfile({image}) {
    return (
        <Fragment>
            <div className='main-home-profile'>
                <svg className="window-back" viewBox="0 0 28 40">
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
                <img className={'main-home-profile-image'} id="yoonje-lee-main-page" src={image} alt={image} />
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
            </div>
            <svg>
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
        </Fragment>
    );
}



export default About;
