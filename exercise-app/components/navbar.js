import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"

const topNav = () => {
    return (<>
        <Navbar className="navbar2" expand="lg"  >
            <Navbar.Brand href="/">Exercise App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/signup"><Button className="btnPrimary">Sign Up</Button></Nav.Link>
                    <Nav.Link href="/login"><Button>Login</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>

    );
}

export default topNav;