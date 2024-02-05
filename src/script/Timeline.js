import React, { Fragment } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Skillbar from 'react-skillbars';
import 'react-vertical-timeline-component/style.min.css';
import '../stylesheet/Home.css'

function Timeline() {

    return (
        <React.Fragment>

            <div className="timeline" id="timeline">
                <div className="vertical-timeline">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2024 May"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Software Engineer Intern@Versy</h3>
                            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                            <p>
                                Internship starts at May 2024
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Undergraduate Teaching Assistant@Virginia Tech </h3>
                            <h4 className="vertical-timeline-element-subtitle">Blacksburg, VA</h4>
                            <p>
                                For course, CS2505, Introduction to Computer Orgainzation I
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2021 - present"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Virginia Tech</h3>
                            <h4 className="vertical-timeline-element-subtitle">B.S. Computer Science</h4>
                            <p>
                                GPA: 3.98/4.0 <br/>
                                Expected Graduation Date: 2025
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                <div>
                    <Skills />
                </div>
            </div>
        </React.Fragment>
    );
}


function Skills() {
    const skills = [
        { type: 'HTML5', level: 90 },
        { type: 'Java', level: 85 },
        { type: 'C', level: 80 },
        { type: 'Javascript', level: 75 },
        { type: 'CSS', level: 60 },
        { type: 'MongoDB', level: 60 },
        { type: 'React', level: 70 },
        { type: 'MongoDB', level: 50 },
        { type: 'Python', level: 30 },
    ];
    ;
    return (
        <Fragment>
            <Skillbar
                skills={skills}
                height={'10vh'}
            />
        </Fragment>
    );
}
export default Timeline;
