import React from "react";
import '../stylesheet/Home.css'

function Contact() {

    return (
        <React.Fragment>
            <div className="contact" id="contact">
                <h1 className={'section-title'}>Contact Me</h1>
                <form>
                    <label>Name<br />
                    <input type="text" id="name"  /><br />
                    </label>
                    <label >Email<br />
                    <input type="text" id="email" /><br /><br />
                    </label>
                    <label >Message<br />
                    <input type="text" id="message" name="message" /><br /><br />
                    </label>

                </form>
                <button >Submit</button>
            </div>
        </React.Fragment>
    );
}

export default Contact;
