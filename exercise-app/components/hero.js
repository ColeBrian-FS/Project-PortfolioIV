import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Link from "next/link"
import TopNav from "./navbar";

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
                        <Link href="/dashboard"><Button className="hero-btn">Get Started</Button></Link>
                    </Container>
                </div>
            </div>

        </>
    );
}

export default Hero;