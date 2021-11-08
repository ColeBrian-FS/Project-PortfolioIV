import React from 'react';
import Container from 'react-bootstrap/Container'
const AboutUs = () => {
    return (<>
        {/* About Us */}
        <div className="about-us-container">
            <Container>
                <h1 className="about-us-title">About Us</h1>
                <p className="about-us-text">Exercise app is an all inclusive exercise application that is allows our users to create workout plans based on their specific targeted goals. Our goal is to help you reach your goal.  </p>
            </Container>
        </div>
    </>);
}

export default AboutUs;