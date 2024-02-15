import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../stylesheet/Experiences.css'

function Education() {

    return (
        <React.Fragment>
            <section className="education" id="education">
                <h1 className={'section-title'}>Education</h1>
                <div className="vertical-container">
                    <VerticalTimeline
                        layout={'1-column-right'}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2022 - present"
                            iconStyle={{ background: '#fff', color: '#fff' }}
                            icon={<img src={"img/Vertical_VT_Full_Color_RGB.svg"} alt="myLogo" />}
                        >
                            <h3 className="vertical-timeline-element-title">Virginia Tech</h3>
                            <h4 className="vertical-timeline-element-subtitle">B.S. Computer Science & HCI Minor</h4>
                            <ul>
                                <li>GPA: 3.98 out of 4.0</li>
                                <li>President’s List (Fall 2022)</li>
                                <li>Dean’s List (Spring 2023 & Fall 2023)</li>
                                <li>Expected Graduation Date: 2025</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2021 - 2022"
                            iconStyle={{ background: '#fff', color: '#fff' }}
                            icon={<img src={"img/Vertical_VT_Full_Color_RGB.svg"} alt="myLogo" />}
                        >
                            <h3 className="vertical-timeline-element-title">George Mason University</h3>
                            <h4 className="vertical-timeline-element-subtitle">B.S. Computer Science</h4>
                            {/*<p>*/}
                            <ul>
                                <li>GPA: 3.97 out of 4.0</li>
                                <li>Dean’s List (Fall 2021 & Spring 2022)</li>
                            </ul>
                            {/*</p>*/}
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </section>
        </React.Fragment>
    );
}


export default Education;
