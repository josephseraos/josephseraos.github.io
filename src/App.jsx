import React, { Fragment } from 'react'
import { Container, Spinner, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const App = () => {
    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Joseph S. Alcântara</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default App
