import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './navbar_styles.css'
export const HeaderComp = () => {
    return (
        <>


            <Navbar bg="primary" data-bs-theme="dark">

                <Navbar.Brand className="ml-lg-4" href="#home">School Admin</Navbar.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>

            </Navbar>


        </>
    )
}
