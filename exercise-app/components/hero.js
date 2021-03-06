import React from 'react';
import Container from 'react-bootstrap/Container'
import Link from "next/link"


const Hero = () => {
    return (
        <>
            {/* Hero */}

            <div className="hero">
                <div className="hero-title">
                    <Container>
                        <h1 className="hero-text">Set Your Goals</h1>
                        <p className="hero-text">Crush Your Goals </p>
                    </Container>
                    <Container className="btn-container">
                        <Link href="/dashboard"><a className="btn btn-primary btn-lg">Get Started</a></Link>
                    </Container>
                </div>
            </div>

        </>
    );
}

export default Hero;