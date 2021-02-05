import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import styles from "../MainNav/scss.module.scss";
import Server from "../Server";

const MainNav = (props) => {
    const [currentKey, setCurrentKey] = useState(1);
    const path = window.location.pathname;
    useEffect(() => {
        switch (path) {
            case "/About":
                setCurrentKey(3)
                break;
            case "/Projects":
                setCurrentKey(2)
                break;
            default:
                setCurrentKey(1)
                break;
        }
    }, [path]);
    return (
        <Navbar bg="black" variant="dark" style={{ padding: '10px', marginBottom: '20px' }}>
            <Navbar.Brand className={styles.logofont} as={Link} to="/" onClick={() => setCurrentKey(1)}>
                <h4 style={{ margin: '0', }}><Server /></h4>
            </Navbar.Brand >
            <NavbarCollapse className="justify-content-end">
                <Nav className="justify-content-end" activeKey={currentKey} onSelect={(selectedKey) => { setCurrentKey(selectedKey) }}>
                    <Nav.Link as={Link} eventKey={1} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} eventKey={2} to="/Projects">
                        Projects
                    </Nav.Link>
                    <Nav.Link as={Link} eventKey={3} to="/About">
                        About
                    </Nav.Link>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    );
};

export default MainNav;