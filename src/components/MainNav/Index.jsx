import { React, useState } from 'react'
import { Navbar, Nav } from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';

const MainNav = (props) => {
    const [currentKey, setCurrentKey] = useState(1);
    return (
        <Navbar bg="dark" variant="dark" style={{ padding: '10px', marginBottom: '20px' }}>
            <Navbar.Brand className="logo-font" as={Link} to="/" onClick={() => setCurrentKey(1)}>
                <h4 style={{ margin: '0', }}>{props.text}</h4>
            </Navbar.Brand>
            <NavbarCollapse>
                <Nav className="justify-content-end" activeKey={currentKey} onSelect={(selectedKey) => { setCurrentKey(selectedKey) }}>
                    <Nav.link as={Link} eventKey={1} to="/">
                        Links
                        </Nav.link>
                    <Nav.link as={Link} eventKey={2} to="/Projects">
                        Projects
                        </Nav.link>
                    <Nav.link as={Link} eventKey={3} to="/About">
                        About
                        </Nav.link>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    );
};

export default MainNav;