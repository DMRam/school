import React, { useState } from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';
import { useData } from '../../hooks/useData';

export const HeaderComp = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { onOffGearIcon } = useData();

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">School Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {onOffGearIcon && <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#schedule">Schedule</Nav.Link>
                    {/* Add more Nav.Link items for other links */}
                </Nav>
            </Navbar.Collapse>}

            {onOffGearIcon && <Dropdown show={showMenu} align={{ lg: 'end' }} className="mt-2 mt-lg-0">
                <Dropdown.Toggle variant="light" id="dropdown-basic" onClick={handleMenuToggle}>
                    <FaCog color="black" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                    <Dropdown.Item href="#logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>}
        </Navbar>
    );
};
