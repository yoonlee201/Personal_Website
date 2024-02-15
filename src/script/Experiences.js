import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../stylesheet/Experiences.css'

function Experiences() {

    return (
        <React.Fragment>
            <section className="experiences" id="experiences">
                <h1 className={'section-title'}>Experiences</h1>
                <div className="vertical-container">
                    <VerticalTimeline
                        layout={'1-column-left'}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2024 May"
                            iconStyle={{ background: '#fff' , color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Software Engineer Intern@Versy</h3>
                            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                            <p>
                                Internship starts at May 2024
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2023 - 2024"
                            iconStyle={{ background: '#fff', color: '#fff' }}
                        icon={<img src={"img/Vertical_VT_Full_Color_RGB.svg"} alt="myLogo" />}
                        >
                            <h3 className="vertical-timeline-element-title">Undergraduate Teaching Assistant@Virginia Tech </h3>
                            <h4 className="vertical-timeline-element-subtitle">Blacksburg, VA</h4>
                            <ul>
                                <li>Communicated effectively with faculty regarding 500+ student progress and participated in professional development opportunities</li>
                                <li>Created documentation of instructions for students to set up ssh credentials in VS Code</li>
                                <li>Assisted students with course homework, assignments, and project</li>
                                <li>Introduction to Computer Organization I, 9 hours per week</li>

                            </ul>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </section>
        </React.Fragment>
    );
}


export default Experiences;
