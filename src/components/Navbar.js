import { Link } from 'react-router-dom'
import {Nav, Navbar, NavDropdown, Button, Form, FormControl } from 'react-bootstrap'

export default function SiteNavbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">TurnKey Construction</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/services#leaks">Leaks</NavDropdown.Item>
                        <NavDropdown.Item href="/services#">Roofs</NavDropdown.Item>
                        <NavDropdown.Item href="/services#">Remodels</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/services#">Not exactly sure?</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
