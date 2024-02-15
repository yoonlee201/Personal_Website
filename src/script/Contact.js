import React from "react";
import '../stylesheet/Contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Ensure you have the correct icon import

function Contact() {

    return (
        <React.Fragment>
            <section className="contact" id="contact">
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

                    <button className="btn btn-primary send-button" id="submit" type="submit">
                        <div className="alt-send-button">
                            <FontAwesomeIcon class="btn-icon" icon={faPaperPlane} />
                            {/*<FontAwesomeIcon icon={faPaperPlane} style={{ color: "#FFD43B" }} />*/}
                            <span className="send-text">SEND</span>
                        </div>
                    </button>

                </form>
            </section>
        </React.Fragment>
    );
}

export default Contact;
