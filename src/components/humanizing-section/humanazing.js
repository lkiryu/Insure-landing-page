import React from "react";
import imageIntro from '../../images/image-intro-desktop.jpg'

const Humanazing = () => {
    return (
        <section className='humanizing'>
            <div className="info">
                <div className="line"></div>
                <h1 className="title">Humanizing your insurance.</h1>
                <p className="description">Get your life insurance coverage easier and faster. We blend our expertise
                    and technology to help you find the plan that’s right for you. Ensure you
                    and your loved ones are protected.</p>
                <a href="/">View plans</a>
            </div>
            <img src={imageIntro} alt="intro"></img>
        </section>
    )
}

export default Humanazing