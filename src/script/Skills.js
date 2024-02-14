import React from "react";
import '../stylesheet/Skills.css'


function Skills() {
    const skills = [
        { type: 'HTML5', image: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" },
        { type: 'CSS', image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
        { type: 'Javascript', image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
        { type: 'React', image: "img/logo192.png" },
        { type: 'Node.js', image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { type: 'Git', image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" },
        { type: 'Linux', image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" },
        { type: 'MongoDB', image: "img/mongodb-svgrepo-com.svg" },
        { type: 'C', image: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"  },
        { type: 'Java', image: "img/java-14.svg" },
        { type: 'Python', image: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" },
    ];
    ;
    return (
        <React.Fragment>
            <div id={"skills"}>
                <h1 className={'section-title'}>My Skills</h1>
                <div className={"skill-set"}>
                    {
                        skills.map(skill => (
                            <div key={skill.type} className="skill-container">
                                <img src={skill.image} className={`skill-image ${skill.type}-logo`}  alt={skill.type} />
                                <p className={`skill-title`}>{skill.type}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skills;