import React from "react";
import '../stylesheet/Home.css'

function Contact() {

    return (
        <React.Fragment>
            <div className="contact" id="contact">
                <form>
                    <label for="name">Name</label><br />
                    <input type="text" id="name" name="name" /><br />
                    <label for="email">Email</label><br />
                    <input type="text" id="email" name="email" /><br /><br />
                    <label for="message">Message</label><br />
                    <input type="text" id="message" name="message" /><br /><br />
                    <input type="submit" value="Contact Me!"></input>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Contact;
